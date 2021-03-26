# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `weather-journal-app/website/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


## Description 


In `weather-journal-app/website/app.js file` 
1- getzip function to fetch data from Openweathermap web API and the Post them to postData function on (`/weather`)
2- after posting the data to my server  i get the data from my server through get route (`/all`).
3- therefore the data has been saved on our server and can manipulate them freely.
4- to do so there is a display function to show the data received (it publishes date, temperature, and user response).
5- changebk function is used ti change backgrounds relative to weather description e.g(when weather description is clear the background is changed to clear sky )
6- also getzip function get data for weather description, highest and lowest temperature, and name of the city.

 


In `weather-journal-app/server.js file`


1-Create instance from express(), and setup server and [port number].
2- Create Get route  (`/all`)  to recieve data 
3- Create POST route (`/weather`) to publish data


In `weather-journal-app/website/index.html file` 

1- An icon has been added to the header, so when clicking on it it refreshes the page
2- Added couple of ids' to entry holder div to represent the data such as: city name , highest and lowest temperature, and weather description.



In `weather-journal-app/website/style.css file` 
1- To make the style of website suitable for differenent screen sizes ,( @media screen and (max-width )) was used to serve that cause .
2- some styles rergarding entry holder were added.

