import { Color, Border, Hair } from "./dna-alleles.js";
import { Element } from "./element.js";
import insertFaces from "./face-create.js";
import { og, genTwo, genThree, genFour } from "./face-create.js";

const colorDom = new Color("brown", "brown");
const colorRec = new Color("blue", "blue");

const borderDom = new Border("round", "round");
const borderRec = new Border("square", "square");

const hairDom = new Hair("black", "black");
const hairRec = new Hair("brown", "brown")


// generate OG generation
const adam = new Element("Adam", colorDom, borderDom, hairDom);
const eve = new Element("Eve", colorRec, borderRec, hairRec);

// adam.checkDna();
// eve.checkDna();

function generateNumber() {
    return Math.floor((Math.random() * 2) + 1);
};

function generateEyeMutationSlot1() {
    return Math.floor((Math.random() * 10) + 1);
;}
function generateEyeMutationSlot2() {
    return Math.floor((Math.random() * 10) + 1);
;}

function generateHairMutationSlot1() {
    return Math.floor((Math.random() * 10) + 1);
;}
function generateHairMutationSlot2() {
    return Math.floor((Math.random() * 10) + 1);
;}

export function generateColorSlots(parent1, parent2) {
    
    const colorChance1 = generateNumber();
    let colorSlot1 = colorChance1 === 1 ? parent1.colorDna.slot1 : parent1.colorDna.slot2;

    if (generateEyeMutationSlot1() === 10) {colorSlot1 = "green"};

    const colorChance2 = generateNumber();
    let colorSlot2 = colorChance2 === 1 ? parent2.colorDna.slot1 : parent2.colorDna.slot2

    if (generateEyeMutationSlot2() === 10) {colorSlot2 = "green"};

    return new Color(colorSlot1, colorSlot2)
};

function generateBorderSlots(parent1, parent2) {
    
    const borderChance1 = generateNumber();
    const borderSlot1 = borderChance1 === 1 ? parent2.borderDna.slot1 : parent2.borderDna.slot2

    const borderChance2 = generateNumber();
    const borderSlot2 = borderChance2 === 1 ? parent1.borderDna.slot1 : parent1.borderDna.slot2

    return new Border(borderSlot1, borderSlot2)
};

function generateHairSlots(parent1, parent2) {
    const hairChance1 = generateNumber();
    let hairSlot1 = hairChance1 === 1 ? parent1.hairDna.slot1 : parent1.hairDna.slot2;

    if (generateHairMutationSlot1() === 10) {hairSlot1 = "blonde"};

    const hairChance2 = generateNumber();
    let hairSlot2 = hairChance2 === 1 ? parent2.hairDna.slot1 : parent2.hairDna.slot2

    if (generateHairMutationSlot2() === 10) {hairSlot2 = "blonde"};

    return new Hair(hairSlot1, hairSlot2)
};


// generate first true generation
const tim = new Element("Tim", generateColorSlots(adam, eve), generateBorderSlots(adam, eve), generateHairSlots(adam, eve));
const eric = new Element("Eric", generateColorSlots(adam, eve), generateBorderSlots(adam, eve), generateHairSlots(adam, eve));


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


// function insertChild(element) {
//     const currentItem = document.querySelector(`.${element.name}`);
//     // color check
//     if (element.colorDna.slot1 === "green" && element.colorDna.slot2 === "green") {
//         currentItem.classList.add("color-special")
//     }
//     else if (element.colorDna.slot1 === element.colorDna.domColor || element.colorDna.slot2 === element.colorDna.domColor) {
//     currentItem.classList.add("color-dom")
//     }
//     else {
//         currentItem.classList.add("color-rec")
//     }
//     // border check
//     if (element.borderDna.slot1 === element.borderDna.domBorder || element.borderDna.slot2 === element.borderDna.domBorder) {
//         return

//         // probably need to add the border-dom here since they start as squa/res
//         //
//         //
//         //
//         //
//     }
//     else {
//         currentItem.classList.add("border-rec")
//     }
// };


// first true generation
const diarrhea = new Element("diarrhea", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);
const poopy = new Element("poopy", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);

const asshat = new Element("asshat", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);
const farquar = new Element("farquar", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);

const firstGens = [diarrhea, poopy, asshat, farquar];

// const firstUl = document.getElementById("g1-ul-1")
// const firstUl2 = document.getElementById("g1-ul-2")
// end

// second generation
const dookie = new Element("dookie", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy), generateHairSlots(diarrhea, poopy), diarrhea, poopy);
const pupcake = new Element("pupcake", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy), generateHairSlots(diarrhea, poopy), diarrhea, poopy);
const sasquatch = new Element("sasquatch", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy), generateHairSlots(diarrhea, poopy), diarrhea, poopy);
const titsmcgee = new Element("titsmcgee", generateColorSlots(diarrhea, poopy), generateBorderSlots(diarrhea, poopy), generateHairSlots(diarrhea, poopy), diarrhea, poopy);
const craphole = new Element("craphole", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar), generateHairSlots(asshat, farquar), asshat, farquar);
const weener = new Element("weener", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar), generateHairSlots(asshat, farquar), asshat, farquar);
const buttstreaks = new Element("buttstreaks", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar), generateHairSlots(asshat, farquar), asshat, farquar);
const fartty = new Element("fartty", generateColorSlots(asshat, farquar), generateBorderSlots(asshat, farquar), generateHairSlots(asshat, farquar), asshat, farquar);

const secondGens = [dookie, pupcake, sasquatch, titsmcgee, craphole, weener, buttstreaks, fartty];

