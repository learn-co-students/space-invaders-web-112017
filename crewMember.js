class CrewMember {
  constructor(position, currentShip = "Looking for a Rig"){
    this.position = position;
    this.currentShip = currentShip;
  }

  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else if (this.position !== "Pilot") {
      return "unauthorized to set warp drive"
    }
    if (this.currentShip.warpDrive === "disengaged"){
      this.currentShip.warpDrive = "engaged"
    } else {
      this.currentShip.warpDrive = "disengaged"
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else if (this.position !== "Defender") {
      return "unauthorized to set cloaking"
    }
    (this.currentShip.cloaked) ? this.currentShip.cloaked = false : this.currentShip.cloaked = true;
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else if (this.position !== "Gunner") {
      return "unauthorized to set phasers"
    }
    if (this.currentShip.phasersCharge === "uncharged"){
      this.currentShip.phasersCharge = "charged"
    } else {
      this.currentShip.phasersCharge = "uncharged"
    }
  }
}
