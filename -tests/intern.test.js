const { execPath } = require('process');
const { Intern } = require('../lib/intern');

describe('creates intern', () => {
    it("would create an object named intern with input provided", () => {


        const intern = new Intern('Siva', 34456, 'siva@gmail.com', 'GA Tech');

        expect(intern.name).toBe('Siva');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    })
})