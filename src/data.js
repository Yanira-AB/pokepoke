export const readPokemon = (data) => {
  return data.map(pokemon => ({ id: pokemon.id, num: pokemon.num, name: pokemon.name, img: pokemon.img, candy: pokemon.candy, candy_num: pokemon.candy_count, spawns: pokemon.spawn_chance, time: pokemon.spawn_time }))
};

export const ordenarAZ = (data) => {
  data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
  return data;
}

export const ordenarZA = (data) => {
  data = data.sort((a, b) => (a.name < b.name ? 1 : -1));
  return data;
}

export const ordenarNumber = (data) => {
  data = data.sort((a, b) => (a.id > b.id ? 1 : -1));
  return data;
}

export const searchPokemonByName = (data, name) => {
  return data = data.filter(data => (data.name == name));
}

export const findPokemonByCandy = (data, number) => {
  return data = data.filter(data => (data.candy_num == number));
}

export const appearsPokemons = (data) => {
  return data.sort((a, b) => (a.spawns < b.spawns ? 1 : -1));

}

/*export const filterType = (data, array) => {
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (data[index].type.length > 0) {
        let element = data[index].type;
        let resultFilter = element.filter((element => {if (element == array[index2]) {
          pokemons.push(data[index]);
        }}));
      }
    }
  }
  console.log(pokemons);
  return pokemons;
}*/

export const filterType = (data, array) => {
  let firstFilter = [];
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index].type.length > 0) {
      let element = data[index].type;
      for (let index2 = 0; index2 < array.length; index2++) {
        if (firstFilter.length > 0) {
          for (let index3 = 0; index3 < firstFilter.length; index3++) {
            let element2 = firstFilter[index3].type;
            let resultFilter2 = element2.filter((element2 => {
              if (element2 == array[index3]) {
                pokemons.push(data[index]);
              }
            }));
          }
        }
        let resultFilter = element.filter((element => {
          if (element == array[index2]) {
            firstFilter.push(data[index]);
          }
        }));
      }
    }
  }
  console.log(pokemons);
  return pokemons;
}

/*export const filterType = (data, condition) => {
  //const pokes = data.filter(data => (data.type == 'Bug'));
  let element=[];
  for (let index = 0; index < data.length; index++) {
    if (data[index].type.length > 0) {
      for (let index2 = 0; index2 < data[index].type.length; index2++) {
        if (data[index].type[index2] == condition) {
          element.push(data[index]);
        }
      }
    }
  }
  return element;
}

export const filterWeak = (data, condition) => {
  let element=[];
  for (let index = 0; index < data.length; index++) {
    if (data[index].weaknesses.length > 0) {
      for (let index2 = 0; index2 < data[index].weaknesses.length; index2++) {
        if (data[index].weaknesses[index2] == condition) {
          element.push(data[index]);
        }
      }
    }
  }
  return element;
}*/
