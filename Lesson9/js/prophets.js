

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject); 
    for (let n = 0; n < prophets.length; n++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = prophets[n].name + ' ' + prophets[n].lastname;
      div1.textContent = 'Birth date: ' + prophets[n].birthdate;
      div2.textContent = 'Birth Place: ' + prophets[n].birthplace;
      image.setAttribute('src', prophets[n].imageurl);
      image.setAttribute('alt', prophets[n].name + ' ' + prophets[n].lastname + ' - ' + prophets[n].order)

      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });

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

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
document.getElementById("currentdate").textContent = fulldate;

var Now = new Date();
var CurrentDay = Now.getDay();
if (CurrentDay == 0 || CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 6)

$('#noAnnouncement').show();

else $('#announcement').show();