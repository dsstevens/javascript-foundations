function createVampire(vampireName, vampirePet = 'bat') {
  var vampire = {
    name: vampireName,
    pet: vampirePet
  };
  return vampire;
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}