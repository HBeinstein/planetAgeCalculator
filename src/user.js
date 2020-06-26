import { planetsDaysInYear } from './../src/main.js';

export class User {
  constructor(name, dateOfBirth, ageInEarthDays) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.ageInEarthDays = ageInEarthDays;
    this.lifeExpectancy = 80;
  }

  findAgeMars() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.mars) * 10) / 10;
  }

  findAgeVenus() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.venus) * 10) / 10;
  }

  findAgeMercury() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.mercury) * 10) / 10;
  }

  findAgeJupiter() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.jupiter) * 10) / 10;
  }

  findAgeSaturn() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.saturn) * 10) / 10;
  }

  findAgeUranus() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.uranus) * 10) / 10;
  }

  findAgeNeptune() {
    return Math.round((this.ageInEarthDays / planetsDaysInYear.neptune) * 10) / 10;
  }

  howLongTilDeath(planetAge) {
    return this.lifeExpectancy - planetAge;
  }

  howLongTilDeathPlanetYears(planetAge) {
    return this.lifeExpectancy - planetAge;
  }
};

