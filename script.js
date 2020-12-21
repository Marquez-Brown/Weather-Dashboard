
    //DOM Variables
    //API Call
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var apiKey = "&units=imperial&appid=95af86a9b5702eee43786687bca28ba8"
// var city = $("#citySearch").val();
var currentWeather = []

   

  

    //Event Listeners
    $("#searchBtn").on("click", function(e) {
        e.preventDefault();
    city = $("#citySearch").val();
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q="+ city + apiKey
    console.log(city);
    console.log(apiKey);
    console.log(queryURL);
    $.ajax({
        url: queryURL, 
        method:"GET"}).then(function(response){
            console.log(response);
        });
    });

    function getCurrentWeather (response) {
        var temp = (response.main.temp)
        const card = $("<div>").addClass("card");
    var cardBody = $("<div>").addClass("card-body");
    var city = $("<h4>").addClass("card-title").text(response.name);
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
    var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
    }
    
   
    


//create the local storage for the api data to persist.

//when you click the search button have it call the api

//do the api

//figure out what in the api object needs to display 

//append the information to the right 

//get the 5 day forcast api

//append the 5 day forcast to the bottom 