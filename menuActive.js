/*  
When a section is active, change logo, change color of text in the menu, change background color of the panel
*/

function aboutActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
		x.style.display = "block";
		y.style.display = "none";
  document.getElementById("aboutActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("servicesActive").style.color = "rgb(31, 30, 29)";     
}
function servicesActive() { 
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
		x.style.display = "none";
		y.style.display = "block";
  document.getElementById("servicesActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("aboutActive").style.color = "rgb(230, 230, 230)";     
}	 