// third generation
const a1 = new Element("a1", generateColorSlots(dookie, pupcake), generateBorderSlots(dookie, pupcake), generateHairSlots(dookie, pupcake), dookie, pupcake);
const a2 = new Element("a2", generateColorSlots(dookie, pupcake), generateBorderSlots(dookie, pupcake), generateHairSlots(dookie, pupcake), dookie, pupcake);
const a3 = new Element("a3", generateColorSlots(dookie, pupcake), generateBorderSlots(dookie, pupcake), generateHairSlots(dookie, pupcake), dookie, pupcake);
const a4 = new Element("a4", generateColorSlots(sasquatch, titsmcgee), generateBorderSlots(sasquatch, titsmcgee), generateHairSlots(sasquatch, titsmcgee), sasquatch, titsmcgee);
const a5 = new Element("a5", generateColorSlots(sasquatch, titsmcgee), generateBorderSlots(sasquatch, titsmcgee), generateHairSlots(sasquatch, titsmcgee), sasquatch, titsmcgee);
const a6 = new Element("a6", generateColorSlots(sasquatch, titsmcgee), generateBorderSlots(sasquatch, titsmcgee), generateHairSlots(sasquatch, titsmcgee), sasquatch, titsmcgee);
const a7 = new Element("a7", generateColorSlots(craphole, weener), generateBorderSlots(craphole, weener), generateHairSlots(craphole, weener), craphole, weener);
const a8 = new Element("a8", generateColorSlots(craphole, weener), generateBorderSlots(craphole, weener), generateHairSlots(craphole, weener), craphole, weener);
const a9 = new Element("a9", generateColorSlots(craphole, weener), generateBorderSlots(craphole, weener), generateHairSlots(craphole, weener), craphole, weener);
const a10 = new Element("a10", generateColorSlots(buttstreaks, fartty), generateBorderSlots(buttstreaks, fartty), generateHairSlots(buttstreaks, fartty), buttstreaks, fartty);
const a11 = new Element("a11", generateColorSlots(buttstreaks, fartty), generateBorderSlots(buttstreaks, fartty), generateHairSlots(buttstreaks, fartty), buttstreaks, fartty);
const a12 = new Element("a12", generateColorSlots(buttstreaks, fartty), generateBorderSlots(buttstreaks, fartty), generateHairSlots(buttstreaks, fartty), buttstreaks, fartty);

const thirdGens = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];

const b1 = new Element("b1", generateColorSlots(a1, a2), generateBorderSlots(a1, a2), generateHairSlots(a1, a2), a1, a2);
const b2 = new Element("b2", generateColorSlots(a1, a2), generateBorderSlots(a1, a2), generateHairSlots(a1, a2), a1, a2);
const b3 = new Element("b3", generateColorSlots(a3, a4), generateBorderSlots(a3, a4), generateHairSlots(a3, a4), a3, a4);
const b4 = new Element("b4", generateColorSlots(a3, a4), generateBorderSlots(a3, a4), generateHairSlots(a3, a4), a3, a4);
const b5 = new Element("b5", generateColorSlots(a5, a6), generateBorderSlots(a5, a6), generateHairSlots(a5, a6), a5, a6);
const b6 = new Element("b6", generateColorSlots(a5, a6), generateBorderSlots(a5, a6), generateHairSlots(a5, a6), a5, a6);
const b7 = new Element("b7", generateColorSlots(a7, a8), generateBorderSlots(a7, a8), generateHairSlots(a7, a8), a7, a8);
const b8 = new Element("b8", generateColorSlots(a7, a8), generateBorderSlots(a7, a8), generateHairSlots(a7, a8), a7, a8);
const b9 = new Element("b9", generateColorSlots(a9, a10), generateBorderSlots(a9, a10), generateHairSlots(a9, a10), a9, a10);
const b10 = new Element("b10", generateColorSlots(a9, a10), generateBorderSlots(a9, a10), generateHairSlots(a9, a10), a9, a10);
const b11 = new Element("b11", generateColorSlots(a11, a12), generateBorderSlots(a11, a12), generateHairSlots(a11, a12), a11, a12);
const b12 = new Element("b12", generateColorSlots(a11, a12), generateBorderSlots(a11, a12), generateHairSlots(a11, a12), a11, a12);

const fourthGens = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];
// 
// const secondUl = document.getElementById("g2-ul-1")
// const secondUl2 = document.getElementById("g2-ul-2")
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
firstGens.forEach((child, index) => {
    insertFaces(child, og);

    // magically adds a spacer element after 
    if ((index + 1) % 2 === 0) {
        const faceContainer = document.querySelector(`.${child.name}-container`);
        faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
    }
});

// runs face gen for second generation
secondGens.forEach((child, index) => {
    insertFaces(child, genTwo)

    // magically adds a spacer element after 
    if ((index + 1) % 2 === 0) {
        const faceContainer = document.querySelector(`.${child.name}-container`);
        faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
    }
});

// runs face gen for third generation
thirdGens.forEach((child, index) => {
    insertFaces(child, genThree)

    // magically adds a spacer element after 
    if ((index + 1) % 3 === 0) {
        const faceContainer = document.querySelector(`.${child.name}-container`);
        faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
    }
});

// runs face gen for fourth generation
fourthGens.forEach((child, index) => {
    insertFaces(child, genFour)

    // magically adds a spacer element after 
    if ((index + 1) % 2 === 0) {
        const faceContainer = document.querySelector(`.${child.name}-container`);
        faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
    }
});