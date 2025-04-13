import { Color } from "./dna-alleles.js";
import { Border } from "./dna-alleles.js";
import { Element } from "./element.js";

const colorDom = new Color("blue", "blue");
const colorRec = new Color("yellow", "yellow");

const borderDom = new Border("noBorder", "noBorder");
const borderRec = new Border("Border", "Border");



const adam = new Element("Adam", colorDom, borderDom);
const eve = new Element("Eve", colorRec, borderRec);

// adam.checkDna();
// eve.checkDna();

function generateNumber() {
    return Math.floor((Math.random() * 2) + 1);
};

function generateMutation() {
    return Math.floor((Math.random() * 10) + 1);
;}

function generateColorSlots(parent1, parent2) {
    
    const colorChance1 = generateNumber();
    let colorSlot1 = colorChance1 === 1 ? parent1.colorDna.slot1 : parent1.colorDna.slot2;

    if (generateMutation() === 10) {colorSlot1 = "green"};

    const colorChance2 = generateNumber();
    let colorSlot2 = colorChance2 === 1 ? parent2.colorDna.slot1 : parent2.colorDna.slot2

    if (generateMutation() === 10) {colorSlot2 = "green"};

    return new Color(colorSlot1, colorSlot2)
};

function generateBorderSlots(parent1, parent2) {
    
    const borderChance1 = generateNumber();
    const borderSlot1 = borderChance1 === 1 ? parent2.borderDna.slot1 : parent2.borderDna.slot2

    const borderChance2 = generateNumber();
    const borderSlot2 = borderChance2 === 1 ? parent1.borderDna.slot1 : parent1.borderDna.slot2

    return new Border(borderSlot1, borderSlot2)
};



const abel = new Element("Abel", generateColorSlots(adam, eve), generateBorderSlots(adam, eve));
const leia = new Element("Abel", generateColorSlots(adam, eve), generateBorderSlots(adam, eve));


// abel.checkDna();
// leia.checkDna();

const turdBoy = new Element("Turd Boy", generateColorSlots(abel, leia), generateBorderSlots(abel, leia));

turdBoy.checkDna();

const numberOne = document.querySelector(".first-true-child");


function insertChild(child) {
    numberOne.innerText = child.name;

    // color check
    if (child.colorDna.slot1 === "green" && child.colorDna.slot2 === "green") {
        numberOne.classList.add("color-special")
    }
    else if (child.colorDna.slot1 === child.colorDna.domColor || child.colorDna.slot2 === child.colorDna.domColor) {
    numberOne.classList.add("color-dom")
    }
    else {
        numberOne.classList.add("color-rec")
    }
    // border check
    if (child.borderDna.slot1 === child.borderDna.domBorder || child.borderDna.slot2 === child.borderDna.domBorder) {
        return
    }
    else {
        numberOne.classList.add("border-rec")
    }
}

insertChild(turdBoy);