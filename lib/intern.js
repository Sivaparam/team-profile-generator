const Team = require('./team');

class Intern extends Team {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}