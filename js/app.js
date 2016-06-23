var my_techs;

class unit {
	constructor(name, cost, battle, mvmt, special) {
		this.name = name;
		this.cost = cost;
		this.battle = battle;
		this.mvmt = mvmt;
		this.special = special;
	}
}

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
	"The Yssaril Tribes"
];

var my_units = [
	new unit("Dreadnought", "5", "5", "1", "Bombardment, Sustain Damage"),
	new unit("Carrier", "3", "9", "1", "Capacity: 6"),
	new unit("Cruiser", "2", "7", "2", ""),
	new unit("Destroyer", "1", "9", "2", "Anti-Fighter Barrage"),
	new unit("Fighter (x2)", "1", "9", "n/a", ""),
	new unit("War Sun", "12", "3 (x3)", "2", "Bombardment, Capacity: 6, Sustain Damage"),
	new unit("Ground Force (x2)", "1", "8", "-", ""),
	new unit("PDS", "1", "6", "-", "Planetary Shield, Space Cannon"),
	new unit("Space Dock", "4", "-", "-", "Produce Units, Fighter Capacity: 3")
];

function raceSelected(race) {
	document.getElementById('race-div').style.display = 'none';
	document.getElementById('unit-div').style.display = 'block';
	var table = document.getElementById('unit-table');
	
	for (var i = 0; i < my_units.length; i++) {
		var row = table.insertRow();
		var cell0 = row.insertCell(0);
		var text0 = document.createTextNode(my_units[i].name);
		cell0.appendChild(text0);
		var cell1 = row.insertCell(1);
		var text1 = document.createTextNode(my_units[i].cost);
		cell1.appendChild(text1);
		var cell2 = row.insertCell(2);
		var text2 = document.createTextNode(my_units[i].battle);
		cell2.appendChild(text2);
		var cell3 = row.insertCell(3);
		var text3 = document.createTextNode(my_units[i].mvmt);
		cell3.appendChild(text3);
		var cell4 = row.insertCell(4);
		var text4 = document.createTextNode(my_units[i].special);
		cell4.appendChild(text4);
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
