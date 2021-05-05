
function Salary(name, amount, time, date) {
    this.name = name;
    this.amount = amount;
    this.time = time;
    this.date = date;

    Salary.all.push(this);

}

Salary.all = [];



