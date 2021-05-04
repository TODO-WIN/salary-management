'use strict';

let mayArr = ['2021-05-01', '2021-05-02', '2021-05-03', '2021-05-04',
  '2021-05-05', '2021-05-06', '2021-05-07', '2021-05-08', '2021-05-09', '2021-05-10',
  '2021-05-11', '2021-05-12', '2021-05-13', '2021-05-14', '2021-05-15', '2021-05-16',
  '2021-05-17', '2021-05-18', '2021-05-19', '2021-05-20', '2021-05-21', '2021-05-22',
  '2021-05-23', '2021-05-24', '2021-05-25', '2021-05-26', '2021-05-27', '2021-05-28',
  '2021-05-29', '2021-05-30', '2021-05-31'];
let junArr = ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04',
  '2021-06-05', '2021-06-06', '2021-06-07', '2021-06-08', '2021-06-09', '2021-06-10',
  '2021-06-11', '2021-06-12', '2021-06-13', '2021-06-14', '2021-06-15', '2021-06-16',
  '2021-06-17', '2021-06-18', '2021-06-19', '2021-06-20', '2021-06-21', '2021-06-22',
  '2021-06-23', '2021-06-24', '2021-06-25', '2021-06-26', '2021-06-27', '2021-06-28',
  '2021-06-29', '2021-06-30'];
let julArr = ['2021-07-01', '2021-07-02', '2021-07-03', '2021-07-04',
  '2021-07-05', '2021-07-06', '2021-07-07', '2021-07-08', '2021-07-09', '2021-07-10',
  '2021-07-11', '2021-07-12', '2021-07-13', '2021-07-14', '2021-07-15', '2021-07-16',
  '2021-07-17', '2021-07-18', '2021-07-19', '2021-07-20', '2021-07-21', '2021-07-22',
  '2021-07-23', '2021-07-24', '2021-07-25', '2021-07-26', '2021-07-27', '2021-07-28',
  '2021-07-29', '2021-07-30', '2021-07-30'];
let arr = res;
let saving = 0;
let goals = 0;
var myChart = undefined;;

const save = document.getElementById('saving');
const buttonSaving = document.getElementById('buttonSaving');
const showSave = document.getElementById('shawSaving');

const maytable = document.getElementById('mayT');
const juntable = document.getElementById('junT');
const jultable = document.getElementById('julT');
const mayButton = document.getElementById('may');
const junButton = document.getElementById('jun');
const julButton = document.getElementById('jul');
const goal = document.getElementById('goal');
const buttonGoal = document.getElementById('buttonGoal');


function mayRender() {
  let totalOfTotal = 0;
  if (arr) {

    const tableRow = document.createElement('tr');
    maytable.appendChild(tableRow);
    const tableHeader = document.createElement('th');
    tableHeader.textContent = 'Day';
    tableRow.appendChild(tableHeader);
    const tableHeader2 = document.createElement('th');
    tableHeader2.textContent = 'Total Of The Month';
    tableRow.appendChild(tableHeader2);
    for (let i = 0; i < arr.length; i++) {
      if (mayArr.includes(arr[i].date)) {
        const tableRow2 = document.createElement('tr');
        tableRow2.textContent = arr[i].date;
        maytable.appendChild(tableRow2);
        const td = document.createElement('td');
        td.textContent = arr[i].amount;
        tableRow2.appendChild(td);
      }

    }

    for (let i = 0; i < arr.length; i++) {
      if (mayArr.includes(arr[i].date)) {
        totalOfTotal += parseInt(arr[i].amount);
      }
    }
    const tableRow3 = document.createElement('tr');
    maytable.appendChild(tableRow3);
    const td1 = document.createElement('td');
    td1.textContent = 'Total';
    tableRow3.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = totalOfTotal;
    tableRow3.appendChild(td2);



  }
}


