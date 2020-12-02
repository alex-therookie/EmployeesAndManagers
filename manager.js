const { Employee,
    employee1,
    employee2,
    employee3 } = require("./employee.js");

class Manager extends Employee {
    constructor(name, title, salary, team) {
        super(name, title, salary)
        this.team = [];
    }

    getTeam() {
        if (Employee.boss === this.name) {
            this.team.push(Employee.name);
        }
    }

}

const manager1 = new Manager('alissa', 'manager', 10);

console.log(manager1);
console.log(employee1);
console.log(employee2);
console.log(employee3);
