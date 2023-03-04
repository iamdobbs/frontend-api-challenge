const PeepsModel = require ('./peepsModel')

describe('PeepsModel', () => {
  let peep;

  beforeEach(() => {
    peep = new PeepsModel();
  });

    it('constructs with an empty peeps array', () => {
      expect(peep.peeps).toEqual([]);
    });

    it('can add a peep', () => {
      peep.addPeep('This is a peep')
      expect(peep.peeps).toContain('This is a peep');
      expect(peep.getPeeps()).toEqual(['This is a peep']);
    });
})