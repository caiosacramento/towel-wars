var dieRoll = function (){
    'use strict';
    return Math.ceil(Math.random() * 6);
};

var towel1 = {
    name: 'Towelie',
    strength: 4,
    armor: 3,
    endurance: 2
};
towel1.life = towel1.endurance * 5;

var towel2 = {
    name: 'Mr Hankey',
    strength: 3,
    armor: 1,
    endurance: 5
};
towel2.life = towel2.endurance * 5;

var totalDamage = function () {
    'use strict';
    return (towel1.strength * dieRoll()) - (towel2.armor * dieRoll());
};

var battle = function (){
    'use strict';
    while (towel2.life > 0) {
        towel2.life -= totalDamage();
        console.log(towel2.life);
    }
    return 'MORREU PARCERO';
};

var character = function (name, pointsLimit){
    'use strict';
    do {
    var towel = {
    strength: prompt('Força:'),
    armor: prompt('Armadura:'), 
    endurance: prompt('Resistência:')
    };
    } while (parseInt(towel.armor) + parseInt(towel.endurance) + parseInt(towel.strength) > pointsLimit);
    console.log(name);
    console.log(towel.strength);
    console.log(towel.armor);
    console.log(towel.endurance);
    return 'Caio, não durma';
};


