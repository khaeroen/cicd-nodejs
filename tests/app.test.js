const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should return the home page with the correct message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('This Application is running properly! 🚀');
    });
});

describe('GET /dewaweb', () => {
    it('should return the Dewaweb page with the correct message', async () => {
        const res = await request(app).get('/dewaweb');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello Dewaweb!');
    });
});