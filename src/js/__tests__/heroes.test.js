import getHero from '../heroes';

const objHeroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const objHeroesSort = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('should get sort list heroes', () => {
  const result = getHero(objHeroes);
  expect(result).toEqual(objHeroesSort);
});
