

const screen = {
    useProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.useProfile.innerHTML = `<div class = "info">
                       <img src="${user.avatarUrl}" alt="foto de perfil" />
                       <div class= "data">
                       <h1>${user.name ?? "Não possui nome cadastrado 😒"}
                       <p>${user.bio ?? "Não possui bio cadastrada 😒"}
                       <p class = "Followers"> ${user.following} Following 💠 ${user.followers} Followers</p>
                       </div>
                       </div>`

    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="blank">${repo.name}</a> 
    🍴${repo.forks}-⭐${repo.stargazers_count}-👀${repo.watchers_count}-👨‍💻${repo.language}</li>` )
        
    if(user.repositories.length > 0){
        this.useProfile.innerHTML += `<div class="repositories section">
                                    <h2>Repositórios</h2>
                                    <ul>${repositoriesItens}</ul>
                                    </div>`
    }



    let eventsItens = ""
    user.events.forEach(eve => eventsItens += `<li><a href">${eve.repo.name} - ${eve.type}</a></li>`)
    if(user.events.length > 0){
        this.useProfile.innerHTML += `<div class="events">
                                      <h2>Eventos</h2>
                                      <ul>${eventsItens}</ul>
                                      </div>`
                                    
    }
    },


    renderNotFond(){
        this.useProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
}

export{screen}