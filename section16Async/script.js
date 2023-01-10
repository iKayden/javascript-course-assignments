'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////


// const getCountryData = (country) => {

//   const url = `https://restcountries.com/v2/name/${country}`;
//   // Old School Way
//   const req = new XMLHttpRequest();
//   req.open("GET", url);
//   req.send();

//   req.addEventListener("load", function(e) { // as soon as data arrives will be called
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population.toLocaleString("en-US")}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("ukraine");


// const getCountryAndNeighbourData = (country) => {
//   // First AJAX call
//   const url = `https://restcountries.com/v2/name/${country}`;
//   // Old School Way
//   const req1 = new XMLHttpRequest();
//   req1.open("GET", url);
//   req1.send();

//   req1.addEventListener("load", function() { // as soon as data arrives will be called
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // Get Neighbor Countries
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     // Second AJAX call
//     const req2 = new XMLHttpRequest();
//     const url = `https://restcountries.com/v2/alpha/${neighbour}`;
//     req2.open("GET", url);
//     req2.send();
//     req2.addEventListener("load", function(e) {

//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // getCountryAndNeighbourData("ukraine");
// getCountryAndNeighbourData("canada");


// // Old School Way
// const req = new XMLHttpRequest();
// req.open("GET", url);
// req.send();

const renderCountry = function(data, className = "") {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population.toLocaleString("en-US")}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function(country) {
  const url = `https://restcountries.com/v2/name/${country}`;
  // promise: 1. pending => 2. settled => fulfilled  / rejected
  fetch(url) // fetch builds a promise for us to consume
    .then(rawData => rawData.json()) // for resolved values call json method(async) returns promise
    .then(data => renderCountry(...data)); // using parsed data fulfill the promise
};
getCountryData("ukraine");
