console.log("Start");

// Target object

let target = {
    name: "Big Bull",
    health: 100,
    hits: 0
    items: []
}

var items = {
    flash = {name: 'PK Flash', modifier: 2, description: 'It stuns the target!!'},
    freeze = {name: 'PK Freeze', modifier: 2, description: 'It freezes the target!!'},
    thunder = {name: 'PK Thunder', modifier: 2, description: 'It shocks the target!'}
}

// Global variable for health
// var health = 100;
// var name = "Big Bull";
// var hits = 0;

function slap() {
    if (target.health > 0) {
        target.health--;
        target.hits++;
    }
    update();
}

function punch() {
    if (target.health > 0) {
        target.health = target.health - 5;
        target.hits++;
    }
    update();
}

function kick() {
    if (target.health > 0) {
        target.health = target.health - 10;
        target.hits++;
    }
    update();
}


function update() {
    document.getElementById("name").innerText = `${target.name}`
    document.getElementById("health").innerText = `${target.health}`
    document.getElementById("hits").innerText = `${target.hits}`
}

update();

console.log("Finish");