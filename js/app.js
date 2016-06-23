var my_techs;
var my_race = "";

var races = [
	"The Barony of Letnev",
	"The Emirates of Hacan",
	"Federation of Sol",
	"The L1Z1X Mindnet",
	"The Mentak Coalition",
	"The Naalu Collective",
	"Sardakk N'orr",
	"The Universities of Jol-Nar",
	"The Xxcha Kingdom",
	"The Yssaril Tribes",
	"The Yin Brotherhood",
	"The Embers of Muaat",
	"The Clan of Saar"
];

function raceSelected(race) {
	my_race = race.value;
	document.getElementById('header').style.display = 'block';
	document.getElementById('header-title').innerText = my_race;

	document.getElementById('race-div').style.display = 'none';
	document.getElementById('unit-div').style.display = 'block';

	//jon-nar -1 on all combat rolls
	if (my_race === "The Universities of Jol-Nar") {
		var table = document.getElementById('unit-table');
		for (var i = 1; i < table.rows.length; i++) {
			var current = parseInt(table.rows[i].cells[2].innerHTML);
			if (! isNaN(current)) {
				table.rows[i].cells[2].innerHTML = current + 1;
			}
		}
	}
	//sardakk n'orr +1 on all combat rolls
	if (my_race === "Sardakk N'orr") {
		var table = document.getElementById('unit-table');
		for (var i = 1; i < table.rows.length; i++) {
			var current = parseInt(table.rows[i].cells[2].innerHTML);
			if (! isNaN(current)) {
				table.rows[i].cells[2].innerHTML = current - 1;
			}
		}
	}
	//embers of muaat war suns base movement of 1, upgraded when deep space cannon is acquired
	if (my_race === "The Embers of Muaat") {
		var unit = document.getElementById('unit-war-sun');
		unit.cells[4].innerHTML = 1;
	}
	//l1z1x mindnet dreadnought base cost of 4 and +1 during space battles
	if (my_race === "The L1Z1X Mindnet") {
		var unit = document.getElementById('unit-dreadnought');
		unit.cells[1].innerHTML = 4;
		var current = parseInt(unit.cells[2].innerHTML);
		unit.cells[2].innerHTML = current - 1;
	}
	//naalu collective fighters +1 on combat rolls
	if (my_race === "The Naalu Collective") {
		var unit = document.getElementById('unit-fighter');
		var current = parseInt(unit.cells[2].innerHTML);
		unit.cells[2].innerHTML = current - 1;
	}
	//clan of saar space docks have 1 movement
	if (my_race === "The Clan of Saar") {
		var unit = document.getElementById('unit-space-dock');
		unit.cells[4].innerHTML = 1;
	}
}

var main = function() {
	var race_list = document.getElementById('race-list');
	for (var i = 0; i < races.length; i++) {
		var option = document.createElement('option');
		option.value = races[i];
		option.innerHTML = races[i];
		race_list.appendChild(option);
	}
};

$(document).ready(main);