function junRender() {
  let totalOfTotal = 0;
  if (arr) {

    const tableRow = document.createElement('tr');
    juntable.appendChild(tableRow);
    const tableHeader = document.createElement('th');
    tableHeader.textContent = 'Day';
    tableRow.appendChild(tableHeader);
    const tableHeader2 = document.createElement('th');
    tableHeader2.textContent = 'Total Of The Month';
    tableRow.appendChild(tableHeader2);
    for (let i = 0; i < arr.length; i++) {
      if (junArr.includes(arr[i].date)) {
        const tableRow2 = document.createElement('tr');
        tableRow2.textContent = arr[i].date;
        juntable.appendChild(tableRow2);
        const td = document.createElement('td');
        td.textContent = arr[i].amount;
        tableRow2.appendChild(td);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (junArr.includes(arr[i].date)) {
        totalOfTotal += parseInt(arr[i].amount);
      }
    }
    const tableRow3 = document.createElement('tr');
    juntable.appendChild(tableRow3);
    const td1 = document.createElement('td');
    td1.textContent = 'Total'
    tableRow3.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = totalOfTotal;
    tableRow3.appendChild(td2);



  }
}


function julRender() {
  let totalOfTotal = 0;
  if (arr) {

    const tableRow = document.createElement('tr');
    jultable.appendChild(tableRow);
    const tableHeader = document.createElement('th');
    tableHeader.textContent = 'Day';
    tableRow.appendChild(tableHeader);
    const tableHeader2 = document.createElement('th');
    tableHeader2.textContent = 'Total Of The Month';
    tableRow.appendChild(tableHeader2);
    for (let i = 0; i < arr.length; i++) {
      if (julArr.includes(arr[i].date)) {
        const tableRow2 = document.createElement('tr');
        tableRow2.textContent = arr[i].date;
        jultable.appendChild(tableRow2);
        const td = document.createElement('td');
        td.textContent = arr[i].amount;
        tableRow2.appendChild(td);
      }

    }

    for (let i = 0; i < arr.length; i++) {
      if (julArr.includes(arr[i].date)) {
        totalOfTotal += parseInt(arr[i].amount);
      }
    }
    const tableRow3 = document.createElement('tr');
    jultable.appendChild(tableRow3);
    const td1 = document.createElement('td');
    td1.textContent = 'Total'
    tableRow3.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = totalOfTotal;
    tableRow3.appendChild(td2);



  }
}

function addSaving(event) {
  event.preventDefault();
  let inputSaving = parseInt(document.getElementById('saving').value);
  saving += inputSaving;
  localStorage.setItem('saving', JSON.stringify(saving));
  render();
  chartRender();
}

function addGoal(event) {
  event.preventDefault();
  let inputGoal = parseInt(document.getElementById('goal').value);
  goals = inputGoal;
  localStorage.setItem('goal', JSON.stringify(goals));
  render();
  chartRender();
}

function render() {
  showSave.innerHTML = '';
  let s = document.createElement('p');
  showSave.appendChild(s);
  let total = JSON.parse(localStorage.getItem('saving'));
  if (total) {

    saving = parseInt(total);
    s.textContent = `Current Saving  ${saving}`;
  }
  let g = document.createElement('p');
  showSave.appendChild(g);
  let gl = JSON.parse(localStorage.getItem('goal'));
  if (gl) {
    goals = parseInt(gl);
    g.textContent = `Current Goal  ${goals}`;
  }
}

function chartRender() {
  var ctx = document.getElementById('myChart').getContext('2d');
  let total = parseInt(JSON.parse(localStorage.getItem('saving')));
  let gl = parseInt(JSON.parse(localStorage.getItem('goal')));
  let p=0; 
  if (myChart != undefined) {
    myChart.destroy();
    myChart = undefined;
  }
  if (total >= gl) {
    p=gl;
    gl = 0;
  }
  else {
    gl = gl - total;
   p  = total ;

  }
 
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Saving', 'Goal'],
      datasets: [{
        label: '# of Votes',
        data: [p, gl],
        backgroundColor: [
          'rgba(36,76,60 ,0.2)',
          'rgba(250,110,6,0.2)',

        ],
        borderColor: [
          'rgba(36,76,60, 1)',
          'rgba(250,110,6,1)',

        ],

        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
function runMay() {
  junT.innerHTML = '';
  julT.innerHTML = '';
  mayT.innerHTML = '';
  mayRender();
  // mayButton.removeEventListener('click', runMay);
}

function runjun() {
  junT.innerHTML = '';
  julT.innerHTML = '';
  mayT.innerHTML = '';
  junRender();
  //  junButton.removeEventListener('click', runjun);

}
function runjul() {
  julT.innerHTML = '';
  mayT.innerHTML = '';
  junT.innerHTML = '';
  julRender();
  //junButton.removeEventListener('click', runjul);

}

render();
chartRender();
buttonSaving.addEventListener('click', addSaving);
buttonGoal.addEventListener('click', addGoal);

mayButton.addEventListener('click', runMay);
junButton.addEventListener('click', runjun);
julButton.addEventListener('click', runjul);

