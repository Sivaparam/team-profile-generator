const { execPath } = require('process');
const Employee = require('../lib/employee');

describe('creates employee', () => {
    it("it would create an object named employee with input", () => {
        const employee = new Employee('Ranjani', 12345, 'ranjani@gmail.com');

        expect(employee.name).toBe('Ranjani');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })


})