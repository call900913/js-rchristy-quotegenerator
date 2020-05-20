/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
An array of quotes as json objects.
***/
var quote0 = {quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  source: "Patrick McKenzie",
  citation: "Twitter",
  year:"2016"};
var quote1 = {
  quote: "Don’t let the noise of others’ opinions drown out your inner voice.",
  source: "Steve Jobs",
  citation: "Stanford University commencement speech",
  year:"2005"};
var quote2 = {
  quote: "The only thing worse than being blind is having sight but no vision.",
  source: "Helen Keller",
  citation: "",
  year:"",
  tag: "vision"}
var quote3 = {
  quote: "A man can see further through a tear than through a telescope.",
  source: "Bruce Lee",
  citation: "",
  year:""}
var quote4 = {
  quote: "It used to be about trying to do something. Now it's about trying to be someone.",
  source: "Margaret Thatcher",
  citation: "",
  year:""}
var quote5 = {
  quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
  source: "Bill Gates",
  citation: "",
  year:""}
var quote6 = {quote: "You have to be willing to be misunderstood if you're going to innovate",
  source: "Jeff Bezos",
  citation: "",
  year:""};
var quotes = [quote0, quote1, quote2, quote3, quote4, quote5, quote6];



/***
This function generates a random number between 0 and arg inclusive.
It is used in some functions in this file.
***/

function generateRandomNumber(arg) {
  return Math.floor(Math.random() * arg)
}

/***
 * `getRandomQuote` function
 This function generates a random number between 1 & 6 inclusive,
 and then returns the quote with that location in the quotes array.
***/
function getRandomQuote() {
  var abc = generateRandomNumber(7);
  return quotes[abc];
}

function changeBackgroundColor() {
  // selection of colors
  var colors = ["rgb(58, 193, 98)", "rgb(9, 11, 13)", "rgb(1, 120, 212)", "rgb(153, 0, 0)"];

  var num = generateRandomNumber(4);
  // update the css
  var htmlbody = document.body.style.backgroundColor = colors[num];
  console.log(htmlbody);
  console.log(colors[num]);
  htmlbody = colors[num];
}

/***
 * `printQuote` function
 This function calls the quote getter function and translates the json object
 into an html string.
***/
function printQuote() {
  // Get the quote
  var quotejson = getRandomQuote();
  var htmlstring = `\
    <p class='quote'>${quotejson.quote}</p>\
    <p class='source'> ${quotejson.source}\
    `;
  if (quotejson.citation != "") {
    htmlstring = htmlstring + `<span class='citation'>${quotejson.citation}</span>`
  }
  if (quotejson.year != "") {
    htmlstring = htmlstring + `<span class='year'>${quotejson.year}</span>`
  }
  if (quotejson.tag) {
    htmlstring += `<p>tag: ${quotejson.tag}</p>`
  }
  htmlstring = htmlstring + "</p>"

  // update the html
  document.getElementById('quote-box').innerHTML = htmlstring;
  changeBackgroundColor();
  return htmlstring;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(() => {
  printQuote()
}, 10000)
