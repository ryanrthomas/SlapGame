console.log("Start");

// Global variable for health
var health = 100;

function slap() {
    if (health > 0) {
        health--;
    }
}

function update() {
    document.getElementById("health").innerText
}

update();

console.log("Finish");