/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

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
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /dogs', () => {
    it('should get 200', () => {
      return agent.get('/dogs').expect(200);
    });
    it('espera que responda con un json', () => {
      return agent.get('/dogs')
        .expect('Content-Type', /json/);
    });
  });
  describe('GET /dogs?name=', () => {
    it('responde con 404 cuando el Dog no existe', () => {
      return agent.get('/dogs?name=wrongdogname')
        .expect(404);
    });
    it('responde con 200 cuando el Dog existe', () => {
      return agent.get('/dogs?name=terrier')
        .expect(200);
    });
    it('espera que responda con un json', () => {
      return agent.get('/dogs?name=terrier')
        .expect('Content-Type', /json/);
    });
  });
  describe('GET /dogs/:id', () => {
    it('responde con 404 cuando el Dog no existe', () => {
      return agent.get('/999')
        .expect(404);
    });
    it('responde con 200 cuando el Dog existe', () => {
      return agent.get('/200')
        .expect(200);
    });
  });
  describe('POST /dog', () => {
    it('responde con 400 cuando faltan campos requeridos', () => {
      return agent.post('/dog')
        .send({
          weight: '23'
        })
        .expect(400);
    });
  });
});

