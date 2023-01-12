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
  countriesContainer.style.opacity = 1;
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

      // // Neighbor country call
      // const neighbour = data[0].borders?.[3];
      // const url2 = `https://restcountries.com/v2/alpha/${neighbour}`;
      // // always return the promise to avoid cb hell
      // return getJSON(url2, "Neighbour country not found") // for resolved values call json method(async) returns promise
      //   .then(data => { renderCountry(data, "neighbour"); }); // using parsed data fulfill the promise
    })
    .catch(err => renderError(`${err.message}`))
    .finally(() => countriesContainer.style.opacity = 1); // always(err or success) called in the end
};



// Code Challenge #1
//part 1
// const whereAmI = function(lat, lng) {
//   getPosition().then(pos => {
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
//     return fetch(url);
//   })

//     .then(rawData => rawData.json())
//     .then(data => getCountryData(data.address.country))
//     .catch(err => renderError(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


//////// ASYNC & PROMISES PLAYGROUND
// console.log('test start'); // 1
// setTimeout(() => console.log('0 sec timer'), 0); // 4
// Promise.resolve("resolved promise").then(res => console.log('res', res)); //3
// console.log('End of test'); //2
// Creating Promise
// const promise = new Promise((res, rej) => {
//   console.log('Before timeout 🤗');
//   setTimeout(() => {
//     const randN = Math.floor(Math.random() * 10);
//     if (randN >= 5) {
//       res("You win!");
//     } else {
//       rej(new Error("You lose!"));
//     }
//   }, 2000);
// });
// // Consuming promise
// promise
//   .then(res => console.log(res))
//   .catch(err => console.error(err));


// wait(2) //Consuming Promise
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1); // return same function as promise
//   })
//   .then(() => console.log('I waited for one more second'));

// // Function that returns a promise
const wait = sec => new Promise((resolve) => {
  setTimeout(resolve, sec * 1000);
});
// Code Challenge #2

// PART 1
// const imgContainer = document.querySelector(".images");
// const createImage = (imgPath) => new Promise((resolve, reject) => {
//   const img = document.createElement("img");
//   img.src = imgPath;
//   // function for resolve
//   img.addEventListener("load", () => {
//     imgContainer.append(img);
//     resolve(img);
//   });
//   // function for reject
//   img.addEventListener("error", () => reject(new Error("Image not found")));
// });

// let setImg = ""; //keeping the state of img global to access deeper in the promise chain
// // PART 2
// createImage("img/img-1.jpg")
//   .then(img1 => {
//     console.log('Image 1 loaded');
//     setImg = img1; // setting img path to the global scope
//     return wait(2);
//   }) // consuming promise
//   .then(() => {
//     setImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   }) // hiding img after two second timer
//   .then(img2 => {
//     console.log('Image 2 loaded');
//     setImg = img2;
//     return wait(2);
//   })
//   .then(() => {
//     console.log('Done');
//     setImg.style.display = "none";
//   })
//   .catch(err => console.error(err)); // add error handler

// getting user's current location
const getPosition = () => new Promise((resolve, reject) =>
  navigator.geolocation.getCurrentPosition(resolve, reject));

// Consuming Promises with Async/Await
const whereAmI = async function(country) { // async non blocking call stack
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const url1 = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
  // await will stop code execution at this point for the promise to be fulfilled
  const geoRes = await fetch(url1);
  const data = await geoRes.json();
  console.log(data.address.country);
  const res = await fetch(`https://restcountries.com/v2/name/${data.address.country}`);
  const dataRes = await res.json();
  return renderCountry(dataRes[0]);
};

btn.addEventListener("click", function() {
  whereAmI("ukraine");
});
