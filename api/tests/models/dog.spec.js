const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    
    describe('name', () => {
      it('should throw an error if name is null', async () => {
        try {
          await Dog.create({
            height: '12 - 16',
            weight: '12 - 16'
          })
        } catch (err) {
          expect(err.message).to.equal('notNull Violation: dog.name cannot be null')
        }
      });
    });

    describe('height', () => {
      it('should throw an error if height is null', async () => {
        try {
          await Dog.create({
            name: 'Henry_Dog',
            weight: '12 - 16'
          })
        } catch (err) {
          expect(err.message).to.equal('notNull Violation: dog.height cannot be null')
        }
      });
    });

    describe('weight', () => {
      it('should throw an error if weight is null', async () => {
        try {
          await Dog.create({
            name: 'Henry_Dog',
            height: '12 - 16'
          })
        } catch (err) {
          expect(err.message).to.equal('notNull Violation: dog.weight cannot be null')
        }
      });
    });

    describe('Create a new dog', () => {
			describe('New dog', () => {
				it('Should create successfully a dog', async () => {
					await Dog.create({
            name: 'Toby', 
            height: '12 - 16',
            weight: '4 - 7',
            lifeSpan: '8'
          });
					const dog = await Dog.findOne({
						where: {
							name: 'Toby',
						},
					});
					expect(dog.name).to.equal('Toby');
					expect(dog.weight).to.equal('4 - 7');
				});
      });
		});
  });
});