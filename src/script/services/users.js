import { baseUrl} from "../varialbles.js"


async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export{getUser}