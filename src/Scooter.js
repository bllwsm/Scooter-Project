class Scooter {
  // scooter code here

  static nextSerial = 1;

  constructor(station, user, charge = 100, isBroken = false) {
    this.station = station || null;
    this.user = user || null;
    this.serial = Scooter.nextSerial++;
    this.charge = charge;
    this.isBroken = isBroken;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user;
      this.station = null;
    }
    throw new Error("scooter needs to charge or scooter needs repair");
  }

  dock(station) {
    this.station = station;
  }
}

module.exports = Scooter;
