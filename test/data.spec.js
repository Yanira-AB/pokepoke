// importamos la función `example`
// eslint-disable-next-line import/extensions
import { probandoTest } from '../src/data.js';

describe('probandoTest', () => {
  it('debería ser una función', () => {
    expect(typeof probandoTest).toBe('function');
  });
});

describe('probandoTest', () => {
  it('debería retornar 2', () => {
    expect(probandoTest(1, 1)).toBe(2);
  });
});
