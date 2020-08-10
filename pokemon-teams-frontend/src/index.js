document.addEventListener("DOMContentLoaded", function(e) {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const main = document.querySelector('main')

    function fetchTrainers() {
        fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(trainers => trainers.forEach(trainer =>renderTrainer(trainer)))
    }

    


    function renderTrainer(trainer) {
        const card = document.createElement('div')
        card.className = "card"
        card.dataset.id = trainer.id
        card.innerHTML = `<p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}"class= "add">Add Pokemon</button> `
        trainer.pokemons.forEach(pokemon => {
            const cardLi = document.createElement('li')
            cardLi.dataset.id = pokemon.id
            cardLi.innerHTML = `${pokemon.nickname} (${pokemon.species})`
            const releaseButton = document.createElement('button')
            releaseButton.className = "release"
            releaseButton.innerText = "release"
            cardLi.append(releaseButton)
            card.appendChild(cardLi)
    })
        main.appendChild(card)
    }


    document.addEventListener('click', function(e) {
       if(e.target.className === 'add') {
           console.log('clicked')
           //const trainerId = {trainer_id: e.target.dataset.id}
           console.log(trainerId)
   

            //function getRandomPokemon()
            fetch(`${TRAINERS_URL}/${trainerId}` ,{
                Method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(trainerId)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        



       }else if(e.target.className === 'release')
           console.log('done')
        // Whenever a user hits Release Pokemon on a specific Pokemon team, 
        // that specific Pokemon should be released from the team.
        fetch(`${TRAINERS_URL}/${trainerId}` ,{
            Method: "DELETE",
        })
        .then(response => response.json())
        .then(data => console.log(data))
  
    })

    fetchTrainers()
    //getRandomPokemon()


})

