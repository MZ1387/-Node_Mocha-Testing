const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
      it('should add two numbers', () => {
          const res = utils.add(33, 11);
          expect(res).toBe(44).toBeA('number')
      })
  })

  it('should async add two number', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number')
      done();
    })
  })

  it('should square a number', () => {
      const res = utils.square(3);

      expect(res).toBe(9).toBeA('number')
  })

  it('should async square a number', (done) => {
      utils.asyncSquare(3, (sum) => {
      expect(sum).toBe(9).toBeA('number')
      done();
    })
  })

  it('should set first name and last name', () => {
    const res = utils.setName({ age: 31, location: 'South Africa'}, 'Mario Zamora');

    expect(res)
      .toBeA('object')
      .toInclude({
          firstName: 'Mario',
          lastName: 'Zamora'
      })
  })


    it('should expect some values', () => {
        expect(12).toNotBe(13);
        expect({ name: 'Mario' }).toEqual({ name: 'Mario' })
        expect([2, 3, 4]).toExclude(5);
        expect({
            name: 'Mario',
            age: 31,
            location: 'South Africa'
        }).toExclude({
            age: 34
        })
    })
})
