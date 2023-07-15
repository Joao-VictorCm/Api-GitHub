import { getUser } from "./services/users.js"
import { getRepost } from "./services/repositorio.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js"




document.getElementById("btn-search").addEventListener("click", () =>{
    const userName = document.getElementById("input-search").value
    if(validateEmpyImput(userName))return
    getUserData(userName)
})

function validateEmpyImput(userName){
    if(userName.length === 0){
        alert("Prencha o campo com o nomoe do usuário do GitHub ")
        return true
    }
}

document.getElementById("input-search").addEventListener("keyup", (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmpyImput(userName))return
        getUserData(userName)
    }
})




 async function getUserData(userName){

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFond()
        return
    }

    const respositoriesResponse = await getRepost(userName)

    user.setInfo(userResponse)
    user.setRepositories(respositoriesResponse)


    const eventosResponse =  await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(respositoriesResponse)
    user.setEvents(eventosResponse)


    screen.renderUser(user)
    console.log(user)
    

}



