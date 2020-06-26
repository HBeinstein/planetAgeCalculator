export class User {
  constructor(name, dateOfBirth, ageInEarthDays) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.ageInEarthDays = ageInEarthDays;
    this.lifeExpectancy = 100;
  }

  findAgeMars() {
    let marsAge = Math.round((this.ageInEarthDays / 687) * 10) / 10;
    return marsAge;
  }

  findAgeVenus() {
    return Math.round((this.ageInEarthDays / 225) * 10) / 10;
  }

  findAgeMercury() {
    return Math.round((this.ageInEarthDays / 88) * 10) / 10;
  }

  findAgeJupiter() {
    return Math.round((this.ageInEarthDays / 4333) * 10) / 10;
  }

  findAgeSaturn() {
    return Math.round((this.ageInEarthDays / 10759) * 10) / 10;
  }

  findAgeUranus() {
    return Math.round((this.ageInEarthDays / 30687) * 10) / 10;
  }

  findAgeNeptune() {
    return Math.round((this.ageInEarthDays / 60190) * 10) / 10;
  }

  howLongTilDeath(planet) {
    return 80 - planet;
  }
};