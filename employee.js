class Employee {
    constructor(name, title, salary, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
}

const employee1 = new Employee('alex', 'programmer', 99000, 'alissa');
const employee2 = new Employee('jackson', 'programmer', 99000, 'alissa');
const employee3 = new Employee('fred', 'programmer', 99000, 'javier');

// console.log(employee1);
// console.log(employee2);
// console.log(employee3);

module.exports = {
    Employee,
    employee1,
    employee2,
    employee3
}
