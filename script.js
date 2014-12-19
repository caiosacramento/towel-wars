var dieRoll = function () {
    'use strict';
    return Math.ceil(Math.random() * 6);
};

var character = function (name, pointsLimit) {
    'use strict';
    do {
        var towel = {
            name: name,
            strength: parseInt(prompt('Força:')),
            armor: parseInt(prompt('Armadura:')),
            endurance: parseInt(prompt('Resistência:'))
        };
    } while ((towel.armor + towel.endurance + towel.strength) > pointsLimit);
    return towel;
};

var towel1 = character('Rafael', 20);
var towel2 = character('Caio', 20);
console.log(towel1);
console.log(towel2);

var totalDamage = function (attacker, defender) {
    'use strict';
    return (attacker.strength * dieRoll()) - (defender.armor * dieRoll());
};

var battle = function (){
    'use strict';
    while (towel1.life > 0 && towel2.life > 0) {
        towel2.life -= totalDamage(towel1, towel2);
        towel1.life -= totalDamage(towel2, towel1);
    }
    return towel1.life > 0 ? console.log(towel1.name) + ' ganhou' : console.log(towel2.name) + ' ganhou';
};
