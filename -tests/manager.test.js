const { execPath } = require('process');
const { Manager } = require('../lib/manager');

describe('creates manager', () => {
    it("would generate an object named manager with input provided", () => {
        const manager = new Manager('Sivaranjani', 12345, 'sivaranjani@gmail.com', 213455555);

        expect(manager.name).toBe('Sivaranjani');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNum).toEqual(expect.any(Number));
    })


})