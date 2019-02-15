import GameService from './gameService.js'

let _gs = new GameService();

function draw() {
    let target = _gs.Target;
    let template = '';
    template += target.getTemplate();
    document.getElementById('target-dropzone').innerHTML = template;
    document.getElementById("message").innerText = `@ You encountered the ${target.name}.`;
    document.getElementById("modifier").innerText = `(No special active)`;
    if (target.health <= 0) {
        document.getElementById("message").innerText = `@ The ${target.name} became tame! You won!`
    }
}

function drawMods() {
    let item = _gs.Item;
    let template = '';
    template += item.getTemplate();
    document.getElementById('item-dropzone').innerHTML = template;
    document.getElementById("message").innerText = `@ You encountered the ${item.name}.`;
    document.getElementById("modifier").innerText = `(No special active)`;
    if (item.health <= 0) {
        document.getElementById("message").innerText = `@ The ${item.name} became tame! You won!`
    }
}

export default class GameController {
    constructor() {
        draw();
    }

    slap() { 
        _gs.slap();
        draw();
    }
    punch() { 
        _gs.punch();
        draw();
    }
    kick() { 
        _gs.kick();
        draw();
    }
    addFlash() { 
        _gs.addFlash()
        drawMods();
    }
    addFreeze() { 
        _gs.addFreeze()
        drawMods();
    }
    addThunder() { 
        _gs.addThunder()
        drawMods();
    }
    reset() {
        _gs.reset();
        draw();
    }

    addItemToTarget(itemIndex) {
        _gs.addItemToTarget(itemIndex);
    }

    attackTarget(attackName) {
        _gs.attackTarget(attackName);
        draw();
    }
    // document.getElementById("message").innerText = `@ You encountered the ${target.name}. `;

    addMods() {
        let modifierTotal = 0;
        for (let i = 0; i < target.items.length; i++) {
            modifierTotal = target.items[i].modifier;
        }
        draw();
        return modifierTotal;
    }

    update() {
        document.getElementById("name").innerText = `${target.name}`;
        if (target.health <= 0) {
            enemyDefeated = true;
            document.getElementById("message").innerText = `@ The ${target.name} became tame! You won!`
        } else {
            document.getElementById("health").innerText = `${target.health}`;
        }
        document.getElementById("hits").innerText = `${target.hits}`;
        document.getElementById("")
        draw();
    }

    // reset() {
    //     playReset();
    //     target.health = 100;
    //     target.name = "Big Bull";
    //     target.hits = 0;
    //     target.items.pop(target.items.flash);
    //     target.items.pop(target.items.freeze);
    //     target.items.pop(target.items.thunder);
    //     document.getElementById("message").innerText = `@ You encountered the ${target.name}.`;
    //     document.getElementById("modifier").innerText = `(No special active)`;
    //     modifierActivated = false;
    //     enemyDefeated = false;
    //     update();
    //     draw();
    // }

}