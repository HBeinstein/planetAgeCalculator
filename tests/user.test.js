
import { User } from './../src/user.js';

describe('user planet ages and lifespan info', () => {
  let appUser;
  let olderAppUser;

  beforeEach(() => {
    appUser = new User('Hannah', [10, 21, 1992], 10110);
    olderAppUser = new User('Craig', [10, 21, 1930], 32756);
  });

  test('should correctly instantiate new User object', () => {
    expect(appUser.name).toEqual('Hannah');
    expect(appUser.dateOfBirth).toEqual([10, 21, 1992]);
    expect(appUser.ageInEarthDays).toEqual(10110);
  });

  test('should correctly calculate age of user on Mars', () => {
    expect(appUser.findAgeMars()).toEqual(14.7);
  });


  test('should correctly calculate age of user on Venus', () => {
    expect(appUser.findAgeVenus()).toEqual(44.9);
  });

  test('should correctly calculate age of user on Mercury', () => {
    expect(appUser.findAgeMercury()).toEqual(114.9);
  });

  test('should correctly calculate age of user on Jupiter', () => {
    expect(appUser.findAgeJupiter()).toEqual(2.3);
  });

  test('should correctly calculate age of user on Saturn', () => {
    expect(appUser.findAgeSaturn()).toEqual(.9);
  });

  test('should correctly calculate age of user on Uranus', () => {
    expect(appUser.findAgeUranus()).toEqual(.3);
  });

  test('should correctly calculate age of user on Neptune', () => {
    expect(appUser.findAgeNeptune()).toEqual(.2);
  });

  test('should correctly calculate remaining life expectancy of user on specific planet using earth years if younger than 80 earth years old', () => {
    expect(appUser.howLongTilDeathEarthYears(appUser.findAgeJupiter())).toEqual(77.7);
  });

  test("should correctly calculate remaining life expectancy of user on specific planet using that planet's years if younger than 80 earth years old", () => {
    expect(appUser.howLongTilDeathPlanetYears('jupiter', appUser.findAgeJupiter())).toEqual(4.4);
  });

  test("should correctly calculate how far over life expectancy a user is in earth years if user is 80 earth years or older", () => {
    expect(olderAppUser.howLongTilDeathEarthYears(olderAppUser.findAgeJupiter())).toEqual(82.1);
  });

  test("should correctly calculate how far over life expectancy a user is using a specific planet's years if user is 80 earth years or older", () => {
    expect(olderAppUser.howLongTilDeathPlanetYears('jupiter', olderAppUser.findAgeJupiter())).toEqual(.9);
  });

  test("should correctly concatenate (<80 years old) user info using template literal to append to DOM", () => {
    expect(appUser.createWebpageInfo(appUser.name, 'jupiter', appUser.findAgeJupiter(), appUser.howLongTilDeathEarthYears(appUser.findAgeJupiter()))).toEqual("Hi Hannah, your age on jupiter is 2.3! You'll likely live 77.7 more years on this planet.");
  });

  test("should correctly concatenate (>=80 years old) user info using template literal to append to DOM", () => {
    expect(olderAppUser.createWebpageInfo(olderAppUser.name, 'jupiter', olderAppUser.findAgeJupiter(), olderAppUser.howLongTilDeathPlanetYears('jupiter', olderAppUser.findAgeJupiter()))).toEqual("Hi Craig, your age on jupiter is 7.6! Congrats! You've already outlived the average lifespan on this planet by 0.9 years!");
  });

});