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

var my_owned_techs = [];
var my_available_techs = [];
var techs = [
	// name, description, color, prerequisites, prerequisite operator (and|or)
	["Enviro Compensator", "The production capacity of your space docks is now increased by 1.", "yellow", [], ""],
	["Sarween Tools", "Whenever you produce units in any Space Dock, you now receive one additional resource with which to build units.", "yellow", ["Enviro Compensator"], ""],
	["Micro Technology", "When you receive trade goods from your trade agreements, you now receive one extra Trade Good for each of your active trade agreements.", "yellow", ["Stasis Capsules", "Sarween Tools"], "or"],
	["Nano Technology", "Your Dreadnaughts and War Suns may not be targeted by your opponents’ action cards. In addition, when you claim a planet you gain its planet card refreshed. (SE)", "yellow", ["Micro Technology"], ""],
	["Transit Diodes", "As an action, you my spend one Command Counter from your Strategic Allocation to immediately move up to four of your Ground Forces from any one of your planets to any other planet you control.", "yellow", ["Light Wave Deflector", "Dacxive Animator"], "or"],
	["Graviton Laser System", "When you make a combat roll with a PDS unit and miss, you may now make a single re-roll for each roll that missed.", "yellow", ["Deep Space Cannon"], ""],
	["Integrated Economy", "When producing units at your Space Docks, you may now place the new units in any activated, adjacent system that is empty or friendly. You may place PDS and Ground Force units on any friendly planet within this range.", "yellow", ["Cybernetics", "Micro Technology"], "and"],
	["Light Wave Deflector", "Your ships may now move through systems containing enemy ships and continue their movement to the activated system.", "blue", ["XRD Transporter", "Magen Defense Grid"], "and"],
	["Type IV Drive", "All of your Cruisers and Dreadnoughts now receive +1 movement.", "blue", ["XRD Transporters", "Neural Motivator"], "and"],
	["War Sun", "You are now allowed to produce War Sun units.", "red", ["Deep Space Cannon", "Sarween Tools"], "and"],
	["Fleet Logistics", "When taking a Tactical Action, you may now take two Tactical Actions, one after the other, before your turn ends.", "blue", ["Gravitation Negator"], ""],
	["XRD Transporters", "All of your Carriers now receive +1 movement.", "blue", ["Antimass Deflectors"], ""],
	["Maneuvering Jets", "Your opponents receive -1 to all PDS rolls targeting your ships (or -2 if the PDS is firing from an adjacent system). In addition, you receive -1 to all of your Space Mine rolls, and your ships do not have to stop when entering an Ion System. (SE)", "blue", ["XRD Transporters"], ""],
	["Advanced Fighters", "Your Fighters may now move independently with a movement rate of 2, and receive +1 on combat rolls. Your Fighters do not require the support of Carriers or Space Docks, and enemy ships may not move through a system your Fighters occupy. Fighters in excess of a system’s fighter capacity will count towards your Fleet Supply limit.", "blue", ["Type IV Drive"], ""],
	["Graviton Negator", "Your Dreadnoughts may now bombard planets that contain PDS units. Your Fighters may now participate in Invasion Combat. Surviving Fighters are returned to space after the combat and can never establish control of a planet.", "red", ["Assault Cannon", "Dacxive Animators"], "or"],
	["Hylar V Assault Laser", "All of your Cruisers and Destroyers now receive +1 on all combat rolls.", "red", [], ""],
	["Auto Defense Turrets", "All of your destroyers receive +2 and roll 1 additional die on all Anti-Fighter Barrage rolls. (SE)", "red", ["Hylar V Assault Laser"], ""],
	["Deep Space Cannon", "Enemy fleets in adjacent systems are now in range of your PDS units.", "red", ["Hylar V Assault Laser"], ""],
	["Stasis Capsules", "Your Cruisers and Dreadnoughts may now carry one Ground Force unit.", "green", ["Enviro Compensator"], ""],
	["Neural Motivator", "You now draw one extra Action Card during each Status Phase.", "green", ["Stasis Capsules", "Micro Technology"], "or"],
	["Dacxive Animators", "If you win an Invasion Combat, roll once for every Ground Force unit killed (yours and your opponent’s). For every roll of 6+, place one Ground Force unit on the planet from your reinforcements.", "green", ["Neural Motivators"], ""],
	["Gen Systhesis", "All of your Ground Force units now receive +1 on all combat rolls during Invasion Combat. When one of your Ground Force units is destroyed, roll a die: On a result of 5+, the unit is instead returned to a planet in your Home System.", "green", ["Cybernetics"], ""],
	["Hyper Metabolism", "During each Status Phase you gain 1 additional Command Counter. In addition, before drawing Action Cards, you may discard 1 Action Card from your hand to draw 1 additional card. (SE)", "green", ["Gen Synthesis"], ""],
	["X-89 Bacterial Weapon", "Your Dreadnought or War Sun units may now use this option before bombarding.  Immediately destroy all Ground Forces on the planet. Then discard all your Action Cards.", "green", ["Assault Cannon", "Transit Diodes"], "or"],
	["Assault Cannon", "Before any Space Battle begins, your participating Dreadnoughts may each fire one shot. Any hits are applied immediately and casualties do not receive return fire.", "red", ["Auto Defense Turrets", "Cybernetics"], "and"],
	["Antimass Deflectors", "All of your ships may now move through Asteroid Fields but may never end their movement in an Asteroid Field.", "blue", [], ""],
	["Cybernetics", "All of your Fighters now receive +1 on all combat rolls.", "green", ["Antimass Deflectors", "Stasis Capsules"], "or"],
	["Magen Defense Grid", "All of your PDS units now receive +1 on all combat rolls. In addition, all of your defending ground forces on a planet with a PDS receive +1 on all combat rolls during Invasion Combat.", "red", ["Deep Space Cannon"], ""]
];

