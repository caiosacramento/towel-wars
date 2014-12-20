var dieRoll = function (sides) {
    'use strict';
    return Math.ceil(Math.random() * sides);
};

window.addEventListener('load', function () {
    'use strict';
    var character = function (pointsLimit) {
        var name = document.querySelector('#char_name').value,
            strength = parseInt(document.querySelector('#char_strength').value),
            armor = parseInt(document.querySelector('#char_armor').value),
            endurance = parseInt(document.querySelector('#char_endurance').value);
        if ((strength + armor + endurance) > pointsLimit) {
            alert(
                'A soma dos pontos de atributos deve ser igual a ' + pointsLimit + '!'
            )
        } else {
            var towel = {
                name: document.querySelector('#char_name').value,
                strength: strength,
                armor: armor,
                endurance: endurance
            };
        }
    };

    var towel1 = character(20);
    var towel2 = character(20);

    var characters = document.querySelector('.characters');
    node = document.createElement('div');
    character1 = document.createTextNode(towel1.name);
    character2 = document.createTextNode(towel2.name);
    characters.appendChild(node);
    node.appendChild(character1);
    node.appendChild(character2);

    var attack = document.querySelector('button_atk');
    button.addEventListener('click', function () {
        console.log('Character 1 attacks Character 2');
    });

    var totalDamage = function (attacker, defender) {
        return (attacker.strength * dieRoll(6)) - (defender.armor * dieRoll(6));
    };

    var battle = function (){
        while (towel1.life > 0 && towel2.life > 0) {
            towel2.life -= totalDamage(towel1, towel2);
            towel1.life -= totalDamage(towel2, towel1);
        }
        return towel1.life > 0 ? console.log(towel1.name) + ' ganhou' : console.log(towel2.name) + ' ganhou';
    };

});