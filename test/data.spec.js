// importamos la función `example`
import { readPokemon, ordenarAZ } from "../src/data.js";

describe('readPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof readPokemon).toBe('function');
  });

  describe('readPokemon', () => {
    it('debería retornar "el id, num, name, img, candy, candy_num, spawns y time" para "un array con objetos"', () => {
      expect(readPokemon([{
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
      }])).toBe({
        id: 1,
        num: '001',
        name: 'Bulbasaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
        candy: 'Bulbasaur Candy',
        candy_num: 25,
        spawns: 0.69,
        time: '20:00',
      });
    });
  });
});

describe('ordenarAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  describe('ordenarAZ', () => {
    it('debería retornar data ordenada alfabeticamente A-Z', () => {
      expect(ordenarAZ()).toBe();
    });
  });
});
