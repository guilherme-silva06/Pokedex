/* Clicar no card, isso ira apagar a classe aberta do pokemon autal, e irá  classe aberta para o pokemon que foi clicado. Irá trocar também a classe ativo para um pokemon */

const pokemonSelectionList = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.pokemon-card')

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const currentlyOpen = document.querySelector('.open')
        currentlyOpen.classList.remove('open')

        const idSelectedPokemon = pokemon.attributes.id.value
        const cardToOpen = document.getElementById(idSelectedPokemon +'-card')
        cardToOpen.classList.add('open')

        const currentlyActive = document.querySelector('.active')
        currentlyActive.classList.remove('active')

        const listedPokemon = document.getElementById(idSelectedPokemon)
        listedPokemon.classList.add('active')
    })
})