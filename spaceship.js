class Spaceship {
    constructor(name, crew, phasers, shields) {
      this.name = name

      for (const member of crew) {
        member.currentShip = this
      }

      this.crew = crew
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      this.warpDrive = "disengaged"

      if (!this.crew[0]) {
        this.docked = true
      } else {
        this.docked = false
      }

      this.phasersCharge = "uncharged"
    }
}
