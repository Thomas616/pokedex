const pokemon__name = document.querySelector('.pokemon__name');
const pokemon__number = document.querySelector('.pokemon__number');
const pokemon__image = document.querySelector('.pokemon__image');



const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponde = await fetch 
    (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponde.status === 200){
        const data = await APIResponde.json()
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemon__name.innerHTML = 'Loading. . . '
    pokemon__number.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemon__name.computedStyleMap.display = 'block';
        pokemon__number.innerHTML = data.name 
        pokemon__image.src = data['sprites']['versions']['generation-v']
        input.value = data.id;
    }else{
        pokemon__image.style.display = 'none';
        pokemon__name.innerHTML = 'NOT FOUND :c';
        pokemon__number.innerHTML = '';
    }
}

form.addEventListener('submit' , (event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowercase());
})

buttonPrev.addEventListener('click', ()=>{
if (searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
}


});

buttonNext.addEventListener('click', () =>{
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon)

