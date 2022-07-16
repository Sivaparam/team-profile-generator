
// main class - common data for manager, engineer, intern
class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

//makes the class available to other js.
module.exports = Employee;