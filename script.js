var today;
var hour;
var minute;
var cHour = document.getElementById("hourh2");
var cMinute = document.getElementById("minuteh2");
var cDate = document.getElementById("dateh2");

function setClock(){
    setTimeout(function(){
        //Get Time
        today = new Date();
        hour = today.getHours();
        minute = today.getMinutes();
        //Set time
        cHour.innerHTML = hour;
        cMinute.innerHTML = minute;
        setClock()
    }, 1000);
}
setClock(); 
//Trim Day
today = new Date();
var day = today.toString();
var dayLeng = 10;
var trimmedDay = day.substring(0, dayLeng);

cDate.innerHTML = trimmedDay;

function ipLookUp () {
    $.ajax('http://ip-api.com/json')
    .then(
        function success(response) {
            console.log('User\'s Location Data is ', response);
            console.log('User\'s Country', response.country);
        },
  
        function fail(data, status) {
            console.log('Request failed.  Returned status of',
                        status);
        }
    );
  }
  ipLookUp()

var weatherKey = config.WEATHER_API_KEY;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=metric&appid=" + weatherKey,
        type: "GET",
        success: function (result){
            console.log(result);
            weatherResult(result);
        },
        error: function(error) {
            console.log(error);
        }
    })

    function weatherResult(data){
        try {
            $("#cTemp").html(Math.round(data.main.temp) + "°");
            $("#cCity").html(data.name + ", " + data.sys.country);
            $("#weatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
            $("#cLongLat").html(data.coord.lat + " " + data.coord.lon);
            $("#fl").html(data.main.feels_like);
            $("#temp").html(data.main.temp);
            $("#tmin").html(data.main.temp_min);
            $("#tmax").html(data.main.temp_max);
            $("#pressure").html(data.main.pressure);
            $("#humidity").html(data.main.humidity);
        } catch (error) {
            $("#weatherBox").html("Error Caught: " + error);
        }
    }

    onmousemove = function(e){$("#coord").html("X: " + e.clientX + " Y: " + e.clientY);}