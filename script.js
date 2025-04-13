import { Color } from "./dna-alleles.js";
import { Element } from "./element.js";

const colorDom = new Color("blue", "blue", "color")
const colorRec = new Color("yellow", "yellow", "color")



const adam = new Element("Adam", colorDom);
const eve = new Element("Eve", colorRec);

adam.checkDna();
eve.checkDna();

function generateNumber() {
    let chance = Math.floor((Math.random() * 2) + 1);
    // console.log(chance);
};

generateNumber();

function generateSlots(parent1, parent2) {
    const bioChance1 = generateNumber();
    bioChance1 === 1 ? parent1.colorDna.slot1 : parent1.colorDna.slot2
    const bioChance2 = generateNumber();
    bioChance2 === 1 ? parent2.colorDna.slot1 : parent2.colorDna.slot2
};



const abel = new Element("Abel", generateSlots(adam, eve))

console.log(abel);