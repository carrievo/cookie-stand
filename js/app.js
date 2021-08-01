'use strict';

console.log('Hello world!');

//create hours array
let hourOfDay = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

let listOfCookies = document.getElementById('cookieSales');

function Cookieshop (location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookieTotal = 0;

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

// this is what shows up on the browser
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

// table code
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
    shopCellElem3.textContent = 'Total Cookies: ' + actualShop.cookieTotal;
    shopTableElem.appendChild(shopCellElem3);
  }
}

function renderFooterTable() {
  const footerElem = document.createElement('tr');
  newTableElem.appendChild(footerElem);

  const rowFooterElem = document.createElement('th');
  rowFooterElem.textContent = 'Total Hourly Cookies Sold for Combined Cities';
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
  shopCellElem3.textContent = `Ultimate Total: ` + cookieDailyTotal;
  footerElem.appendChild(shopCellElem3);
}

renderNewHeader();
renderActualTable();
renderFooterTable();




// // object literal for Seattle ---------------------------------------------------------------------
// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   avgCookiesSoldEachHourArray: [],
//   dailyTotal: 0,


//   getRandomCustomer: function() {
//     // rounds down to whole number
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },

//   cookiesPurchased: function() {
//     // for each hour of the day, run getRandomCustomer() and push value to avgCookiesSoldEachHourArray.
//     return Math.ceil(this.getRandomCustomer() * this.avg);
//       },

//   render: function() {
//     // this will redner the list to the page
//     let seattleHeader = document.createElement('h3');
//       seattleHeader.textContent = 'Seattle Cookies Sold by Hour';
//       mainCookieList.appendChild(seattleHeader);

//     let ul = document.createElement('ul');
//     let total = 0;

//   for (let i = 0; i < hourOfDay.length; i++) {
//     let seattleCookiesSold = this.cookiesPurchased();
//     let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${seattleCookiesSold} cookies`;
//       ul.appendChild(li);
//       // 0 = 0 + random number from 1st function
//       total = total + seattleCookiesSold;
//       console.log(seattleCookiesSold);
//   }
//   // calculate total cookies
//   let li = document.createElement('li'); 
//     li.textContent = `Total cookies: ${total}`;
//     ul.appendChild(li);
//     mainCookieList.appendChild(ul);
//   }
// }
//   let mainCookieList = document.getElementById('salmon-cookies');

//   seattle.render();


//   // object literal for Tokyo ---------------------------------------------------------------------
// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24, 
//   avg: 1.2,
//   avgCookiesSoldEachHourArray: [],
//   dailyTotal: 0,

//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },

//   cookiesPurchased: function() {
//     return Math.ceil(this.getRandomCustomer() * this.avg);
//       },

//   render: function() {
//     let tokyoHeader = document.createElement('h3');
//       tokyoHeader.textContent = 'Tokyo Cookies Sold by Hour';
//       mainCookieList.appendChild(tokyoHeader);

//     let ul = document.createElement('ul');
//     let total = 0;

//   for (let i = 0; i < hourOfDay.length; i++) {
//     let tokyoCookiesSold = this.cookiesPurchased();
//     let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${tokyoCookiesSold} cookies`;
//       ul.appendChild(li);
//       total = total + tokyoCookiesSold;
//       console.log(tokyoCookiesSold);
//   }
//   // calculate total cookies
//   let li = document.createElement('li');
//     li.textContent = `Total cookies: ${total}`;
//     ul.appendChild(li);
//     mainCookieList.appendChild(ul);
//   }
// }
//   tokyo.render();

// // object literal for Dubai ---------------------------------------------------------------------
//   let dubai =  {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     aveCookiesSoldEachHourArray: [],
//     dailyTotal: 0,

//     getRandomCustomer: function() {
//       return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//     },

//     cookiesPurchased: function() {
//       return Math.ceil(this.getRandomCustomer() * this.avg);
//         },

//     render: function() {
//       let dubaiHeader = document.createElement('h3');
//         dubaiHeader.textContent = 'Dubai Cookies Sold by Hour';
//         mainCookieList.appendChild(dubaiHeader);

//       let ul = document.createElement('ul');
//       let total = 0;

//     for (let i = 0; i < hourOfDay.length; i++) {
//       let dubaiCookiesSold = this.cookiesPurchased();
//       let li = document.createElement('li');

//         li.textContent = `${hourOfDay[i]}: ${dubaiCookiesSold} cookies`;
//         ul.appendChild(li);
//         total = total + dubaiCookiesSold;
//         console.log(dubaiCookiesSold);
//       }
//       let li = document.createElement('li');
//         li.textContent = `Total cookies: ${total}`;
//         ul.appendChild(li);
//         mainCookieList.appendChild(ul);
//     }
//   }
//     dubai.render();

// // object literal for Paris ---------------------------------------------------------------------
// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   aveCookiesSoldEachHourArray: [],
//   dailyTotal: 0,

//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },

//   cookiesPurchased: function() {
//     return Math.ceil(this.getRandomCustomer() * this.avg);
//   },

//   render: function() {
//     let parisHeader = document.createElement('h3');
//       parisHeader.textContent = 'Paris Cookies Sold by Hour';
//       mainCookieList.appendChild(parisHeader);

//     let ul = document.createElement('ul');
//     let total = 0

//     for (let i = 0; i < hourOfDay.length; i++) {
//       let parisCookiesSold = this.cookiesPurchased();
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${parisCookiesSold} cookies`;
//       ul.appendChild(li);
//       total = total + parisCookiesSold;
//       console.log(parisCookiesSold);
//     }
//     let li = document.createElement('li');
//       li.textContent = `Total cookies: ${total}`;
//       ul.appendChild(li);
//       mainCookieList.appendChild(ul);
//   }
// }
//     paris.render();

// // object literal for Paris ---------------------------------------------------------------------
// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   avgCookiesSoldEachHourArray: [],
//   dailyTotal: 0,

//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },

//   cookiesPurchased: function() {
//     return Math.ceil(this.getRandomCustomer() * this.avg);
//   },

//   render: function() {
//     let limaHeader = document.createElement('h3');
//       limaHeader.textContent = 'Lima Cookies Sold by Hour';
//       mainCookieList.appendChild(limaHeader);

//     let ul = document.createElement('ul');
//     let total = 0

//     for (let i = 0; i < hourOfDay.length; i++) {
//       let limaCookiesSold = this.cookiesPurchased();
//       let li = document.createElement('li');

//       li.textContent = `${hourOfDay[i]}: ${limaCookiesSold} cookies`;
//       ul.appendChild(li);
//       total = total + limaCookiesSold;
//       console.log(limaCookiesSold);
//   }
//     let li = document.createElement('li');
//       li.textContent = `Total cookies ${total}`;
//       ul.appendChild(li);
//       mainCookieList.appendChild(ul);
//   } 
// }
//     lima.render();