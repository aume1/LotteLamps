/* global $ */
/// <reference path="./jquery.js"/>

// Value of all widths = 1800 * 15 = 27000
// Height of images = 2200

setInterval(function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	//document.title = (width / 15) * (height / 2200) + "";
	document.title = width + "";
	
	//document.getElementById("headerBox").height = 
}, 1000);