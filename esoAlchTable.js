$(document).ready(function () {
    $('#alch-table').DataTable({
        data: esoAlch.ingredients
    });

    //Add click filter functionality
    var table = $('#alch-table').DataTable();
    $('#alch-table tbody').on('click', 'td', function () {
        esoAlch.filterEffect(table.cell(this).data());
    });

    for (var i in esoAlch.effects) {
        _makeButton(i);
    }
    function _makeButton(i) {
        var effect = esoAlch.effects[i];
        var newButton = $("<button></button>").text(effect);
        newButton.addClass("btn btn-primary");
        newButton.click(function () { esoAlch.filterEffect(effect) });
        $("#effect-buttons").append(newButton);
    }
});

//to minimize global variables, we will create the esoAlch object to hold properties and methods
var esoAlch = {};

//search function for filtering table by alchemical effect
esoAlch.filterEffect = function (effect) {
    var searchTerm = $("#alch-table").DataTable();
    searchTerm.search(effect, true, false);
    searchTerm.draw();
}

//big-ass array holding ingredient names, effects, etc.
esoAlch.ingredients = [
    [
        "Beetle Scuttle",
        "Lower Spell Resist",
        "Increase Armor",
        "Protection",
        "Vitality"
    ],
    [
        "Blessed Thistle",
        "Restore Stamina",
        "Increase Weapon Power",
        "Ravage Health",
        "Speed"
    ],
    [
        "Blue Entoloma",
        "Ravage Magicka",
        "Lower Spell Power",
        "Restore Health",
        "Invisible"
    ],
    [
        "Bugloss",
        "Increase Spell Resist",
        "Restore Health",
        "Lower Spell Power",
        "Restore Magicka"
    ],
    [
        "Butterfly Wing",
        "Restore Health",
        "Lower Spell Crit",
        "Sustained Restore Health",
        "Vitality"
    ],
    [
        "Columbine",
        "Restore Health",
        "Restore Magicka",
        "Restore Stamina",
        "Unstoppable"
    ],
    [
        "Corn Flower",
        "Restore Magicka",
        "Increase Spell Power",
        "Ravage Health",
        "Detection"
    ],
    [
        "Dragonthorn",
        "Increase Weapon Power",
        "Restore Stamina",
        "Lower Armor",
        "Weapon Crit"
    ],
    [
        "Emetic Russula",
        "Ravage Health",
        "Ravage Magicka",
        "Ravage Stamina",
        "Stun"
    ],
    [
        "Fleshfly Larva",
        "Ravage Stamina",
        "Vulnerability",
        "Creeping Ravage Health",
        "Vitality"
    ],
    [
        "Imp Stool",
        "Lower Weapon Power",
        "Ravage Stamina",
        "Increase Armor",
        "Lower Weapon Crit"
    ],
    [
        "Lady's Smock",
        "Increase Spell Power",
        "Restore Magicka",
        "Lower Spell Resist",
        "Spell Crit"
    ],
    [
        "Luminous Russula",
        "Ravage Stamina",
        "Lower Weapon Power",
        "Restore Health",
        "Reduce Speed"
    ],
    [
        "Mountain Flower",
        "Increase Armor",
        "Restore Health",
        "Lower Weapon Power",
        "Restore Stamina"
    ],
    [
        "Mudcrab Chitin",
        "Increase Spell Resist",
        "Increase Armor",
        "Protection",
        "Defile"
    ],
    [
        "Namira's Rot",
        "Spell Crit",
        "Speed",
        "Invisible",
        "Unstoppable"
    ],
    [
        "Nightshade",
        "Ravage Health",
        "Protection",
        "Creeping Ravage Health",
        "Defile"
    ],
    [
        "Nirnroot",
        "Ravage Health",
        "Lower Spell Crit",
        "Lower Weapon Crit",
        "Invisible"
    ],
    [
        "Scrib Jelly",
        "Ravage Magicka",
        "Speed",
        "Vulnerability",
        "Sustained Restore Health"
    ],
    [
        "Spider Egg",
        "Reduce Speed",
        "Invisible",
        "Sustained Restore Health",
        "Defile"
    ],
    [
        "Stinkhorn",
        "Lower Armor",
        "Ravage Health",
        "Increase Weapon Power",
        "Ravage Stamina"
    ],
    [
        "Torchbug Thorax",
        "Lower Armor",
        "Lower Weapon Crit",
        "Detection",
        "Vitality"
    ],
    [
        "Violet Coprinus",
        "Lower Spell Resist",
        "Ravage Health",
        "Increase Spell Power",
        "Ravage Magicka"
    ],
    [
        "Water Hyacinth",
        "Restore Health",
        "Spell Crit",
        "Weapon Crit",
        "Stun"
    ],
    [
        "White Cap",
        "Lower Spell Power",
        "Ravage Magicka",
        "Increase Spell Resist",
        "Detection"
    ],
    [
        "Wormwood",
        "Weapon Crit",
        "Reduce Speed",
        "Detection",
        "Unstoppable"
    ]

    //an empty ingredient template for convenience
    /*[
        "",
        "",
        "",
        "",
        ""
    ],*/
];

//array of alchemical effects
esoAlch.effects = [
    "Invisible",
    "Restore Health",
    "Stun"
];