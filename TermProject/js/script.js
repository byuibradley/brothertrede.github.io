const guidesURL = "guides.json"


function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide");
}

var visible = true;

setInterval(function(){
    document.getElementById("floater").style.visibility= visible ? "visible" : "hidden";
    visible != hidden;
},5000);

fetch(guidesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject); 
    for (let n = 0; n < guides.length; n++) {
      let profiles = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let div3 = document.createElement('div');
      let div4 = document.createElement('div');
      let div5 = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = guides[n].name ;
      div1.textContent = 'Nickname: ' + guides[n].nickname;
      div2.textContent = 'Hometown: ' + guides[n].hometown;
      div3.textContent = 'Years Experience: ' + guides[n].yearsExperience;
      div4.textContent = 'Favorite River: ' + guides[n].favoriteRiver;
      div5.textContent = 'bio: ' + guides[n].bio;
      image.setAttribute('src', guides[n].photo);
      image.setAttribute('alt', guides[n].name)

      profiles.appendChild(h2);
      profiles.appendChild(div1);
      profiles.appendChild(div2);
      profiles.appendChild(div3);
      profiles.appendChild(div4);
      profiles.appendChild(div5);
      profiles.appendChild(image);

      document.querySelector('div.profiles').appendChild(profiles);
    }
  });

  /* ---------------------------------------- Current Weather for Footer Current Temperature ---------------- */

  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83549&units=imperial&APPID=7b8261c5830ed6bbd6c8fc43386dca74';
  fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

      
        const currently = jsObject.weather[0].main
        const temp = jsObject.main.temp_max.toFixed(0);
        const wind = jsObject.wind.speed.toFixed(0);
        
        
        document.getElementById('currently').textContent = currently;
        document.getElementById('temp').textContent = temp;
        document.getElementById('wind').textContent = wind;


    })