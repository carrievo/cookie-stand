'use strict';

console.log('Hello world!');

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

this.renderCustomersPerHour = function(min, max) {
  for (let i = 0; i < hourOfDay.length; i++) {
    let num = this.getRandomNumber(this.min, this.max)
    this.customersPerHour.push(num);
  }
  console.log(this.customersPerHour);
};

this.renderCookiesPerHour = function() {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    let num = Math.floor(this.customersPerHour[i] * this.avg);
    this.cookiesTotal += num;
    this.cookiesPerHour.push(num);
  }
  console.log(this.cookiesPerHour);
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
    // this.renderCity();
  }

  this.callUponAll();
      this.shopArray.push(this);
}

Cookieshop.prototype.shopArray = [];

const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 4.6);

console.log(Cookieshop.prototype.shopArray);


// table code  --------------------------------------------------------------------------------------------------------
const tableCookies = document.getElementById(`cookieSales`);

const newTableElem = document.createElement('table');
tableCookies.appendChild(newTableElem);

function renderNewHeader() {
  const rowHeader = document.createElement('tr');
  newTableElem.appendChild(rowHeader);

  const rowCellHeader = document.createElement('th');
  newTableElem.appendChild(rowCellHeader);

  for (let i = 0; i < hourOfDay.length; i++) {
    const rowCellHeader = document.createElement('th');
    rowCellHeader.textContent = hourOfDay[i];
    newTableElem.appendChild(rowCellHeader);
  }
};

function renderActualTable() {
  for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
    let actualShop = Cookieshop.prototype.shopArray[i];
    const shopTableElem = document.createElement('tr');
    newTableElem.appendChild(shopTableElem);

    const shopCellElem = document.createElement('th');
    shopCellElem.textContent = actualShop.location;
    shopTableElem.appendChild(shopCellElem);

    for (let j = 0; j < actualShop.cookiesPerHour.length; j++) {
      const shopCellElem2 = document.createElement('td');
      shopCellElem2.textContent = `${actualShop.cookiesPerHour[j]}`;
      shopTableElem.appendChild(shopCellElem2);
    }
    const shopCellElem3 = document.createElement('td');
    shopCellElem3.textContent = 'Total Cookies: ' + actualShop.cookiesTotal;
    shopTableElem.appendChild(shopCellElem3);
  }
}

function renderFooterTable() {
  const footerElem = document.createElement('tr');
  newTableElem.appendChild(footerElem);

  const rowFooterElem = document.createElement('th');
  rowFooterElem.textContent = 'Total Hourly Cookies';
  footerElem.appendChild(rowFooterElem);

  let dailyTotalCookies = [];
    for (let h = 0; h < hourOfDay.length; h++) {
      let cookieHourlyTotal = 0;
    for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
      let currentStore = Cookieshop.prototype.shopArray[i];
      cookieHourlyTotal += currentStore.cookiesPerHour[h];
    }
    const shopCellElem2 = document.createElement('td');
    shopCellElem2.textContent = `${cookieHourlyTotal}`;
    footerElem.appendChild(shopCellElem2);
    dailyTotalCookies.push(cookieHourlyTotal);
  }
  let cookieDailyTotal = 0;
  for (let i =0; i < dailyTotalCookies.length; i++) {
    cookieDailyTotal += dailyTotalCookies[i];
  }
  const shopCellElem3 = document.createElement('td');
  shopCellElem3.textContent = `Overall Total: ` + cookieDailyTotal;
  footerElem.appendChild(shopCellElem3);
}

renderNewHeader();
renderActualTable();
renderFooterTable();


// form code ----------------------------------------------------------------------------------------------------------

let form = document.getElementById('form');

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.newLocation);
    let newLocation = event.target.newLocation.value;
    let newMin = +(event.target.newMin.value);
    let newMax = +(event.target.newMax.value);
    let newAvg = +(event.target.newAvg.value);

new Cookieshop (
  newLocation,
  newMin,
  newMax,
  newAvg,
);

newTableElem.innerHTML = '';
renderNewHeader();
renderActualTable();
renderFooterTable();

}

form.addEventListener('submit', handleSubmit);