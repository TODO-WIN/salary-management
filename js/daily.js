'use strict';

let balance = 0;
let remaining = 0;
let saving = 0;
let expenses = 0;

const addSalary = document.getElementById('addSalary');
const card = document.getElementById('card');
const submit = document.getElementById('submit');
const tbody = document.getElementById('tbody');


function addBalance(event) {
  event.preventDefault();
  let inputBalance = parseInt(document.getElementById('salary').value);
  //console.log(inputBalance);
  localStorage.setItem('salary', JSON.stringify(inputBalance));
  render();
}

function render() {
  card.innerHTML = '';
  let pTotal = document.createElement('p');
  card.appendChild(pTotal);
  let total = JSON.parse(localStorage.getItem('salary'));
  if (total) {
    balance = parseInt(total);
  }
  pTotal.textContent = `Current Balance ${balance}`;
  let saveExpense = JSON.parse(localStorage.getItem('exp'));
  if (saveExpense) {
    expenses = parseInt(saveExpense);
  }
  let exp = document.createElement('p');
  card.appendChild(exp);
  exp.textContent = `Expenses  ${expenses}`;
  //console.log(expenses);
  let remain = document.createElement('p');
  card.appendChild(remain);
  remaining = balance - expenses;
  remain.textContent = `Remaining  ${remaining}`;
  //console.log(remaining);

}


function addExpenses(event) {


    event.preventDefault();
    let type = document.getElementById('type').value;
    let amount = parseInt(document.getElementById('amount').value);
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    //console.log(type, amount);
    new Salary(type, amount, time, date);
    localStorage.setItem('salaryAll', JSON.stringify(Salary.all));
    if (balance != expenses) {
        tableRender();
    }
    expenses += amount;
    //console.log("exp=" + expenses);
    localStorage.setItem('exp', JSON.stringify(expenses));
    render();
    //   if (balance != expenses) {
    //         tableRender();
    //     }
    tableRender();

}

function tableRender() {



    let date = new Date();
    tbody.innerHTML = '';
    let data = JSON.parse(localStorage.getItem('salaryAll'));
    if (data) {
        for (let i = 0; i < data.length; i++) {
            const tRow = document.createElement('tr');
            tbody.appendChild(tRow);
            const td1 = document.createElement('td');
            tRow.appendChild(td1);
            td1.textContent = data[i].name;
            //console.log(data[i].name);
            const td2 = document.createElement('td');
            tRow.appendChild(td2);
            td2.textContent = data[i].amount;
            const tdDate = document.createElement('td');
            tRow.appendChild(tdDate);
            tdDate.textContent = data[i].date;
            const tdTime = document.createElement('td');
            tRow.appendChild(tdTime);
            tdTime.textContent = data[i].time;
            const tdDelete = document.createElement('td');
            tRow.appendChild(tdDelete);
            const button = document.createElement('button');
            tdDelete.appendChild(button);
            button.textContent = 'X';
            button.setAttribute('id', data[i].name);
            button.addEventListener('click', removeRow);


        }


    }

  }
}

function removeRow(event) {
  


    let data = JSON.parse(localStorage.getItem('salaryAll'));
    var itemToRemove = event.target.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].name === itemToRemove) {
            expenses=expenses-data[i].amount;
            console.log(expenses);
            tbody.deleteRow(i);
            data.splice(i, 1);
            localStorage.setItem('salaryAll', JSON.stringify(data));
            
        }
        
    }
    localStorage.setItem('exp', JSON.stringify(expenses));
    render();
}

render();
tableRender();
addSalary.addEventListener('click', addBalance);
submit.addEventListener('click', addExpenses);