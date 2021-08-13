'use strict';

//create hours array
let hourOfDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 a.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let listOfCookies = document.getElementById('cookieSales');

function Cookieshop (location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;

    this.getRandomNumber = function(min, max) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNumber;
    };

this.renderCustomersPerHour = function() {
  for (let i = 0; i < hourOfDay.length; i++) {
    let num = this.getRandomNumber(this.min, this.max)
    this.customersPerHour.push(num);
  }

};

this.renderCookiesPerHour = function() {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    let num = Math.floor(this.customersPerHour[i] * this.avg);
    this.cookiesTotal += num;
    this.cookiesPerHour.push(num);
  }

};

// this is what shows up on the browser  -----------------------------------------------------------------------------------
this.renderCity = function() {
  let h3 = document.createElement('h3');
    h3.textContent = `${this.location}`;
    listOfCookies.appendChild(h3);
  
  let tr = document.createElement('tr');
  let total = 0;

for (let i = 0; i < hourOfDay.length; i++) {
  let td = document.createElement('td');
    td.textContent = `${hourOfDay[i]}: ${this.cookiesPerHour[i]}`;
    tr.appendChild(td);
    total += this.cookiesPerHour[i];
  }

  let td = document.createElement('td');
  td.textContent = `Total cookies: ${total}`;
  tr.appendChild(td);
  listOfCookies.appendChild(tr);
  }

  this.callUponAll = function() {
    this.renderCustomersPerHour();
    this.renderCookiesPerHour();
  }

  this.callUponAll();
  shopArray.push(this);
  console.log(this.shopArray);
}

const shopArray = [];

const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 4.6);


// table code  --------------------------------------------------------------------------------------------------------
const tableCookies = document.getElementById(`cookieSales`);

const newTableCookies = document.createElement('table');
tableCookies.appendChild(newTableCookies);

function renderNewHeader() {
  const rowHeader = document.createElement('tr');
  newTableCookies.appendChild(rowHeader);

  const rowCellHeader = document.createElement('th');
  newTableCookies.appendChild(rowCellHeader);

  for (let i = 0; i < hourOfDay.length; i++) {
    const rowCellHeader = document.createElement('th');
    rowCellHeader.textContent = hourOfDay[i];
    newTableCookies.appendChild(rowCellHeader);
  }
};

function elementBuilder(elementToCreate, contents, parent) {
  let newElement = document.createElement(elementToCreate);
    newElement.textContent = contents;
    parent.appendChild(newElement);
}

Cookieshop.prototype.renderTableRow = function() {
  const shopTableElem = document.createElement('tr');
    newTableCookies.appendChild(shopTableElem);

    elementBuilder('th', this.location.shopTableElem);

    for (let j = 0; j < this.cookiesPerHour.length; j++) {
      elementBuilder('td',`${this.cookiesPerHour[j]}`,shopTableElem); 
  }
      elementBuilder('td', 'Total Store Cookies: ' + this.cookiesTotal, shopTableElem);

}

function renderActualTable() {
  for (let i=0; i < shopArray.length; i++){
    shopArray[i].renderTableRow();
  }
}

function renderFooterTable() {
  const footerElem = document.createElement('tfoot');
  newTableCookies.appendChild(footerElem);

elementBuilder('th','Total Hourly Cookies',footerElem);

let dailyTotalCookies = [];
for (let h = 0; h < hours.length; h++) {
  let cookieHourlyTotal = 0;
  for (let i = 0; i < shopArray.length; i++) {
    let currentStore = shopArray[i];
    cookieHourlyTotal += currentStore.cookiesPerHour[h];
  }

  elementBuilder('td',`${cookieHourlyTotal}`,footerElem);
  dailyTotalCookies.push(cookieHourlyTotal);
}

let cookieDailyTotal = 0;
for (let i =0; i < dailyTotalCookies.length; i++) {
  cookieDailyTotal += dailyTotalCookies[i];
}

elementBuilder('td',`Overall Total: ` + cookieDailyTotal,footerElem)

}

renderNewHeader();
renderActualTable();
renderFooterTable();


// Add new store to form code ----------------------------------------------------------------------------------------------------------

let form = document.getElementById('form');
let tfoot = document.querySelector('tfoot');

function handleSubmit(event) {
  event.preventDefault();
    let newLocation = event.target.newLocation.value;
    let newMin = +(event.target.newMin.value);
    let newMax = +(event.target.newMax.value);
    let newAvg = +(event.target.newAvg.value);

let newStore = new Cookieshop (
  newLocation,
  newMin,
  newMax,
  newAvg,
);


  tfoot.innerHTML = '';
  newStore.renderTableRow();
  renderFooterTable();
  clearAllForm();

function clearAllForm () {
  event.target.newLocation.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAvg.value = null;
  }
}

form.addEventListener('submit', handleSubmit);