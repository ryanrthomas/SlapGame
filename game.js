console.log("Start");

// Target object
let player = {
    name: "Player",
    health: 25,
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
    flash: { name: 'Flash', modifier: 3, description: 'It stuns the target!!' },
    freeze: { name: 'Freeze', modifier: 5, description: 'It freezes the target!!' },
    thunder: { name: 'Thunder', modifier: 7, description: 'It shocks the target!' }
}

enemyDefeated = false;
modifierActivated = false;
document.getElementById("message").innerText = `@ You encountered the ${target.name}. `;

// Slap function
function slap() {
    if (enemyDefeated == false) {
        if (target.health > 0) {
            playSlap();
            let damage = 1 + addMods();
            target.health -= damage;
            target.hits++;
        }
        if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
            document.getElementById("message").innerText = `@ Flash Slap! ${1 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
            document.getElementById("message").innerText = `@ Freeze Slap! ${1 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
            document.getElementById("message").innerText = `@ Thunder Slap! ${1 + addMods()} HP of damage to the ${target.name}!`;
        } else {
            document.getElementById("message").innerText = `@ Slap! ${1 + addMods()} HP of damage to the ${target.name}!`;
        }
        update();
    }
}

// Punch function
function punch() {
    if (enemyDefeated == false) {
        if (target.health > 0) {
            playPunch();
            let damage = 5 + addMods();
            target.health -= damage;
            target.hits++;
        }
        if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
            document.getElementById("message").innerText = `@ Flash Punch! ${5 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
            document.getElementById("message").innerText = `@ Freeze Punch! ${5 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
            document.getElementById("message").innerText = `@ Thunder Punch! ${5 + addMods()} HP of damage to the ${target.name}!`;
        } else {
            document.getElementById("message").innerText = `@ Punch! ${5 + addMods()} HP of damage to the ${target.name}!`;
        }
        update();
    }
}

// Kick function
function kick() {
    if (enemyDefeated == false) {
        if (target.health > 0) {
            playKick();
            let damage = 10 + addMods();
            target.health -= damage;
            target.hits++;
        }
        if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
            document.getElementById("message").innerText = `@ Flash Kick! ${10 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
            document.getElementById("message").innerText = `@ Freeze Kick! ${10 + addMods()} HP of damage to the ${target.name}!`;
        } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
            document.getElementById("message").innerText = `@ Thunder Kick! ${10 + addMods()} HP of damage to the ${target.name}!`;
        } else {
            document.getElementById("message").innerText = `@ Kick! ${10 + addMods()} HP of damage to the ${target.name}!`;
        }
        update();
    }
}

function addFlash() {
    if (enemyDefeated == false) {
        if (modifierActivated == false) {
            playFlash();
            target.items.push(items.flash);
            document.getElementById("modifier").innerText = `${items.flash.name} active!`;
            modifierActivated = true;
        } else {
            target.items.pop(target.items.flash);
            document.getElementById("modifier").innerText = `(No modifier active)`;
            modifierActivated = false;
        }
        update();
    }
}

function addFreeze() {
    if (enemyDefeated == false) {
        if (modifierActivated == false) {
            playFreeze();
            target.items.push(items.freeze);
            document.getElementById("modifier").innerText = `${items.freeze.name} active!`;
            modifierActivated = true;
        } else {
            target.items.pop(target.items.freeze);
            document.getElementById("modifier").innerText = `(No modifier active)`;
            modifierActivated = false;
        }
        update();
    }
}

function addThunder() {
    if (enemyDefeated == false) {
        if (modifierActivated == false) {
            playThunder();
            target.items.push(items.thunder);
            document.getElementById("modifier").innerText = `${items.thunder.name} active!`;
            modifierActivated = true;
        } else {
            target.items.pop(target.items.thunder);
            document.getElementById("modifier").innerText = `(No modifier active)`;
            modifierActivated = false;
        }
        update();
    }
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
        enemyDefeated = true;
        document.getElementById("message").innerText = `@ The ${target.name} became tame! You won!`
    } else {
        document.getElementById("health").innerText = `${target.health}`;
    }
    document.getElementById("hits").innerText = `${target.hits}`;
    document.getElementById("")
}

function reset() {
    playReset();
    target.health = 100;
    target.name = "Big Bull";
    target.hits = 0;
    target.items.pop(target.items.flash);
    target.items.pop(target.items.freeze);
    target.items.pop(target.items.thunder);
    document.getElementById("message").innerText = `@ You encountered the ${target.name}.`;
    document.getElementById("modifier").innerText = `(No special active)`;
    modifierActivated = false;
    enemyDefeated = false;
    update();
}

// Audio playback functions
function playSlap() {
    var audio = document.getElementById("slap");
    audio.play();
}
function playPunch() {
    var audio = document.getElementById("punch");
    audio.play();
}
function playKick() {
    var audio = document.getElementById("kick");
    audio.play();
}
function playFlash() {
    var audio = document.getElementById("flash");
    audio.play();
}
function playFreeze() {
    var audio = document.getElementById("freeze");
    audio.play();
}
function playThunder() {
    var audio = document.getElementById("thunder");
    audio.play();
}
function playReset() {
    var audio = document.getElementById("reset");
    audio.play();
}

update();

console.log("Finish");