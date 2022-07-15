const Team = require('./team');

class Manager extends Team {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
} 