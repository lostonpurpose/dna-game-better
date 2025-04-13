import { Color } from "./dna-alleles.js";
import { Element } from "./element.js";

const colorDom = new Color("blue", "blue")
const colorRec = new Color("yellow", "yellow")



const adam = new Element("Adam", colorDom);
const eve = new Element("Eve", colorRec);

adam.checkDna();
eve.checkDna();

function generateNumber() {
    return Math.floor((Math.random() * 2) + 1);
};

function generateSlots(parent1, parent2) {
    
    const bioChance1 = generateNumber();
    console.log(bioChance1);
    const slot1 = bioChance1 === 1 ? parent1.colorDna.slot1 : parent1.colorDna.slot2
    
    const bioChance2 = generateNumber();
    console.log(bioChance2);
    const slot2 = bioChance2 === 1 ? parent2.colorDna.slot1 : parent2.colorDna.slot2
    return new Color(slot1, slot2)
};


const abel = new Element("Abel", generateSlots(adam, eve))
const leia = new Element("Abel", generateSlots(adam, eve))


abel.checkDna();
leia.checkDna();

const turdBoy = new Element("Turd Boy", generateSlots(abel, leia));

turdBoy.checkDna();