//key = 8e00ec28d19feca7b410a62e15d27cda



var weatherInfo = document.getElementById("weatherInfo");
var btn = document.getElementById("btn");
var cityName = document.getElementById("city");

btn.addEventListener("click", function () {

  var apiCall =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=8e00ec28d19feca7b410a62e15d27cda";

  var request = new XMLHttpRequest();
  request.open("GET", apiCall);

  request.onclick = function () {
    console.log(request.responseText);
    var myData = JSON.parse(request.responseText); //request.responseText;
    renderHTML(myData);
    //console.log(myData[0])
  };
  request.send();
});

function renderHTML(data) {
  var htmlString = "this is a test";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].main.temp + "</p>";
  }
  weatherInfo.insertAdjacentHTML("beforeend", htmlString);
}
