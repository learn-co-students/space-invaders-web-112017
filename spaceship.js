class Spaceship {
  constructor(name, crew, phasers, shields) {
    //this.id = ++spaceshipId
    this.name = name;
    this.phasers = phasers;
    this.shields = shields
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.crew = crew;
      if (this.crew.length === 0){
        this.docked = true;
      } else {
        this.docked = false;
      };

      this.phasersCharge = "uncharged";
      const ship = this
      this.crew.forEach(function(crewMember){
        crewMember.currentShip = ship;
      });
    }
}
