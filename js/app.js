
function Salary(name, amount, time, date) {
    this.name = name;
    this.amount = amount;
    this.time = time;
    this.date = date;

    Salary.all.push(this);

}

Salary.all = [];

let data = JSON.parse(localStorage.getItem('salaryAll'));
if (data){
var res = data.reduce((acc, obj) => {
    var existObj = acc.find(item => item.date === obj.date);
    if (existObj) {
        existObj.amount = (parseInt(existObj.amount) + parseInt(obj.amount)).toString();
        return acc;
    }
    acc.push(obj);
    return acc;
}, []);
console.log(res);
}
