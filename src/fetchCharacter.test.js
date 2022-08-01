const { fetchCharacter } = require('./fetchCharacter.js');

describe('Teste Geral do fetchCharacter', () => {
    it('Verifica se o nome da personagem é Wonder Woman', async () => {
        const character = await fetchCharacter();
        console.log(character);
    });
});
