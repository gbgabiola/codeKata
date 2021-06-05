function combat(health, damage) {
  // return health > damage ? health - damage : 0;
  return Math.max(0, health - damage);
}
