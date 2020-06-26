import { planetsDaysInYear } from './../src/main.js';

export class User {
  constructor(name, dateOfBirth, ageInEarthDays) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.ageInEarthDays = ageInEarthDays;
    this.lifeExpectancyInYears = 80;
    this.lifeExpectancyInDays = 29200;
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

  howLongTilDeathEarthYears(ageOnPlanet) {
    if (this.ageInEarthDays < 29200) {
      return this.lifeExpectancyInYears - ageOnPlanet;
    } else if (this.ageInEarthDays >= 29200) {
      return Math.round(((this.ageInEarthDays / 365) - ageOnPlanet) * 10) / 10;
    } else {
      console.log('error');
    }
  }

  howLongTilDeathPlanetYears(planet, ageOnPlanet) {
    if (this.ageInEarthDays < 29200) {
      return Math.round(((this.lifeExpectancyInDays / planetsDaysInYear[planet]) - ageOnPlanet) * 10) / 10;
    } else if (this.ageInEarthDays >= 29200) {
      return Math.round((ageOnPlanet - (this.lifeExpectancyInDays / planetsDaysInYear[planet])) * 10) / 10;
    } else {
      console.log('error');
    }
  }
};

