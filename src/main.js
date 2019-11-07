const lala = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  },
  {
    id: 10,
    num: '010',
    name: 'Caterpie',
    img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
    type: [
      'Bug',
    ],
    height: '0.30 m',
    weight: '2.9 kg',
    candy: 'Caterpie Candy',
    candy_count: 12,
    egg: '2 km',
    spawn_chance: 3.032,
    avg_spawns: 303.2,
    spawn_time: '16:35',
    multipliers: [1.05],
    weaknesses: [
      'Fire',
      'Flying',
      'Rock',
    ],
    next_evolution: [{
      num: '011',
      name: 'Metapod',
    }, {
      num: '012',
      name: 'Butterfree',
    }],
  },
  {
    id: 13,
    num: '013',
    name: 'Weedle',
    img: 'http://www.serebii.net/pokemongo/pokemon/013.png',
    type: [
      'Bug',
      'Poison',
    ],
    height: '0.30 m',
    weight: '3.2 kg',
    candy: 'Weedle Candy',
    candy_count: 12,
    egg: '2 km',
    spawn_chance: 7.12,
    avg_spawns: 712,
    spawn_time: '02:21',
    multipliers: [
      1.01,
      1.09,
    ],
    weaknesses: [
      'Fire',
      'Flying',
      'Psychic',
      'Rock',
    ],
    next_evolution: [{
      num: '014',
      name: 'Kakuna',
    }, {
      num: '015',
      name: 'Beedrill',
    }],
  }, {
    id: 23,
    num: '023',
    name: 'Ekans',
    img: 'http://www.serebii.net/pokemongo/pokemon/023.png',
    type: [
      'Poison',
    ],
    height: '2.01 m',
    weight: '6.9 kg',
    candy: 'Ekans Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.27,
    avg_spawns: 227,
    spawn_time: '12:20',
    multipliers: [
      2.21,
      2.27,
    ],
    weaknesses: [
      'Ground',
      'Psychic',
    ],
    next_evolution: [{
      num: '024',
      name: 'Arbok',
    }],
  }];

import POKEMON from './data/pokemon/pokemon.js'
import { readPokemon, ordenarAZ, ordenarZA, ordenarNumber, searchPokemonByName, findPokemonByCandy, appearsPokemons, filterType, filterWeak } from './data.js';

var listPokemones = readPokemon(POKEMON);

document.querySelector("#page-1").style.display = "none";
document.querySelector("#page-2").style.display = "none";
document.querySelector("#page-3").style.display = "none";
document.querySelector("#page-4").style.display = "none";

document.querySelector(".img-section-1").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-1").style.display = "flex";
    paintPokemones(listPokemones, ".sectionInitPokemon", listPokemones.length);
});

document.querySelector("#link-start-1").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-1").style.display = "flex";
    paintPokemones(listPokemones, ".sectionInitPokemon", listPokemones.length);
});

document.querySelector(".linkMenu1").addEventListener('click', (event) => {
    console.log('hola');
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-1").style.display = "flex";
    paintPokemones(listPokemones, ".sectionInitPokemon", listPokemones.length);
});

/*document.querySelector(".img-section-2").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    /*  const bichoType = document.querySelector("#bichoT");
  const bichoWeak = document.querySelector("#bichoD");
  console.log(bichoType.getAttribute("name"));
  console.log(bichoWeak.value);
});*/

document.querySelector(".img-section-2").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-2").style.display = "flex";
});

document.querySelector("#link-start-2").addEventListener('click', (event) => {
  document.querySelector("#page-0").style.display = "none";
  document.querySelector("#page-2").style.display = "flex";
});

document.querySelector(".linkMenu2").addEventListener('click', (event) => {
  document.querySelector("#page-0").style.display = "none";
  document.querySelector("#page-1").style.display = "none";
  document.querySelector("#page-2").style.display = "flex";
  document.querySelector("#page-4").style.display = "none";
  document.querySelector("#page-3").style.display = "none";
});

document.querySelector(".img-section-3").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    const listPaintOfPokemon = appearsPokemons(listPokemones);
    paintCanvas(listPaintOfPokemon);
    paintPokemones(listPaintOfPokemon, ".section10Pokemon", 10);
});

document.querySelector("#link-start-3").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    const listPaintOfPokemon = appearsPokemons(listPokemones);
    paintCanvas(listPaintOfPokemon);
    paintPokemones(listPaintOfPokemon, ".section10Pokemon", listPaintOfPokemon.length);
});

