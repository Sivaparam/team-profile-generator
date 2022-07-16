const { execPath } = require('process');
const { Engineer } = require('../lib/engineer');

describe('creates engineer', () => {
    it("it would create an object named engineer with input provided", () => {
        const engineer = new Engineer('Parames', 98765, 'parames@gmail.com', 'parames');

        expect(engineer.name).toBe('Parames');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.gitUserName).toEqual(expect.any(String));
    })


})