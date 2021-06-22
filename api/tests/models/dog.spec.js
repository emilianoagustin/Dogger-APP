const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Dog.create({
          ID:'',
          name: 'Henry_Dog',
          height: '11',
          weight: '6'
        })
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Dog.create({
          name: 'Henry_Dog',
          height: '11',
          weight: '6'
        });
      });
    });
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({
          height: '7',
          weight: '5'
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({
          name: 'Pug',
          height: '7',
          weight: '5'
        });
      });
    });
    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Dog.create({
          name: 'Henry_Dog',
          weight: '10'
        })
          .then(() => done(new Error('It requires a valid height value')))
          .catch(() => done());
      });
      it('should work when its a valid height value', () => {
        Dog.create({
          name: 'Henry_Dog',
          height: '10'
        });
      });
    });
    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Dog.create({
          name: 'Henry_Dog',
          height: '15'
        })
          .then(() => done(new Error('It requires a valid weight value')))
          .catch(() => done());
      });
      it('should work when its a valid weight value', () => {
        Dog.create({
          name: 'Henry_Dog',
          weight: '8'
        });
      });
    });
  });
});