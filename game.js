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
    flash: { name: 'PK Flash', modifier: 3, description: 'It stuns the target!!' },
    freeze: { name: 'PK Freeze', modifier: 5, description: 'It freezes the target!!' },
    thunder: { name: 'PK Thunder', modifier: 7, description: 'It shocks the target!' }
}

modifierActivated = false;

// Slap function
function slap() {
    if (target.health > 0) {
        let damage = 1 + addMods();
        target.health -= damage;
        target.hits++;
    }
    if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
        document.getElementById("message").innerText = `Flash Slap! ${1 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
        document.getElementById("message").innerText = `Freeze Slap! ${1 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
        document.getElementById("message").innerText = `Thunder Slap! ${1 + addMods()} HP of damage!`;
    } else {
        document.getElementById("message").innerText = `Slap! ${1 + addMods()} HP of damage!`;
    }
    update();
}

// Punch function
function punch() {
    if (target.health > 0) {
        let damage = 5 + addMods();
        target.health -= damage;
        target.hits++;
    }
    if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
        document.getElementById("message").innerText = `Flash Punch! ${5 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
        document.getElementById("message").innerText = `Freeze Punch! ${5 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
        document.getElementById("message").innerText = `Thunder Punch! ${5 + addMods()} HP of damage!`;
    } else {
        document.getElementById("message").innerText = `Punch! ${5 + addMods()} HP of damage!`;
    }
    update();
}

// Kick function
function kick() {
    if (target.health > 0) {
        let damage = 10 + addMods();
        target.health -= damage;
        target.hits++;
    }
    if (document.getElementById("modifier").innerText == `${items.flash.name} active!`) {
        document.getElementById("message").innerText = `Flash Kick! ${10 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.freeze.name} active!`) {
        document.getElementById("message").innerText = `Freeze Kick! ${10 + addMods()} HP of damage!`;
    } else if (document.getElementById("modifier").innerText == `${items.thunder.name} active!`) {
        document.getElementById("message").innerText = `Thunder Kick! ${10 + addMods()} HP of damage!`;
    } else {
        document.getElementById("message").innerText = `Kick! ${10 + addMods()} HP of damage!`;
    }
    update();
}


function addFlash() {
    if (modifierActivated == false) {
        target.items.push(items.flash);
        document.getElementById("modifier").innerText = `${items.flash.name} active!`;
        modifierActivated = true;
    } else {
        target.items.pop(target.items.flash);
        document.getElementById("modifier").innerText = `No Modifier Active`;
        modifierActivated = false;
    }
    update();
}

function addFreeze() {
    if (modifierActivated == false) {
        target.items.push(items.freeze);
        document.getElementById("modifier").innerText = `${items.freeze.name} active!`;
        modifierActivated = true;
    } else {
        target.items.pop(target.items.freeze);
        document.getElementById("modifier").innerText = `No Modifier Active`;
        modifierActivated = false;
    }
    update();
}

function addThunder() {
    if (modifierActivated == false) {
        target.items.push(items.thunder);
        document.getElementById("modifier").innerText = `${items.thunder.name} active!`;
        modifierActivated = true;
    } else {
        target.items.pop(target.items.thunder);
        document.getElementById("modifier").innerText = `No Modifier Active`;
        modifierActivated = false;
    }
    update();
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
    document.getElementById("")
}

function reset() {
    target.health = 100;
    target.name = "Big Bull";
    target.hits = 0;
    target.items.pop(target.items.flash);
    target.items.pop(target.items.freeze);
    target.items.pop(target.items.thunder);
    document.getElementById("message").innerText = ` `;
    document.getElementById("modifier").innerText = `No Modifier Active`;
    modifierActivated = false;
    update();
}

update();

console.log("Finish");