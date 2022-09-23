'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const {sequelizeDatabase} = require('../src/models');
const request = supertest(app);


beforeAll(async () => {
  await sequelizeDatabase.sync();
});
afterAll(async () => {
  await sequelizeDatabase.drop();
});



describe ('Testing basic api server', () =>{

  it('creates a food', async () =>{
    let response = await request.post('/food').send({
      name: 'banana',
      color: 'yellow',
      foodgroup: 'fruit',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('banana');
    expect(response.body.color).toEqual('yellow');
    expect(response.body.foodgroup).toEqual('fruit');
  });

  it ('should read from food', async () =>{
    expect(true).toBe(false);
  });

  it ('should update a food', async () =>{
    expect(true).toBe(false);
  });

  it ('should delete a food', async () =>{
    expect(true).toBe(false);
  });


});