function updateAvailableTechs() {
    for (var i = 0; i < techs.length; i++) {
    }
}

function displayAvailableTech(tech) {
    alert(tech);
    var d = document.createElement('div');
    var name = document.createElement('div');
    name.innerHTML = tech[0];
    var prereqs = document.createElement('div');
    if (tech[3].length === 0) {
        prereqs.innerHTML = "None";
    } else if (tech[3].length === 1) {
        prereqs.innerHTML = tech[3];
    } else {
        prereqs.innerHTML = tech[3][0] + " " + tech[4] + " " + tech[3][1];
    }
    var text = document.createElement('div');
    text.innerHTML = tech[1];
    var color = document.createElement('div');
    color.innerHTML = tech[2];

    d.appendChild(name);
    d.appendChild(prereqs);
    d.appendChild(text);
    d.appendChild(color);

    if (tech[2] === "red") {
        document.getElementById('available-tech-red').appendChild(d);
    } else if (tech[2] === "blue") {
        document.getElementById('available-tech-blue').appendChild(d);
    } else if (tech[2] === "yellow") {
        document.getElementById('available-tech-yellow').appendChild(d);
    } else if (tech[2] === "green") {
        document.getElementById('available-tech-green').appendChild(d);
    } else {
        document.getElementById('available-tech-racial').appendChild(d);
    }
}

function raceSelected(race) {
	my_race = race.value;
	document.getElementById('header').style.display = 'block';
	document.getElementById('unit-div').style.display = 'block';
	document.getElementById('tech-div').style.display = 'block';
	document.getElementById('race-div').style.display = 'none';
	document.getElementById('header-title').innerText = my_race;


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

    // add initial available techs
    for (var i = 0; i < techs.length; i++) {
        if (techs[i][3].length === 0) {
            my_available_techs.push(techs.splice(i, 1));
        }
    }
    for (var i = 0; i < my_available_techs.length; i++) {
        displayAvailableTech(my_available_techs[i]);
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
