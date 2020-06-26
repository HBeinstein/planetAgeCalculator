
import { User } from './../src/user.js';

describe('user planet ages', () => {
  let appUser;

  beforeEach(() => {
    appUser = new User('Hannah', [10, 21, 1992], 10110);
  });

  test('should correctly instantiate new User object', () => {
    expect(appUser.name).toEqual('Hannah');
    expect(appUser.dateOfBirth).toEqual([10, 21, 1992])
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

});