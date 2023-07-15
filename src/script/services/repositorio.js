import { baseUrl, repositoriesQuanty } from "../varialbles.js"


async function getRepost(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuanty}`)
    return await response.json()
}

export{getRepost}