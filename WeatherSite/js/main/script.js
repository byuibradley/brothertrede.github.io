// Bradley Trede - Combine Previous JS Scripts into one organized page

//Menu Script
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide");
}

// Severity Script for Form
function StormSeverity(severity) {
    document.getElementById("getSeverity").innerHTML = severity;
}
// Grab the JSON source
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Issue Fetch Command
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
      
       
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
                let card = document.createElement('article');
                let data = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('h3')
                let population = document.createElement('p');
                let year = document.createElement('p');
                let rainfall = document.createElement('p');
                let image =document.createElement('img');
                
                
                // Set attributes
                data.setAttribute('class', 'data');
                card.setAttribute('class', 'town')
                // set placements
                name.textContent = town.name;
                motto.textContent = town.motto;
                year.textContent = `Founded: ${town.yearFounded}`;
                population.textContent = `Current Pop: ${town.currentPopulation}`;
                rainfall.textContent = `Annual Avg Rainfall: ${town.averageRainfall}`
                image.setAttribute('src', `images/${town.photo}`);
                image.setAttribute('alt', town.name);
                // append children to data connection and pass values
                data.appendChild(name);
                data.appendChild(motto);
                data.appendChild(year);
                data.appendChild(population);
                data.appendChild(rainfall);
                card.appendChild(data);
                card.appendChild(image);
                document.querySelector('.towns').appendChild(card);
              
            }
        });
    });

    // Build script for Update in Footer
    const daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // Define constants and variables
    const d = new Date();
    const dayName = daynames[d.getDay()];
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
    document.getElementById("currentdate").textContent = fulldate;
    
    var Now = new Date();
    var CurrentDay = Now.getDay();
    if (CurrentDay == 0 || CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 6)
  
    //Announcement Posting under header
    $('#noAnnouncement').show();
    else $('#announcement').show();

    //Windchill Script
    //Define Constants
    const temperature = parseFloat(document.getElementById('temp').textContent);
    const windSpeed = parseFloat(document.getElementById('windspeed').textContent);
    const windChill = (35.74 + (0.6215 * temperature) - (35.75 *(Math.pow(windSpeed, 0.16))) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16))));
    
    // Display Windchill
    document.getElementById('windChill').textContent = Math.ceil(windChill);