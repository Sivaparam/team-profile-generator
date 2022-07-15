const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    addManagerInfo(){
        return  (`<div>
        <ul>
            <li>manager Name:${this.name} </li>
            <li>manager id:${this.id}</li>
            <li>manager email:${this.email}</li>
            <li>manager contact: ${this.officeNum}</li>
        </ul>
    </div>`)
    }
}


    const managerPromts = [
         {
             type: 'input',
             name: 'manName',
             message: 'Enter Managers Name:',
         },
     
         {
             type: 'input',
             name: 'manId',
             message: 'Enter Managers ID',
         },
         {
             type: 'input',
             name: 'manEmail',
             message: 'Enter Managers Email:',
         },
         {
             type: 'input',
             name: 'manContact',
             message: 'Enter Managers Office Number:',
         },
     ];
     
 


module.exports =  {Manager, managerPromts};