'use strict';
let total = 0;
let dayArr = ["2021-05-01", "2021-05-02", "2021-05-03", "2021-05-04"];
let arr=res;
console.log(arr);

console.log(arr[0].amount);
let totalOfTotal=0;
const maytable = document.getElementById('may');

function tableHeader() {
    const tableRow = document.createElement('tr');
    maytable.appendChild(tableRow);
    const tableHeader = document.createElement('th');
    tableHeader.textContent = 'Day';
    tableRow.appendChild(tableHeader);

    for (let i = 0; i < arr.length; i++) {
        const tableHeader2 = document.createElement('th');
        tableHeader2.textContent = arr[i].date;
        tableRow.appendChild(tableHeader2);
    }
    const tableHeader3 = document.createElement('th');
    tableHeader3.textContent = 'Total Of The Month';
    tableRow.appendChild(tableHeader3);
}
function tableRender() {
      const tableRow = document.createElement('tr');
        maytable.appendChild(tableRow);
        const td1 = document.createElement('td');
        td1.textContent = 'Total'  
        tableRow.appendChild(td1);
   // let data = JSON.parse(localStorage.getItem('salaryAll'));
    for (let i = 0; i < arr.length; i++) {
        const td2 = document.createElement('td');
        td2.textContent = arr[i].amount;
        tableRow.appendChild(td2);
    }
    for (let i=0;i<arr.length;i++)
    {
        totalOfTotal+=parseInt(arr[i].amount);
    }
    const td3 = document.createElement('td');
    td3.textContent =  totalOfTotal; 
    tableRow.appendChild(td3);
}

tableHeader();
tableRender();

// function tableRender() {


// }


//tableRender();

