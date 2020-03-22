const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=7b8261c5830ed6bbd6c8fc43386dca74';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=7b8261c5830ed6bbd6c8fc43386dca74';
const eventsURL = 'HTTPS://byui-cit230.github.io/weather/data/towndata.json';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

      
        const currently = jsObject.weather[0].main
        const temp = jsObject.main.temp_max.toFixed(0);
        const humidity = jsObject.main.humidity;
        const wind = jsObject.wind.speed.toFixed(0);
        
        document.getElementById('currently').textContent = currently;
        document.getElementById('temp').textContent = temp;
        document.getElementById('humidity').textContent = `${humidity}%`;
        document.getElementById('windSpeed').textContent = wind;

        var windOther = parseFloat(wind);
      
      var formula = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windOther, 0.16)) + (0.4275 * temp * Math.pow(windOther, 0.16));
  
      if(temp < 50 && windOther > 3) {
          document.getElementById("windchill").textContent = formula.toFixed(0) + "ºF";
      } else {
          document.getElementById("windchill").textContent = "N/A";
      }
    })
        

  
    fetch(forecastUrl)
    .then(function (response) {
        return response.json();
    })
    .then( function (jsonObject) {
        const forecasts = jsonObject.list.filter(item => item.dt_txt.includes('18:00:00'));
        const rows = document.querySelectorAll('tr td span');
        const icons = document.querySelectorAll('tr td img');
        const days = document.querySelectorAll('th');

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(forecasts[i].dt_txt);
            const day = weekdays[date.getDay()];
            rows[i].textContent = Math.round(forecasts[i].main.temp);
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`);
            days[i].textContent = day;
        }
    });

    fetch(requestURL)
    .then(function (response)
    {
      return response.json();   
    })
      .then(function (jsonObject)
    {
      console.table(jsonObject);
      const towndata = jsonObject['towns'];
      for (let i = 0; i < towndata.length; i++ )
      {
          if (towndata[i].name != "Soda Springs")
          {
              continue;
          }
          let townEventDiv = document.getElementById("upcoming-events");
          for (let j =0; j < towndata[i]['events'].length; j++)
          {
              let eventDetailsDiv = document.createElement('div');
              var eventStringArray = towndata[i]['events'][j].split(':')
              eventDetailsDiv.innerHTML = eventStringArray[0] + ":";
              let eventDescriptionSpan = document.createElement('span');
              eventDescriptionSpan.innerHTML = eventStringArray[1];
              eventDetailsDiv.appendChild(eventDescriptionSpan);
              eventDetailsDiv.className = "town-events-list-item";
              townEventDiv.appendChild(eventDetailsDiv);
          }
      }
    });