export const readPokemon = (data) => {
  return data.map((pokemon) => ({
    id: pokemon.id,
    num: pokemon.num,
    name: pokemon.name,
    img: pokemon.img,
    candy: pokemon.candy,
    candy_num: pokemon.candy_count,
    spawns: pokemon.spawn_chance,
    time: pokemon.spawn_time,
  }));
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

export const filterType = (data, array) => {
  //debugger
  let count = 0;
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (data[index].type.length > 0) {
        let element = data[index].type;
        let resultFilter = element.filter((element => {
          if (element === array[index2]) {
            count = count + 1;
          }
          if (data[index].type[data[index].type.length - 1] === element && count === array.length) {
            pokemons.push(data[index]);
            count = 0;
          }
          if (data[index].type[data[index].type.length - 1] === element && array[array.length-1] === array[index2]) {
            count = 0;
          }
        }));
      }
    }
  }
  //console.log(pokemons);
  return pokemons;
}

export const filterWeak = (data, array) => {
  //debugger
  let count = 0;
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (data[index].weaknesses.length > 0) {
        let element = data[index].weaknesses;
        let resultFilter = element.filter((element => {
          if (element === array[index2]) {
            count = count + 1;
          }
          if (data[index].weaknesses[data[index].weaknesses.length - 1] === element && count === array.length) {
            pokemons.push(data[index]);
            count = 0;
          }
          if (data[index].weaknesses[data[index].weaknesses.length - 1] === element && array[array.length-1] === array[index2]) {
            count = 0;
          }
        }));
      }
    }
  }
  //console.log(pokemons);
  return pokemons;
}

/*export const filterType = (data, array) => {
  //debugger
  let lala = [];
  let pokePlease = 0;
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (data[index].type.length > 0) {
        let element = data[index].type;
        let resultFilter = element.filter((element => {
          if (element === array[index2]) {
            pokemons.push(data[index]);
            for (let index3 = 0; index3 < pokemons.length; index3++) {
              const element2 = pokemons[index3].type;
              let secondFilter = element2.filter((element2 => {
                if (element2 === 'Bug') {
                  lala.push(pokemons[index3]);
                }
              }));
            }
          }
        }));
      }
    }
  }
  console.log(lala);
  return pokemons;
}*/

/*export const filterType = (data, array) => {
  //debugger
  let pokePlease = 0;
  let pokemons = [];
  for (let index = 0; index < data.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (data[index].type.length > 0) {
        let element = data[index].type;
        let resultFilter = element.filter((element => {
          if (element == array[index2]) {
            pokePlease = + 1;
          }
        }));
        if (pokePlease == array.length) {
          pokemons.push(data[index]);
        }
      }
    }
  }
  console.log(pokemons);
  return pokemons;
}*/

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
