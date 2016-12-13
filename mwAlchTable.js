$(document).ready( function(){
    $('#alch-table').DataTable({
        data: mwAlchIngredients
    });
});

function filterEffect (effect){
    var searchTerm = $("#alch-table").DataTable();
    searchTerm.search(effect, true, false);
    searchTerm.draw();
}

var mwAlchIngredients = [
/*
//empty entry
[
        "",
        "",
        "",
        "",
        ""
],
 */
    [
        "Alit Hide",
        "Drain Intelligence",
        "Resist Poison",
        "Telekenesis",
        "Detect Animal"
    ],
    [
        "Ampoule Pod",
        "Water Walking",
        "Paralyze",
        "Detect Animal",
        "Drain Willpower"
    ],
    [
        "Ash Salts",
        "Drain Agility",
        "Resist Magicka",
        "Cure Blight Disease",
        "Resist Magicka" 
    ],
    [
        "Ash Yam",
        "Fortify Intelligence",
        "Fortify Strength",
        "Resist Common Disease",
        "Detect Key"
    ],
    [
        "Bittergreen Petals",
        "Restore Intelligence",
        "Invisibility",
        "Drain Endurance",
        "Drain Magicka"
    ],
    [
        "Black Anther",
        "Drain Agility",
        "Resist Fire",
        "Drain Endurance",
        "Light"
    ],
    [
        "Black Lichen",
        "Drain Strength",
        "Resist Frost",
        "Drain Speed",
        "Cure Poison"
    ],
    [
        "Bloat",
        "Drain Magicka",
        "Fortify Intelligence",
        "Fortify Willpower",
        "Detect Animal"
    ],
    [
        "Bonemeal",
        "Restore Agility",
        "Telekenesis",
        "Drain Fatigue",
        "Drain Personality"
    ],
    [
        "Bread",
        "Restore Fatigue",
        "--",
        "--",
        "--"
    ],
    [
        "Bungler's Bane",
        "Drain Speed",
        "Drain Endurance",
        "Dispel",
        "Drain Strength"
    ],
    [
        "Chokeweed",
        "Drain Luck",
        "Restore Fatigue",
        "Cure Common Disease",
        "Drain Willpower"
    ],
    [
        "Coda Flower",
        "Drain Personality",
        "Levitate",
        "Drain Intelligence",
        "Drain Health"
    ],
    [
        "Comberry",
        "Drain Fatigue",
        "Restore Magicka",
        "Fire Shield",
        "Reflect"
    ],
    [
        "Corkbulb Root",
        "Cure Paralyzation",
        "Restore Health",
        "Lightning Shield",
        "Fortify Luck"
    ],
    [
        "Corprus Weepings",
        "Drain Fatigue",
        "Fortify Luck",
        "Drain Willpower",
        "Restore Health"
    ],
    [
        "Crab Meat",
        "Restore Fatigue",
        "Resist Shock",
        "Lightning Shield",
        "Restore Luck"
    ],
    [
        "Daedra Skin",
        "Fortify Strength",
        "Cure Common Disease",
        "Paralyze",
        "Swift Swim"
    ],
    [
        "Daedra Heart",
        "Restore Magicka",
        "Fortify Endurance",
        "Drain Agility",
        "Night Eye"
    ],
    [
        "Diamond",
        "Drain Agility",
        "Invisibility",
        "Reflect",
        "Detect Key"
    ],
    [   
        "Dreugh Wax",
        "Fortify Strength",
        "Restore Strength",
        "Drain Luck",
        "Drain Willpower",
    ],
    [
        "Ectoplasm",
        "Fortify Agility",
        "Detect Animal",
        "Drain Strength",
        "Drain Health"
    ],
    [
        "Emerald",
        "Fortify Magicka",
        "Restore Health",
        "Drain Agility",
        "Drain Endurance"
    ],
    [
        "Fire Petal",
        "Resist Fire",
        "Drain Health",
        "Spell Absorption",
        "Paralyze"
    ],
    [
        "Fire Salts",
        "Drain Health",
        "Fortify Agility",
        "Resist Frost",
        "Fire Shield"
    ],
    [
        "Frost Salts",
        "Drain Speed",
        "Restore Magicka",
        "Frost Shield",
        "Resist Fire"
    ],
    [
        "Ghoul Heart",
        "Paralyze",
        "Cure Poison",
        "Fortify Attack",
        "--"
    ],
    [
        "Gold Kanet",
        "Drain Health",
        "Burden",
        "Drain Luck",
        "Restore Strength"
    ],
    [
        "Gravedust",
        "Drain Intelligence",
        "Cure Common Disease",
        "Drain Magicka",
        "Restore Endurance"
    ],
    [
        "Green Lichen",
        "Fortify Personality",
        "Cure Common Disease",
        "Drain Strength",
        "Drain Health"
    ],
    [
        "Guar Hide",
        "Drain Fatigue",
        "Fortify Endurance",
        "Restore Personality",
        "Fortify Luck"
    ],
    [
        "Hackle-Lo Leaf",
        "Restore Fatigue",
        "Paralyze",
        "Water Breathing",
        "Restore Luck"
    ],
    [
        "Heather",
        "Restore Personality",
        "Feather",
        "Drain Speed",
        "Drain Personality"
    ],
    [
        "Hound Meat",
        "Restore Fatigue",
        "Fortify Fatigue",
        "Reflect",
        "Detect Enchantment"
    ],
    [
        "Hyper Facia",
        "Drain Luck",
        "Drain Agility",
        "Drain Fatigue",
        "Detect Enchantment"
    ],
    [
        "Kagouti Hide",
        "Drain Fatigue",
        "Fortify Speed",
        "Resist Common Disease",
        "Night Eye"
    ],
    [   
        "Kresh Fiber",
        "Restore Luck",
        "Fortify Personality",
        "Drain Magicka",
        "Drain Speed"
    ],
    [
        "Kwama Cuttle",
        "Resist Poison",
        "Drain Fatigue",
        "Water Walking",
        "Water Breathing"
    ],
    [
        "Large Kwama Egg",
        "Restore Fatigue",
        "Paralyze",
        "Frost Shield",
        "Fortify Health"
    ],
    [
        "Luminous Russula",
        "Water Breathing",
        "Drain Fatigue",
        "Poison",
        "--"
    ],
    [
        "Marshmerrow",
        "Restore Health",
        "Detect Enchantment",
        "Drain Willpower",
        "Drain Fatigue"
    ],
    [
        "Moon Sugar",
        "Fortify Speed",
        "Dispel",
        "Drain Endurance",
        "Drain Luck"
    ],
    [
        "Muck",
        "Drain Intelligence",
        "Detect Key",
        "Drain Personality",
        "Cure Common Disease"
    ],
    [
        "Netch Leather",
        "Fortify Endurance",
        "Fortify Intelligence",
        "Drain Personality",
        "Cure Paralyzation"
    ],
    [
        "Pearl",
        "Drain Agility",
        "Dispel",
        "Water Breathing",
        "Resist Common Disease"
    ],
    [
        "Racer Plumes",
        "Drain Willpower",
        "Levitate",
        "--",
        "--"
    ],
    [
        "Rat Meat",
        "Drain Magicka",
        "Paralyze",
        "Cure Poison",
        "Resist Poison"
    ],
    [
        "Raw Ebony",
        "Drain Agility",
        "Cure Poison",
        "Frost Shield",
        "Restore Speed"
    ],
    [
        "Raw Glass",
        "Drain Intelligence",
        "Drain Strength",
        "Drain Speed",
        "Fire Shield"
    ],
    [
        "Red Lichen",
        "Drain Speed",
        "Light",
        "Cure Common Disease",
        "Drain Magicka"
    ],
    [
        "Resin",
        "Restore Health",
        "Restore Speed",
        "Burden",
        "Resist Common Disease"
    ],
    [
        "Roobrush",
        "Drain Willpower",
        "Fortify Agility",
        "Drain Health",
        "Cure Poison"
    ],
    [
        "Ruby",
        "Drain Health",
        "Feather",
        "Restore Intelligence",
        "Drain Agility"
    ],
    [
        "Saltrice",
        "Restore Fatigue",
        "Fortify Magicka",
        "Drain Strength",
        "Restore Health"
    ],
    [
        "Scales",
        "Drain Personality",
        "Water Walking",
        "Restore Endurance",
        "Swift Swim"
    ],
    [
        "Scamp Skin",
        "Drain Magicka",
        "Cure Paralyzation",
        "Restore Personality",
        "Restore Strength"
    ],
    [
        "Scathecraw",
        "Drain Strength",
        "Cure Poison",
        "Drain Health",
        "Restore Willpower"
    ],
    [
        "Scrap Metal",
        "Drain Health",
        "Lightning Shield",
        "Resist Shock",
        "Restore Intelligence"
    ],
    [
        "Scrib Jelly",
        "Restore Fatigue",
        "Fortify Fatigue",
        "Burden",
        "Swift Swim"
    ],
    [
        "Scrib Jerky",
        "Restore Fatigue",
        "Fortify Fatigue",
        "Burden",
        "Swift Swim"
    ],
    [
        "Scuttle",
        "Restore Fatigue",
        "Fortify Fatigue",
        "Feather",
        "Telekenesis"
    ],
    [
        "Shalk Resin",
        "Drain Fatigue",
        "Fortify Health",
        "Drain Personality",
        "Fortify Speed"
    ],
    [
        "Sload Soap",
        "Drain Personality",
        "Fortify Agility",
        "Fire Shield",
        "Restore Agility"
    ],
    [
        "Small Kwama Egg",
        "Restore Fatigue",
        "--",
        "--",
        "--"
    ],
    [
        "Spore Pod",
        "Drain Strength",
        "Drain Fatigue",
        "Detect Key",
        "Paralyze"
    ],
    [
        "Stoneflower Petals",
        "Restore Strength",
        "Fortify Magicka",
        "Drain Luck",
        "Fortify Personality"
    ],
    [
        "Trama Root",
        "Restore Willpower",
        "Levitate",
        "Drain Magicka",
        "Drain Speed"
    ],
    [
        "Vampire Dust",
        "Fortify Health",
        "Fortify Strength",
        "Spell Absorption",
        "Vampirism"
    ],
    [
        "Violet Coprinus",
        "Water Walking",
        "Drain Fatigue",
        "Poison",
        "--"
    ],
    [
        "Void Salts",
        "Restore Magicka",
        "Spell Absorption",
        "Paralyze",
        "Drain Endurance"
    ],
    [
        "Wickwheat",
        "Restore Health",
        "Fortify Willpower",
        "Paralyze",
        "Damage Intelligence"
    ],
    [
        "Willow Anther",
        "Drain Personality",
        "Frost Shield",
        "Cure Common Disease",
        "Cure Paralyzation"
    ],
    [
        "Large Corprusmeat Hunk",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Large Wrapped Corprusmeat",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Medium Corprusmeat Hunk",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Medium Wrapped Corprusmeat",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Small Corprusmeat Hunk",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Small Wrapped Corprusmeat",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    [
        "Wrapped Corprusmeat Hunk",
        "Drain Fatigue",
        "Drain Health",
        "Drain Magicka",
        "--"
    ],
    
    //end of vanilla MW ingredients
    /*[
        "",
        "",
        "",
        "",
        ""
    ],*/
];