'use strict';

console.log('Hello world!');

//create hours array
let hourOfDay = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


// object literal for Seattle ---------------------------------------------------------------------
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,

  getRandomCustomer: function() {
    // rounds down to whole number
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },

  cookiesPurchased: function() {
    // for each hour of the day, run getRandomCustomer() and push value to avgCookiesSoldEachHourArray.
    return Math.ceil(this.getRandomCustomer() * this.avg);
      },

  render: function() {
    // this will redner the list to the page
    let seattleHeader = document.createElement('h3');
      seattleHeader.textContent = 'Seattle Cookies Sold by Hour';
      mainCookieList.appendChild(seattleHeader);

    let ul = document.createElement('ul');
    let total = 0;

  for (let i = 0; i < hourOfDay.length; i++) {
    let seattleCookiesSold = this.cookiesPurchased();
    let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${seattleCookiesSold} cookies`;
      ul.appendChild(li);
      // 0 = 0 + random number from 1st function
      total = total + seattleCookiesSold;
      console.log(seattleCookiesSold);
  }
  // calculate total cookies
  let li = document.createElement('li'); 
    li.textContent = `Total cookies: ${total}`;
    ul.appendChild(li);
    mainCookieList.appendChild(ul);
  }
}
  let mainCookieList = document.getElementById('salmon-cookies');

  seattle.render();


  // object literal for Tokyo ---------------------------------------------------------------------
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24, 
  avg: 1.2,
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },

  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomer() * this.avg);
      },

  render: function() {
    let tokyoHeader = document.createElement('h3');
      tokyoHeader.textContent = 'Tokyo Cookies Sold by Hour';
      mainCookieList.appendChild(tokyoHeader);

    let ul = document.createElement('ul');
    let total = 0;

  for (let i = 0; i < hourOfDay.length; i++) {
    let tokyoCookiesSold = this.cookiesPurchased();
    let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${tokyoCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + tokyoCookiesSold;
      console.log(tokyoCookiesSold);
  }
  // calculate total cookies
  let li = document.createElement('li');
    li.textContent = `Total cookies: ${total}`;
    ul.appendChild(li);
    mainCookieList.appendChild(ul);
  }
}
  tokyo.render();

// object literal for Dubai ---------------------------------------------------------------------
  let dubai =  {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    aveCookiesSoldEachHourArray: [],
    dailyTotal: 0,

    getRandomCustomer: function() {
      return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
    },

    cookiesPurchased: function() {
      return Math.ceil(this.getRandomCustomer() * this.avg);
        },

    render: function() {
      let dubaiHeader = document.createElement('h3');
        dubaiHeader.textContent = 'Dubai Cookies Sold by Hour';
        mainCookieList.appendChild(dubaiHeader);

      let ul = document.createElement('ul');
      let total = 0;

    for (let i = 0; i < hourOfDay.length; i++) {
      let dubaiCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');

        li.textContent = `${hourOfDay[i]}: ${dubaiCookiesSold} cookies`;
        ul.appendChild(li);
        total = total + dubaiCookiesSold;
        console.log(dubaiCookiesSold);
      }
      let li = document.createElement('li');
        li.textContent = `Total cookies: ${total}`;
        ul.appendChild(li);
        mainCookieList.appendChild(ul);
    }
  }
    dubai.render();

// object literal for Paris ---------------------------------------------------------------------
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  aveCookiesSoldEachHourArray: [],
  dailyTotal: 0,

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },

  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomer() * this.avg);
  },

  render: function() {
    let parisHeader = document.createElement('h3');
      parisHeader.textContent = 'Paris Cookies Sold by Hour';
      mainCookieList.appendChild(parisHeader);

    let ul = document.createElement('ul');
    let total = 0

    for (let i = 0; i < hourOfDay.length; i++) {
      let parisCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${parisCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + parisCookiesSold;
      console.log(parisCookiesSold);
    }
    let li = document.createElement('li');
      li.textContent = `Total cookies: ${total}`;
      ul.appendChild(li);
      mainCookieList.appendChild(ul);
  }
}
    paris.render();

// object literal for Paris ---------------------------------------------------------------------
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,

  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },

  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomer() * this.avg);
  },

  render: function() {
    let limaHeader = document.createElement('h3');
      limaHeader.textContent = 'Lima Cookies Sold by Hour';
      mainCookieList.appendChild(limaHeader);

    let ul = document.createElement('ul');
    let total = 0

    for (let i = 0; i < hourOfDay.length; i++) {
      let limaCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');

      li.textContent = `${hourOfDay[i]}: ${limaCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + limaCookiesSold;
      console.log(limaCookiesSold);
  }
    let li = document.createElement('li');
      li.textContent = `Total cookies ${total}`;
      ul.appendChild(li);
      mainCookieList.appendChild(ul);
  } 
}
    lima.render();
