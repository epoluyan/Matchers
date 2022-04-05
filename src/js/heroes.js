export default function getHero(obj) {
  return obj.sort((a, b) => (a.health < b.health ? 1 : -1));
}
