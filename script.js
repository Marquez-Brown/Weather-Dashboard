
var apiKey = "&units=imperial&appid=95af86a9b5702eee43786687bca28ba8"
var date = new Date();




//Event Listener
$("#searchBtn").on("click", function (e) {
    e.preventDefault();
    city = $("#citySearch").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey
    console.log(city);
    console.log(apiKey);
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            console.log(response.name);
            console.log(response.weather[0].icon);
            console.log(response.main.temp);
            console.log(response.wind.speed);
            console.log(response.main.humidity);


            $("#lastCity").empty();
            $("#forecast").empty();
            getCurrentWeather(response);
            forecastFiveDay(response);
            makeList()
        });
});
//appends search query to list below search bar
function makeList() {
    var listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
}
//function for getting the current weather and appending info
function getCurrentWeather(response) {


// elements being appended to create a card and fill it
    var card = $("<div>").addClass("card");

    var cardBody = $("<div>").addClass("card-body");

    var inputCity = $("<h4>").addClass("card-title").text(city);

    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));

    var temperatureF = $("<p>").addClass("card-text current-temp").text("Temperature: " + response.main.temp + " °F");
    console.log(response.main.temp)
    var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");

    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");

    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    inputCity.append(cityDate, image);
    cardBody.append(inputCity, temperatureF, humidity, wind);
    card.append(cardBody);
    $("#lastCity").append(card);


};
//function for getting 5 day forcast and appending it
function forecastFiveDay(response) {

    

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            console.log(response.list[0].dt_txt);
            console.log(response.list[0].main.temp);
            console.log(response.list[0].main.humidity);
           //for loop appends the info 5 times to create 5 cards
            for (var i = 0; i < 5; i++) {


                var temp = response.list[0].main.temp
                var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
                var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
                var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
                var temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + temp + " °F");
                var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + response.list[i].main.humidity + "%");

                var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png")

                cardBody.append(cityDate, image, temperature, humidity);
                card.append(cardBody);
                $("#forecast").append(card);
            }
        });


};





//create the local storage for the api data to persist.

//when you click the search button have it call the api

//do the api

//figure out what in the api object needs to display 

//append the information to the right 

//get the 5 day forcast api

//append the 5 day forcast to the bottom 