import POKEMON from './data/pokemon/pokemon.js'
import { readPokemon, ordenarAZ, ordenarZA, ordenarNumber, searchPokemonByName, findPokemonByCandy, appearsPokemons, filterType } from './data.js';

var listPokemones = readPokemon(POKEMON);

document.querySelector("#page-1").style.display = "none";
document.querySelector("#page-3").style.display = "none";
document.querySelector("#page-4").style.display = "none";

document.querySelector(".img-section-1").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-1").style.display = "flex";
    paintPokemones(listPokemones, ".sectionInitPokemon", listPokemones.length);
});

document.querySelector(".img-section-2").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    /*  const bichoType = document.querySelector("#bichoT");
  const bichoWeak = document.querySelector("#bichoD");
  console.log(bichoType.getAttribute("name"));
  console.log(bichoWeak.value);*/
});

document.querySelector(".img-section-4").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-4").style.display = "flex";

});

document.querySelector(".img-section-3").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    const listPaintOfPokemon = appearsPokemons(listPokemones);
    paintPokemones(listPaintOfPokemon, ".sectionCandyPokemon", 10);
});

document.querySelector("#buttonTypeWeakness").addEventListener('click', (event) => {
    document.querySelector("#sectionFilterTypeWeakness").innerHTML = "";
    searchTypeWeakness()
    cleanCheckBox();
});

function cleanCheckBox() {
    let checkboxes = document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos        
            checkboxes[i].checked = false; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
    }
}

function searchTypeWeakness() {
    let checkboxes = document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
    let type = [];
    let weakness = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox" && checkboxes[i].checked == true) { //solo si es un checkbox entramos  
            let name = checkboxes[i].name;
            if (checkboxes[i].value == 'type')
                type.push(name);
            else
                weakness.push(name)
        }
    }
    let listPaintOfPokemon = filterType(POKEMON, type);
    console.log(type);
    console.log(listPaintOfPokemon);
}

function paintPokemones(listPaintOfPokemon, sectionPaint, index) {
    const sectionCards1 = document.querySelector(sectionPaint);
    const sectionCards2 = document.querySelector(".section-cards-2");
    for (let j = 0; j < index; j++) {
        let cardPokemon = document.createElement('article');
        cardPokemon.classList.add("style-card-pokemon");
        let pokemonName = document.createElement('h3');
        pokemonName.classList.add("style-card-name");
        let pokemonImg = document.createElement('img');
        pokemonImg.classList.add("style-card-img");
        let pokemonNum = document.createElement('h4');
        pokemonNum.classList.add("style-card-num");

        cardPokemon.id = listPaintOfPokemon[j].id;
        pokemonName.textContent = listPaintOfPokemon[j].name;
        pokemonImg.src = listPaintOfPokemon[j].img;
        pokemonNum.textContent = listPaintOfPokemon[j].num;

        cardPokemon.appendChild(pokemonName);
        cardPokemon.appendChild(pokemonImg);
        cardPokemon.appendChild(pokemonNum);

        sectionCards1.appendChild(cardPokemon);
    }

}

document.getElementById('buttonSearch').addEventListener('click', (event) => {
    const name = document.getElementById('textSearch').value;
    const listPaintOfPokemon = searchPokemonByName(listPokemones, name);
    document.querySelector(".sectionInitPokemon").innerHTML = "";
    paintPokemones(listPaintOfPokemon, ".sectionInitPokemon");

});

document.getElementById('fieldOrdenar').addEventListener('change', (event) => {
    event.preventDefault();
    const ordenarValue = document.getElementById('fieldOrdenar').value;
    let listPaintOfPokemon = "";
    if (ordenarValue == 1)
        listPaintOfPokemon = ordenarAZ(listPokemones);
    else if (ordenarValue == 2)
        listPaintOfPokemon = ordenarZA(listPokemones);
    else
        listPaintOfPokemon = ordenarNumber(listPokemones);
    document.querySelector(".sectionInitPokemon").innerHTML = "";
    paintPokemones(listPaintOfPokemon, ".sectionInitPokemon", listPaintOfPokemon.length);
});

document.querySelector("#buttonFindCandy").addEventListener('click', (event) => {
    event.preventDefault();
    const numberOfCandy = parseInt(document.querySelector("#inputCandy").value);
    let listPaintOfPokemon = findPokemonByCandy(listPokemones, numberOfCandy);
    console.log(listPaintOfPokemon);

});
