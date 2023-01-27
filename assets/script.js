

$('#search-button').on('click', function (event) {
    event.preventDefault()
    var city = $('#search-input').val()
    console.log(city)

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city + "&appid=19c33cff90b3ed400d60e822d6240ab6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        var weatherDay = [
            [],
            [],
            [],
            [],
            [],
            []
        ]

        var iterateVals = [0,8,16,24,32,39]
        for (var i = 0; i < iterateVals.length; i++) {
            (weatherDay[i]).push({date: response.list[iterateVals[i]].dt_txt});
            (weatherDay[i]).push({temp: response.list[iterateVals[i]].main.temp_max});
            (weatherDay[i]).push({clouds: response.list[iterateVals[i]].weather[0].description});
            (weatherDay[i]).push({wind: response.list[iterateVals[i]].wind.speed});
            (weatherDay[i]).push({humidity: response.list[iterateVals[i]].main.humidity});
        }

        console.log(weatherDay)

        $('#today').text(weatherDay[0][0].date)
        console.log(weatherDay[0][0].date)


    })
})