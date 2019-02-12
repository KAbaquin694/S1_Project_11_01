"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
    Author: Khalel Abaquin
    Date:     2.12.19

    Filename: sd_mapper.js
*/

//This block of code sets the time to the local timezone. Every time the page is refreshed the time changes to the current time, counting the hours, minutes, & seconds.
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//This piece of code grabs the element with the id of 'timeStamp' in the index sets the content of said element to 'timeStr'.
document.getElementById("timeStamp").innerHTML = timeStr;

//These two lines of code return the specified date & time. The 'getHours' method returns the hour from 0-23. The 'getMonths' method returns the month from 0-11.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//This line of code determines which map to use for the image by calculating the given formula.
var mapNum = (2 * thisMonth + thisHour) % 24;

//This line of code places the image into the webpage. The 'mapNum' is determining which image to use out of the 24 images.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//This line of code takes the element with the id of 'planisphere' & sets it to the variable 'imgStr' so that it could determine the placement of the image.
var imgStr = document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);