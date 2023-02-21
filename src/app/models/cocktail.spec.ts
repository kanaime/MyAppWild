import { Cocktail } from './cocktail';

describe('Cocktail', () => {
  it('should create an instance', () => {
    expect(new Cocktail('toto0',5,'laphoto')).toBeTruthy();
  });
});
