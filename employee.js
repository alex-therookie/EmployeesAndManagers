class Employee {
    constructor(name, title, salary, boss) {
      this.name = name;
      this.salary = salary;
      this.title = title;
      this.boss = boss;
      if (boss) boss.addTeamMember(this);
    }
  bonus(multiplier) { 
    return this.salary * multiplier
  }
}

module.exports = {
  Employee
};
