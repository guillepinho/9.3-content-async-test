require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    expect.assertions(2);

    const character = await fetchCharacter('720');
    expect(character.name).not.toEqual('Spider');
    expect(character.name).toEqual('Wonder Woman');
});

it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
  const failRequest = await fetchCharacter();
  expect.assertions(1);

  expect(failRequest).toEqual(new Error('You must provide an url'));
});

it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
  const response = await fetchCharacter('parâmetro qualquer');
  expect.assertions(1);

  expect(response).toBe('Invalid id');
});

it('Verifica se fetch é chamada com o endpoint correto', async () => {
  const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
  await fetchCharacter('720');
  expect.assertions(2);

  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenCalledWith(url);
});

});