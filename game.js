console.log("Start");

// Target object
let player = {
    name: "Player",
    health: 2,
    hits: 0,
    items: []
}

let target = {
    name: "Big Bull",
    health: 100,
    hits: 0,
    items: []
}

let items = {
    flash: { name: 'PK Flash', modifier: 3, description: 'It stuns the target!!' },
    freeze: { name: 'PK Freeze', modifier: 5, description: 'It freezes the target!!' },
    thunder: { name: 'PK Thunder', modifier: 7, description: 'It shocks the target!' }
}

// Global variable for health
var health = 100;
var name = "Big Bull";
var hits = 0;

// Slap function
function slap() {
    if (target.health > 0) {
        target.health -= 1 + addMods();
        target.hits++;
    }
    update();
}

// Punch function
function punch() {
    if (target.health > 0) {
        target.health -= 5 + addMods();
        target.hits++;
    }
    update();
}

// Kick function
function kick() {
    if (target.health > 0) {
        target.health -= 10 + addMods();
        target.hits++;
    }
    update();
}

function addFlash() {
    target.items.push(items.flash);
}

function addFreeze() {
    target.items.push(items.freeze);
}

function addThunder() {
    target.items.push(items.thunder);
}

function addMods() {
    let modifierTotal = 0;
    for (let i = 0; i < target.items.length; i++) {
        modifierTotal = target.items[i].modifier;
    }
    return modifierTotal;
}

function update() {
    document.getElementById("name").innerText = `${target.name}`;
    if (target.health <= 0) {
        document.getElementById("health").innerText = `The ${target.name} became tame! You won!`
    } else {
        document.getElementById("health").innerText = `${target.health}`;
    }
    document.getElementById("hits").innerText = `${target.hits}`;
}

function reset() {
    target.health = 100;
    target.name = "Big Bull";
    target.hits = 0;
    update();
}

update();

console.log("Finish");