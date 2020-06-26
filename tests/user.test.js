import { User } from './../src/user.js';


describe('user planet ages', () => {

  Test('should correctly instantiate new User object', () => {
    const appUser = new User('Hannah', '27');
    expect(appUser.name).toEqual('Hannah');
    expect(appUser.age).toEqual('27');
  })
});