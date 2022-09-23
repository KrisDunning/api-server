'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe ('basic express server', () =>{

  it('handles no name in query string', async () =>{
    const response = await request.get('/person?name=');
    console.log('validator failed test response: ',response.body);
    expect(response.status).toEqual(500);
  });

  it( 'handles a name in the query', async () =>{
    const response = await request.get('/person?name=WillWilson');
    console.log('validator passed test response : ',response.body );
  });
});
