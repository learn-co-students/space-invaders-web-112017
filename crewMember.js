class CrewMember{

  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive () {
    
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged';
    }
  }

  setsInvisibility () {
    return this.position === "Defender" &&
      this.currentShip !== "Looking for a Rig"
      ? (this.currentShip.cloaked = true)
      : "had no effect";
  }

  chargePhasers () {
    return this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig' ? (this.currentShip.phasersCharge = 'charged') : 'had no effect';
  }

}
