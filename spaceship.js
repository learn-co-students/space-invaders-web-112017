class Spaceship {
  constructor(name,crew){
    this.name = name
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.crew = crew
    for (let person of crew){
      person.currentShip = this
    }
    this.docked = this.crew.length < 1
    this.phasersCharge = 'uncharged'
  }

}
