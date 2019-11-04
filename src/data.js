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

export const filterType = (data, condition) => {
  return data.filter(data => (data.type == 'Bug'));

}
