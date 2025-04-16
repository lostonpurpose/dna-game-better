import { Color, Border } from "./dna-alleles.js";
import { Element } from "./element.js";
import insertFaces from "./face-create.js";
import { og, genTwo } from "./face-create.js";

const colorDom = new Color("brown", "brown");
const colorRec = new Color("blue", "blue");

const borderDom = new Border("round", "round");
const borderRec = new Border("noRound", "noRound");


// generate OG generation
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


// generate first true generation
const tim = new Element("Tim", generateColorSlots(adam, eve), generateBorderSlots(adam, eve));
const eric = new Element("Eric", generateColorSlots(adam, eve), generateBorderSlots(adam, eve));


// tim.checkDna();
// eric.checkDna();

// const turdBoy = new Element("TurdBoy", generateColorSlots(tim, eric), generateBorderSlots(tim, eric));

// turdBoy.checkDna();

// const numberOne = document.querySelector(".first-true-child");

// this just creates Turd Boy, the original child
// function insertNumberOne(child) {
//     numberOne.innerText = child.name;

//     // creates head
//     numberOne.insertAdjacentHTML("afterend", `<div class="${child.name}"></div>`);

//     const facehuh = document.querySelector(`.${child.name}`);

//     // creates eyes
//     facehuh.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye1"></div>`);
//     facehuh.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye2"></div>`);

//     // creates mouth
//     facehuh.insertAdjacentHTML("beforeend", `<div class="${child.name}-mouth"></div>`);

//     const eye1 = document.querySelector(`.${child.name}-eye1`);
//     const eye2 = document.querySelector(`.${child.name}-eye2`);



//     // color check
//     if (child.colorDna.slot1 === "green" && child.colorDna.slot2 === "green") {
//         numberOne.classList.add("color-special");
//         eye1.style.backgroundColor = 'green';
//         eye2.style.backgroundColor = 'green';
//     }
//     else if (child.colorDna.slot1 === child.colorDna.domColor || child.colorDna.slot2 === child.colorDna.domColor) {
//         numberOne.classList.add("color-dom");
//         eye1.style.backgroundColor = 'brown';
//         eye2.style.backgroundColor = 'brown';
//     }
//     else {
//         numberOne.classList.add("color-rec");
//         eye1.style.backgroundColor = 'lightblue';
//         eye2.style.backgroundColor = 'lightblue';
//     }
//     // border check
//     if (child.borderDna.slot1 === child.borderDna.domBorder || child.borderDna.slot2 === child.borderDna.domBorder) {
//         return
//     }
//     else {
//         numberOne.classList.add("border-rec")
//     }
// };

// insertNumberOne(turdBoy);

// turd boy end


function insertChild(element) {
    const currentItem = document.querySelector(`.${element.name}`);
    // color check
    if (element.colorDna.slot1 === "green" && element.colorDna.slot2 === "green") {
        currentItem.classList.add("color-special")
    }
    else if (element.colorDna.slot1 === element.colorDna.domColor || element.colorDna.slot2 === element.colorDna.domColor) {
    currentItem.classList.add("color-dom")
    }
    else {
        currentItem.classList.add("color-rec")
    }
    // border check
    if (element.borderDna.slot1 === element.borderDna.domBorder || element.borderDna.slot2 === element.borderDna.domBorder) {
        return

        // probably need to add the border-dom here since they start as squa/res
        //
        //
        //
        //
    }
    else {
        currentItem.classList.add("border-rec")
    }
};


// first true generation
const diarrhea = new Element("diarrhea", generateColorSlots(tim, eric), generateBorderSlots(tim, eric));
const poopy = new Element("poopy", generateColorSlots(tim, eric), generateBorderSlots(tim, eric));

const asshat = new Element("asshat", generateColorSlots(tim, eric), generateBorderSlots(tim, eric));
const farquar = new Element("farquar", generateColorSlots(tim, eric), generateBorderSlots(tim, eric));

const firstGens = [diarrhea, poopy, asshat, farquar];

const firstUl = document.getElementById("g1-ul-1")
const firstUl2 = document.getElementById("g1-ul-2")
// end

// second generation
const dookie = new Element("dookie", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy));
const pupcake = new Element("pupcake", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy));
const sasquatch = new Element("sasquatch", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy));
const titsmcgee = new Element("titsmcgee", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy));
const craphole = new Element("craphole", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar));
const weener = new Element("weener", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar));
const buttstreaks = new Element("buttstreaks", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar));
const fartty = new Element("fartty", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar));

const secondGens = [dookie, pupcake, sasquatch, titsmcgee, craphole, weener, buttstreaks, fartty];

const secondUl = document.getElementById("g2-ul-1")
const secondUl2 = document.getElementById("g2-ul-2")
// end


// function to generate child elements
// these are just text
// function childGenerator(firstGens, firstGens2, ul1, ul2) {
    

//     firstGens.forEach(element => {
//         ul1.insertAdjacentHTML("beforeend", `<li class="${element.name}">${element.name}</li>`);
//         insertChild(element);
//     });
    
//     firstGens2.forEach(element => {
//         ul2.insertAdjacentHTML("beforeend", `<li class="${element.name}">${element.name}</li>`);
//         insertChild(element);
//     });
// };

// these are for the words only
// childGenerator(firstGens, firstGens2, firstUl, firstUl2);
// childGenerator(secondGens, secondGens2, secondUl, secondUl2)


// runs face gen for first generation
firstGens.forEach(child => {
    return insertFaces(child, og);
});

// runs face gen for second generation
secondGens.forEach(child => {
    return insertFaces(child, genTwo)
});

// runs face gen for second generation
thirdGens.forEach(child => {
    return insertFaces(child, genThree)
});