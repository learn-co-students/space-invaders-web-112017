//load 2
const CrewMember = (() => {
  let crewId = 0

  return class CrewMember {
    constructor(position) {
      this.id = ++crewId;
      this.position = position;
      this.currentShip = 'Looking for a Rig'
      store.crewMembers.push(this)
    }

    engageWarpDrive() {
      if (this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
        this.currentShip.warpDrive = 'engaged'
      } else {
        return 'had no effect'
      }
    }

    setsInvisibility() {
      if (this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }

    chargePhasers() {
      if (this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
        this.currentShip.phasersCharge = 'charged'
      } else {
        return 'had no effect'
      }
    }
  } //class crewMember
})(); //cont crewMember
