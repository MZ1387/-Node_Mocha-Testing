const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app')

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Mario', 31);
    expect(spy).toHaveBeenCalledWith('Mario', 31);
  })

  it('should call save user with user object', () => {
    const email = 'm@z.com';
    const password = '123';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password })
  })

})
