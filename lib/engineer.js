const Team = require('./team');

class Engineer extends Team {
    constructor(name, id, email, gitUserName) {
        super(name, id, email);
        this.gitUserName = gitUserName;
    }
}