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

function elementBuilder(elementToCreate, contents, parent) {
  let newElement = document.createElement(elementToCreate);
    newElement.textContent = contents;
    parent.appendChild(newElement);
}

function renderNewHeader() {
  elementBuilder('th', null, newTableElem);

  for (let i = 0; i < hourOfDay.length; i++) {
    elementBuilder('th', hourOfDay[i], newTableElem);
  }
};


function renderActualTable() {
  for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
    let actualShop = Cookieshop.prototype.shopArray[i];
    const shopTableElem = document.createElement('tr');
    newTableElem.appendChild(shopTableElem);

    elementBuilder('th', actualShop.location, shopTableElem);   

    for (let j = 0; j < actualShop.cookiesPerHour.length; j++) {
      elementBuilder('td', `${actualShop.cookiesPerHour[j]}`, shopTableElem); 
    }
    elementBuilder('td', 'Total Cookies: ' + actualShop.cookiesTotal, shopTableElem); 
  }
}

function renderFooterTable() {
  const footerElem = document.createElement('tr');
  newTableElem.appendChild(footerElem);

  elementBuilder('th', 'Total Hourly Cookies', footerElem); 

  let dailyTotalCookies = [];
    for (let h = 0; h < hourOfDay.length; h++) {
      let cookieHourlyTotal = 0;
    for (let i = 0; i < Cookieshop.prototype.shopArray.length; i++) {
      let currentStore = Cookieshop.prototype.shopArray[i];
      cookieHourlyTotal += currentStore.cookiesPerHour[h];
    }
    elementBuilder('td', `${cookieHourlyTotal}`, footerElem); 
    dailyTotalCookies.push(cookieHourlyTotal);
  }
  let cookieDailyTotal = 0;
  for (let i =0; i < dailyTotalCookies.length; i++) {
    cookieDailyTotal += dailyTotalCookies[i];
  }
  elementBuilder('td', `Overall Total: ` + cookieDailyTotal, footerElem); 
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
clearAllForm();

function clearAllForm () {
  event.target.newLocation.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAvg.value = null;
  }
}

form.addEventListener('submit', handleSubmit);