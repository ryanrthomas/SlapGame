import Target from '../models/target.js'
import Item from '../models/item.js'

let _target = new Target("Big Bull", 100, {
    "slap": 1,
    "punch": 5,
    "kick": 10
}, "assets/bVelzHO.png");

let _items = []

export default class GameService {
    constructor() {

    }

    get Target() {
        // return {
        //   name: _target.name,
        //   health: _target.health,
        //   attacks: _target.attacks,
        //   items: _target.items,
        //   hits: _target.hits,
        //   getTemplate: _target.getTemplate
        // }
        return _target;
    }

    slap() {
        if (_target.health > 0) {
            let damage = 1 //+ addMods();
            _target.health -= damage;
            _target.hits++;
            
        }
    }
   
    punch() {
        if (_target.health > 0) {
            let damage = 5 //+ addMods();
            _target.health -= damage;
            _target.hits++;
            document.getElementById("message").innerText = `@ Punch! 5 HP of damage to the ${_target.name}!`;
        }
    }
    kick() {
        if (_target.health > 0) {
            let damage = 10 //+ addMods();
            _target.health -= damage;
            _target.hits++;
            document.getElementById("message").innerText = `@ Kick! 10 HP of damage to the ${_target.name}!`;
        }
    }

    flash() {
        //create flash item
        _items.push(newItem);
    }

    reset() {
        _target.health = 100;
        _target.name = "Big Bull";
        _target.hits = 0;
        // _target.items.pop(_target.items.flash);
        // _target.items.pop(_target.items.freeze);
        // _target.items.pop(_target.items.thunder);
        document.getElementById("message").innerText = `@ You encountered the ${_target.name}.`;
        document.getElementById("modifier").innerText = `(No special active)`;
        // modifierActivated = false;
        // enemyDefeated = false;

    }

    //   addItemToTarget(itemIndex) {
    //     let targetItem = _items[itemIndex];
    //     _target.items.push(targetItem);
    //   }

    //   attackTarget(attackName) {
    //     let attackDamage = _target.attacks[attackName];
    //     _target.health -= attackDamage;
    //     _target.hits++;
    //   }

}