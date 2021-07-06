/* .js files add interaction to your website */
// import random;

var factList = [
  "The U.S. is the #1 trash-producing country in the world at 1,609 pounds per person per year.",
  "Agriculture uses up 70% of our global freshwater.",
  "On average, ONE supermarket goes through 60,500,000 paper bags per year!",
  "To avoid flying, Greta Thunberg sailed to North America from Sweden where she attended the 2019 UN Climate Action Summit.", 
  "Rainforests are being cut down at the rate of 100 acres per minute. They cover less than 7 percent of Earth’s landmass but are home to about 50 percent of all life on Earth",
  "Recycling one aluminum can save enough energy to run a TV for three hours.", "Agricultural emissions could be reduced by as much as 70% by adopting a vegan diet and 63% by adopting a vegetarian diet.",
  "25% of the bottled water you buy is really municipal tap water, so you might as well pass on the plastic bottle.",
  "The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!",
  "In the last 170 years, we added 2.4 trillion tons of Carbon Dioxide into our atmosphere. Half of this was added in the last 35 to 50 years.",
  "Scientists predict that if the increase in greenhouse gas emissions continues unabated, temperatures will rise by as much as 10 degrees Fahrenheit by the end of this century"

]

var fact = document.getElementById('thefunfact');
var ffbutton = document.getElementById('ffbutton');
var item = factList[Math.floor(Math.random() * factList.length)];
var count = 0;

if (ffbutton) {
  ffbutton.addEventListener("click", generateFact);
}

function generateFact() {
  fact.innerHTML = factList[Math.floor(Math.random() * factList.length)];
  // count ++;
  // if (count == factList.length) {
  //   count = 0;
  // }
}