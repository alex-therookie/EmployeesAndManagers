const { Employee
      } = require("./employee.js");

class Manager extends Employee {
    constructor(name, title, salary, boss, team) {
      super(name, title, salary, boss)
      this.team = []
    }
  addTeamMember(employee) { 
      this.team.push(employee)
  }
  totalSubSalary() { 
    let totalSubSalary = 0;
    this.team.forEach((employee) => { 
      if (employee instanceof Manager) {
        totalSubSalary += employee.salary + employee.totalSubSalary();
      } else { 
        totalSubSalary += employee.salary;
      }
    })
  }
  
  bonus(multiplier) { 
    return this.totalSubSalary() + this.salary * multiplier;
  }
  
}
const employee1 = new Employee("alex", "programmer", 99000, "alissa");
const employee2 = new Employee("jackson", "programmer", 99000, "alissa");

const manager1 = new Manager("alissa", "manager", 99010, "javier");
manager1.addTeamMember(employee1)
manager1.addTeamMember(employee2)
const manager2 = new Manager('javier', 'bigBoss', 99020);
manager2.addTeamMember(manager1)


// console.log(manager1.team)
console.log(manager2.totalSubSalary());
// console.log(manager2.team);
// console.log(manager2.getTeam());
// console.log(manager2.team);
