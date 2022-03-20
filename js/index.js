/* 
Ao clicar no pokemon da listagem temos que esconder o card aberto e mostrar o card clicado ao que foi 
selecionado na listagem.
Vamos precisar trabalhar com dois elementos.
1 - listagem
2 - card-pokemon
Depois vamos trabalhar com evento do click.
*/

// Precisamos criar duas variaveis no JS para trabalhar com esses elementos na tela:
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    // vamos trabalhar com um evento de click feito pelo usuario na listagem-pokemons:
    pokemon.addEventListener('click', () =>{
    // remover a classe aberto só do cartão que está aberto:
    const cardPokemonAberto = document.querySelector('.aberto')
    cardPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao será correspondente:
        const idPokemonSelected = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'card-' + idPokemonSelected
        const cardPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cardPokemonParaAbrir.classList.add('aberto')
       //remover a classe ativo que marca o pokemon selecionado:
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a classe ativo no item da lista selecionado :
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelected)
       pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})

