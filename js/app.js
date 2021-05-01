function Salary(name, amount) {
    this.name = name;
    this.amount = amount;
    Salary.all.push(this);
}

Salary.all = [];