document.querySelector(".linkMenu3").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-4").style.display = "none";
    document.querySelector("#page-3").style.display = "flex";
    const listPaintOfPokemon = appearsPokemons(listPokemones);
    paintCanvas(listPaintOfPokemon);
    paintPokemones(listPaintOfPokemon, ".section10Pokemon", 10);
});

document.querySelector(".img-section-4").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-4").style.display = "flex";

});

document.querySelector("#link-start-4").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-4").style.display = "flex";
 });

 document.querySelector(".linkMenu4").addEventListener('click', (event) => {
    document.querySelector("#page-0").style.display = "none";
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
    document.querySelector("#page-4").style.display = "flex";
 });

document.querySelector("#buttonTypeWeakness").addEventListener('click', (event) => {
    document.querySelector("#sectionFilterTypeWeakness").innerHTML = "";
    searchTypeWeakness()
    //cleanCheckBox();
});

document.getElementById('buttonSearch').addEventListener('click', (event) => {
    const name = document.getElementById('textSearch').value;
    const listPaintOfPokemon = searchPokemonByName(listPokemones, name);
    document.querySelector(".sectionInitPokemon").innerHTML = "";
    paintPokemones(listPaintOfPokemon, ".sectionInitPokemon",listPaintOfPokemon.length);

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
    
    const numberOfCandy = parseInt(document.querySelector("#inputCandy").value);
    let listPaintOfPokemon = findPokemonByCandy(listPokemones, numberOfCandy);
    paintPokemones(listPaintOfPokemon, ".sectionCandyPokemon", listPaintOfPokemon.length);
});

document.querySelector('#buttonFastPokemon').addEventListener('click', (event) => {
    let number = parseInt(document.querySelector('#inputNumber').value);
    console.log(number);
    const listPaintOfPokemon = appearsPokemons(listPokemones);
    document.querySelector(".section10Pokemon").innerHTML = "";
    paintCanvas(listPaintOfPokemon);
    paintPokemones(listPaintOfPokemon, ".section10Pokemon", number);
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
    let listPaintOfPokemon;
    if (type.length === 0) {
      listPaintOfPokemon = filterWeak(POKEMON, weakness);
      paintPokemones(listPaintOfPokemon, "#sectionFilterTypeWeakness", listPaintOfPokemon.length);
    } else if (weakness.length === 0) {
      listPaintOfPokemon = filterType(POKEMON, type);
      paintPokemones(listPaintOfPokemon, "#sectionFilterTypeWeakness", listPaintOfPokemon.length);
    } else if (type.length > 0 && weakness.length > 0) {
      listPaintOfPokemon = filterWeak(filterType(lala, type), weakness);
      paintPokemones(listPaintOfPokemon, "#sectionFilterTypeWeakness", listPaintOfPokemon.length);
    } else {
      alert('Escoge seleccionar algún tipo o debilidad');
    }
    
    console.log(listPaintOfPokemon);
}

function paintPokemones(listPaintOfPokemon, sectionPaint, index) {
    const sectionCards1 = document.querySelector(sectionPaint);
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
        pokemonNum.textContent = 'No. ' + listPaintOfPokemon[j].num;

        cardPokemon.appendChild(pokemonName);
        cardPokemon.appendChild(pokemonImg);
        cardPokemon.appendChild(pokemonNum);

        sectionCards1.appendChild(cardPokemon);
    }
}

function paintCanvas(listPaintOfPokemon) {
    var ctx = document.getElementById('myChart').getContext('2d');
    let pokemonName = [];
    let pokemonSpawns = [];
    for (let index = 0; index < 10; index++) {
        pokemonName.push(listPaintOfPokemon[index].name);
        pokemonSpawns.push(listPaintOfPokemon[index].spawns);
    }
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: pokemonName,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: ['#C66E3E', '#8B4E93', '#D19433', '#1FA8FF', '#E84D2C', '#FF120D', '#F0BD1B', '#74B560', '#C49E4D', 'FFDC00'],
                borderColor: ['#C66E3E', '#8B4E93', '#D19433', '#1FA8FF', '#E84D2C', '#FF120D', '#F0BD1B', '#74B560', '#C49E4D', 'FFDC00'],
                data: pokemonSpawns,

            }]
        },

        // Configuration options go here
        options: {
            legend: {
                position: 'right',
                align: 'center',
            }
        }
    });
}
