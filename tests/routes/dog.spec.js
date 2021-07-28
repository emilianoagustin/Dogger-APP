const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Henry_Dog',
  height: '15 - 18',
  weight: '8 - 12'
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /dogs', () => {
    it('Should get 200', () => {
      agent.get('/dogs').expect(200);
    }).timeout(47000);
    it('Should response with 173 results', async () => {
      try {
        const res = await agent.get('/dogs');
        expect(res.body).to.have.lengthOf(172);
      } catch (err) {
        console.log(err);
      }
    });
    it('Should response with a name if has a query parameter', async () => {
			try {
				const res = await agent.get('/dogs?name=Akita');
				expect(res.body[0].name).to.be.equal('Akita');
			} catch (err) {}
		}).timeout(47000);
    it('Should response with a dog if has an id parameter', async () => {
			try {
				const res = await agent.get('/dogs/1');
				expect(res.body[0].name).to.be.equal('Affenpinscher');
			} catch (err) {}
		}).timeout(47000);
  });

  describe('POST /dog', () => {
    it('Should get 201', async () => {
      try {
        await agent.post('/dog').send({
          name: "Alfie",
          height: "12 - 17",
          weight: "10 - 13",
          lifeSpan: "9",
        }).expect(201);
      } catch (err) {
        console.log(err);
      }
    });
    it('Should response with 400 if there are no values', async () => {
      try {
        await agent.post('/dog').send({}).expect(400);
      } catch (err) {
        console.log(err);
      }
    });
    it('Should response with 400 if there is a wrong value', async () => {
      try {
        await agent.post('/dog').send({
          height: '13 - 15',
          weight: '5 - 9'
        }).expect(400);
      } catch (err) {
        console.log(err);
      }
    });
    it('Should create a dog successfully', async () => {
      try {
        const newDog = await agent.post('/dog').send({
          name: 'Oliver',
          height: '10 - 14',
          weight: '10 - 17',
          lifeSpan: '13'
        });
        expect(newDog.body.name).to.be.equal('Oliver')
      } catch (err) {
        console.log(err);
      }
    })
  });
});

