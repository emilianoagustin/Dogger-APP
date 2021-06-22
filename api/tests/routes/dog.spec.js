const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Henry_Dog',
  height: '15',
  weight: '8'
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => conn.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /dogs', () => {
    it('should get 200', () => {
      agent.get('/dogs').expect(200);
    });
    it('should response with a json', () => {
      agent.get('/dogs')
        .expect('Content-Type', /json/);
    });
  });
  describe('GET /dogs?name=', () => {
    it('should get 404 when dog not found', () => {
      agent.get('/dogs?name=wrongdogname')
        .expect(404);
    });
    it('should get 200 if dog was found', () => {
      agent.get('/dogs?name=henry_dog')
        .expect(200);
    });
    it('should response with a json', () => {
      agent.get('/dogs?name=terrier')
        .expect('Content-Type', /json/);
    });
  });
  describe('GET /dogs/:id', () => {
    it('should get 404 when dog not found', () => {
      agent.get('/8654')
        .expect(404);
    });
    it('should get 200 if dog was found', () => {
      agent.get('dogs/200')
        .expect(200);
    });
  });
  describe('POST /dog', () => {
    it('should get 400 when some fields are missing', () => {
      agent.post('/dog')
        .send({
          weight: '23'
        })
        .expect(400);
    });
    it('create a dog in database', () => {
      agent.post('/dog')
        .send({
          name: 'luke',
          height: '6 - 10',
          weight: '7 - 12',
          lifeSpan: '10'
        })
        .then(() => {
          return Dog.findOne({
            where: {
              name: 'luke'
            }
          });
        })
        .then(dog => {
          expect(dog).to.exist;
        });
    });
  });
});

