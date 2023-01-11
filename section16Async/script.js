'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////

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
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getJSON = function(url, errMsg = "Something went wrong 😭😭😭") {
  return fetch(url).then(rawData => {
    if (!rawData.ok) throw new Error(`${errMsg} (${rawData.status})`);
    return rawData.json();
  });
};

const getCountryData = function(country) {
  const url1 = `https://restcountries.com/v2/name/${country}`;
  // promise: 1. pending => 2. settled => fulfilled  / rejected
  getJSON(url1, "Country not found") // for resolved values call json method(async) returns promise
    .then(data => {
      renderCountry(...data);

      // Neighbor country call
      const neighbour = data[0].borders?.[3];
      const url2 = `https://restcountries.com/v2/alpha/${neighbour}`;
      // always return the promise to avoid cb hell
      return getJSON(url2, "Neighbour country not found") // for resolved values call json method(async) returns promise
        .then(data => { renderCountry(data, "neighbour"); }); // using parsed data fulfill the promise
    })
    .catch(err => renderError(`${err.message}`))
    .finally(() => countriesContainer.style.opacity = 1); // always(err or success) called in the end
};

btn.addEventListener("click", function() {
  getCountryData("ukraine");
});


// Code Challenge #1
//part 1
const whereAmI = function(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
  return fetch(url)
    .then(rawData => rawData.json())
    .then(data => getCountryData(data.address.country))
    .catch(err => renderError(`${err.message}`));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

//////// ASYNC PLAYGROUND
// console.log('test start'); // 1
// setTimeout(() => console.log('0 sec timer'), 0); // 4
// Promise.resolve("resolved promise").then(res => console.log('res', res)); //3
// console.log('End of test'); //2
// Creating Promise
const promise = new Promise((res, rej) => {
  console.log('Before timeout 🤗');
  setTimeout(() => {
    const randN = Math.floor(Math.random() * 10);
    if (randN >= 5) {
      res("You win!");
    } else {
      rej(new Error("You lose!"));
    }
  }, 2000);
});
// Consuming promise
promise
  .then(res => console.log(res))
  .catch(err => console.error(err));
