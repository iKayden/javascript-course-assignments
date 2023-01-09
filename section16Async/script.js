'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////

const getCountryData = (country) => {

  const url = `https://restcountries.com/v2/name/${country}`;
  // Old School Way
  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();
  req.addEventListener("load", function(e) { // as soon as data arrives will be called
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("ukraine");
getCountryData("canada");
getCountryData("usa");
