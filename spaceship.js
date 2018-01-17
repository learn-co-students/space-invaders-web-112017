// load 1
let store = {spaceShips: [], crewMembers: []}

const Spaceship = (() => {
  let id = 0;

  return class Spaceship {
    constructor(name, crew, phasers, shields) {
      //Assign values
      this.id = ++id;
      this.name = name;
      this.phasers = phasers;
      this.shields = shields;
      this.cloaked = false;
      this.warpDrive = 'disengaged';
      this.crew = crew;
      this.phasersCharge = 'uncharged';

      if (this.crew.length > 0) {
        for (const element of crew) {
          element.currentShip = this // Set crew currentShip
        }
        this.docked = false
      } else {
        this.docked = true
      }

      store.spaceShips.push(this)
    } //constructor
  } //class spaceship
})(); //const spaceship
