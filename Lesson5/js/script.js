function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide");
}


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
const dayName = d.getDay();
const monthName = d.getMonth();
const year = d.getFullYear();
const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
document.getElementById("currentdate").textContent = fulldate;

var Now = new Date();
var CurrentDay = Now.getDay();
if (CurrentDay == 0 || CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 6)

$('#noAnnouncement').show();

else $('#announcement').show();

