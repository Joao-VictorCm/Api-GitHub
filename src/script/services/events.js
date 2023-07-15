import { baseUrl, repositoriesQuanty } from "../varialbles.js"


async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuanty}`)
    return await response.json()
}

export{getEvents}