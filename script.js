import { Color, Border, Hair } from "./dna-alleles.js";
import { Element } from "./element.js";
import insertFaces from "./face-create.js";
import { og, genTwo, genThree, genFour, timEric } from "./face-create.js";

const colorDom = new Color("brown", "brown");
const colorRec = new Color("blue", "blue");

const borderDom = new Border("round", "round");
const borderRec = new Border("square", "square");

const hairDom = new Hair("black", "black");
const hairRec = new Hair("brown", "brown");

// Buttons
const genOneButton = document.querySelector(".gen-one-btn");
const genTwoButton = document.querySelector(".gen-two-btn");
const genThreeButton = document.querySelector(".gen-three-btn");
const genFourButton = document.querySelector(".gen-four-btn");
const autoGen = document.querySelector(".auto-gen");
genTwoButton.disabled = true;
genThreeButton.disabled = true;
genFourButton.disabled = true;


// generate OG generation
const adam = new Element("Adam", colorDom, borderDom, hairDom);
const eve = new Element("Eve", colorRec, borderRec, hairRec);

// adam.checkDna();
// eve.checkDna();

// generate random numbers to determine alleles and mutations
function generateNumberSlot1() {
    return Math.floor((Math.random() * 2) + 1);
};
function generateNumberSlot2() {
    return Math.floor((Math.random() * 2) + 1);
};

function generateEyeMutationSlot1() {
    const check = Math.floor((Math.random() * 10) + 1);
    console.log(check);
    return check
};
function generateEyeMutationSlot2() {
    const check = Math.floor((Math.random() * 10) + 1);
    console.log(check);
    return check
};

function generateHairMutationSlot1() {
    const check = Math.floor((Math.random() * 10) + 1);
    console.log(check);
    return check
;}
function generateHairMutationSlot2() {
    const check = Math.floor((Math.random() * 10) + 1);
    console.log(check);
    return check
;}

function generateSuperEyeMutationSlot1() {
    const check = Math.floor((Math.random() * 25) + 1);
    console.log(check);
    return check
;}
function generateSuperEyeMutationSlot2() {
    const check = Math.floor((Math.random() * 25) + 1);
    console.log(check);
    return check
;}

function generateSuperHairMutationSlot1() {
    const check = Math.floor((Math.random() * 25) + 1);
    console.log(check);
    return check
;}
function generateSuperHairMutationSlot2() {
    const check = Math.floor((Math.random() * 25) + 1);
    console.log(check);
    return check
;}
// end random generation

function generateColorSlots(parent1, parent2) {
    const colorChance1 = generateNumberSlot1();
    let colorSlot1 = colorChance1 === 1 ? parent1.colorDna.slot1 : parent1.colorDna.slot2;
    const mutationSlot1 = generateEyeMutationSlot1(); // Check mutation value for Slot 1
    console.log('Before mutation Slot 1:', colorSlot1, 'Mutation check:', mutationSlot1);
    if (mutationSlot1 === 10) { colorSlot1 = "green"; }
    const superMutation1 = generateSuperEyeMutationSlot1(); // check for super mutation
    if (superMutation1 === 25) { colorSlot1 = "pink"; }

    const colorChance2 = generateNumberSlot2();
    let colorSlot2 = colorChance2 === 1 ? parent2.colorDna.slot1 : parent2.colorDna.slot2;
    const mutationSlot2 = generateEyeMutationSlot2(); // Check mutation value for Slot 2
    console.log('Before mutation Slot 2:', colorSlot2, 'Mutation check:', mutationSlot2);
    if (mutationSlot2 === 10) { colorSlot2 = "green"; }
    const superMutation2 = generateSuperEyeMutationSlot2(); // check for super mutation
    if (superMutation2 === 25) { colorSlot2 = "pink"; }

    console.log('After mutation:', colorSlot1, colorSlot2); // Final state of both slots
    return new Color(colorSlot1, colorSlot2);
};

function generateBorderSlots(parent1, parent2) {
    
    const borderChance1 = generateNumberSlot1();
    const borderSlot1 = borderChance1 === 1 ? parent2.borderDna.slot1 : parent2.borderDna.slot2

    const borderChance2 = generateNumberSlot2();
    const borderSlot2 = borderChance2 === 1 ? parent1.borderDna.slot1 : parent1.borderDna.slot2

    return new Border(borderSlot1, borderSlot2)
};

function generateHairSlots(parent1, parent2) {
    const hairChance1 = generateNumberSlot1();
    let hairSlot1 = hairChance1 === 1 ? parent1.hairDna.slot1 : parent1.hairDna.slot2;
    if (generateHairMutationSlot1() === 10) {hairSlot1 = "blonde"};
    if (generateSuperHairMutationSlot1() === 25) {hairSlot1 = "blue"};

    const hairChance2 = generateNumberSlot2();
    let hairSlot2 = hairChance2 === 1 ? parent2.hairDna.slot1 : parent2.hairDna.slot2
    if (generateHairMutationSlot2() === 10) {hairSlot2 = "blonde"};
    if (generateSuperHairMutationSlot2() === 25) {hairSlot2 = "blue"};
    return new Hair(hairSlot1, hairSlot2)
};


// generate first true generation
const tim = new Element("Tim", generateColorSlots(adam, eve), generateBorderSlots(adam, eve), generateHairSlots(adam, eve));
const eric = new Element("Eric", generateColorSlots(adam, eve), generateBorderSlots(adam, eve), generateHairSlots(adam, eve));

const grandfathers = [tim, eric];


// first true generation
const Billy = new Element("Billy", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);
const Sarah = new Element("Sarah", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);

const Cecil = new Element("Cecil", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);
const Angela = new Element("Angela", generateColorSlots(tim, eric), generateBorderSlots(tim, eric), generateHairSlots(tim, eric), tim, eric);

const firstGens = [Billy, Sarah, Cecil, Angela];

// second generation
const Clem = new Element("Clem", generateColorSlots(Billy, Sarah), generateBorderSlots(Billy, Sarah), generateHairSlots(Billy, Sarah), Billy, Sarah);
const Clara = new Element("Clara", generateColorSlots(Billy, Sarah), generateBorderSlots(Billy, Sarah), generateHairSlots(Billy, Sarah), Billy, Sarah);
const Herald = new Element("Herald", generateColorSlots(Billy, Sarah), generateBorderSlots(Billy, Sarah), generateHairSlots(Billy, Sarah), Billy, Sarah);
const Jenny = new Element("Jenny", generateColorSlots(Billy, Sarah), generateBorderSlots(Billy, Sarah), generateHairSlots(Billy, Sarah), Billy, Sarah);
const Ernest = new Element("Ernest", generateColorSlots(Cecil, Angela), generateBorderSlots(Cecil, Angela), generateHairSlots(Cecil, Angela), Cecil, Angela);
const Tania = new Element("Tania", generateColorSlots(Cecil, Angela), generateBorderSlots(Cecil, Angela), generateHairSlots(Cecil, Angela), Cecil, Angela);
const Xavier = new Element("Xavier", generateColorSlots(Cecil, Angela), generateBorderSlots(Cecil, Angela), generateHairSlots(Cecil, Angela), Cecil, Angela);
const Lara = new Element("Lara", generateColorSlots(Cecil, Angela), generateBorderSlots(Cecil, Angela), generateHairSlots(Cecil, Angela), Cecil, Angela);

const secondGens = [Clem, Clara, Herald, Jenny, Ernest, Tania, Xavier, Lara];

// third generation
const Boss = new Element("Boss", generateColorSlots(Clem, Clara), generateBorderSlots(Clem, Clara), generateHairSlots(Clem, Clara), Clem, Clara);
const Maddie = new Element("Maddie", generateColorSlots(Clem, Clara), generateBorderSlots(Clem, Clara), generateHairSlots(Clem, Clara), Clem, Clara);
const Hank = new Element("Hank", generateColorSlots(Clem, Clara), generateBorderSlots(Clem, Clara), generateHairSlots(Clem, Clara), Clem, Clara);
const Harriet = new Element("Harriet", generateColorSlots(Herald, Jenny), generateBorderSlots(Herald, Jenny), generateHairSlots(Herald, Jenny), Herald, Jenny);
const Nick = new Element("Nick", generateColorSlots(Herald, Jenny), generateBorderSlots(Herald, Jenny), generateHairSlots(Herald, Jenny), Herald, Jenny);
const Oprah = new Element("Oprah", generateColorSlots(Herald, Jenny), generateBorderSlots(Herald, Jenny), generateHairSlots(Herald, Jenny), Herald, Jenny);
const Nelson = new Element("Nelson", generateColorSlots(Ernest, Tania), generateBorderSlots(Ernest, Tania), generateHairSlots(Ernest, Tania), Ernest, Tania);
const Regina = new Element("Regina", generateColorSlots(Ernest, Tania), generateBorderSlots(Ernest, Tania), generateHairSlots(Ernest, Tania), Ernest, Tania);
const Marvin = new Element("Marvin", generateColorSlots(Ernest, Tania), generateBorderSlots(Ernest, Tania), generateHairSlots(Ernest, Tania), Ernest, Tania);
const Bertha = new Element("Bertha", generateColorSlots(Xavier, Lara), generateBorderSlots(Xavier, Lara), generateHairSlots(Xavier, Lara), Xavier, Lara);
const Mark = new Element("Mark", generateColorSlots(Xavier, Lara), generateBorderSlots(Xavier, Lara), generateHairSlots(Xavier, Lara), Xavier, Lara);
const Yvonne = new Element("Yvonne", generateColorSlots(Xavier, Lara), generateBorderSlots(Xavier, Lara), generateHairSlots(Xavier, Lara), Xavier, Lara);

const thirdGens = [Boss, Maddie, Hank, Harriet, Nick, Oprah, Nelson, Regina, Marvin, Bertha, Mark, Yvonne];

const Will = new Element("Will", generateColorSlots(Boss, Maddie), generateBorderSlots(Boss, Maddie), generateHairSlots(Boss, Maddie), Boss, Maddie);
const Ayaka = new Element("Ayaka", generateColorSlots(Boss, Maddie), generateBorderSlots(Boss, Maddie), generateHairSlots(Boss, Maddie), Boss, Maddie);
const Evan = new Element("Evan", generateColorSlots(Hank, Harriet), generateBorderSlots(Hank, Harriet), generateHairSlots(Hank, Harriet), Hank, Harriet);
const Amelie = new Element("Amelie", generateColorSlots(Hank, Harriet), generateBorderSlots(Hank, Harriet), generateHairSlots(Hank, Harriet), Hank, Harriet);
const Jarrett = new Element("Jarrett", generateColorSlots(Nick, Oprah), generateBorderSlots(Nick, Oprah), generateHairSlots(Nick, Oprah), Nick, Oprah);
const Daisy = new Element("Daisy", generateColorSlots(Nick, Oprah), generateBorderSlots(Nick, Oprah), generateHairSlots(Nick, Oprah), Nick, Oprah);
const Ty = new Element("Ty", generateColorSlots(Nelson, Regina), generateBorderSlots(Nelson, Regina), generateHairSlots(Nelson, Regina), Nelson, Regina);
const Millie = new Element("Millie", generateColorSlots(Nelson, Regina), generateBorderSlots(Nelson, Regina), generateHairSlots(Nelson, Regina), Nelson, Regina);
const Darius = new Element("Darius", generateColorSlots(Marvin, Bertha), generateBorderSlots(Marvin, Bertha), generateHairSlots(Marvin, Bertha), Marvin, Bertha);
const Chelsea = new Element("Chelsea", generateColorSlots(Marvin, Bertha), generateBorderSlots(Marvin, Bertha), generateHairSlots(Marvin, Bertha), Marvin, Bertha);
const Donovan = new Element("Donovan", generateColorSlots(Mark, Yvonne), generateBorderSlots(Mark, Yvonne), generateHairSlots(Mark, Yvonne), Mark, Yvonne);
const Leslie = new Element("Leslie", generateColorSlots(Mark, Yvonne), generateBorderSlots(Mark, Yvonne), generateHairSlots(Mark, Yvonne), Mark, Yvonne);

const fourthGens = [Will, Ayaka, Evan, Amelie, Jarrett, Daisy, Ty, Millie, Darius, Chelsea, Donovan, Leslie];



// runs face gen for tim and eric

grandfathers.forEach((child) => {
    insertFaces(child, timEric);
});

function firstGeneration() {

    // runs face gen for first generation
    firstGens.forEach((child, index) => {
        insertFaces(child, og);

        // magically adds a spacer element after 
        if ((index + 1) % 2 === 0) {
            const faceContainer = document.querySelector(`.${child.name}-container`);
            faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
        }
    });
    genOneButton.hidden = true;
    genTwoButton.disabled = false;
};

genOneButton.addEventListener('click', firstGeneration);

function secondGeneration() {

    // runs face gen for second generation
    secondGens.forEach((child, index) => {
        insertFaces(child, genTwo)

        // magically adds a spacer element after 
        if ((index + 1) % 2 === 0) {
            const faceContainer = document.querySelector(`.${child.name}-container`);
            faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
        }
    });
    genTwoButton.hidden = true;
    genThreeButton.disabled = false;
};

genTwoButton.addEventListener('click', secondGeneration);

function thirdGeneration() {

    // runs face gen for third generation
    thirdGens.forEach((child, index) => {
        insertFaces(child, genThree)

        // magically adds a spacer element after 
        if ((index + 1) % 3 === 0) {
            const faceContainer = document.querySelector(`.${child.name}-container`);
            faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
        }
    });
    genThreeButton.hidden = true;
    genFourButton.disabled = false;
};

genThreeButton.addEventListener('click', thirdGeneration);

function fourthGeneration() {

    // runs face gen for fourth generation
    fourthGens.forEach((child, index) => {
        insertFaces(child, genFour)

        // magically adds a spacer element after 
        if ((index + 1) % 2 === 0) {
            const faceContainer = document.querySelector(`.${child.name}-container`);
            faceContainer.insertAdjacentHTML("afterend", `<spacer></spacer>`);
        }
    });
    genFourButton.hidden = true;
};

genFourButton.addEventListener('click', fourthGeneration);

// auto gen all faces
function autoGenerate() {
    // Set a flag in sessionStorage before reload
    sessionStorage.setItem('runFunctions', 'true');
    location.reload();
}

// Check if the flag is set after reload
window.onload = function() {
    if (sessionStorage.getItem('runFunctions') === 'true') {
        sessionStorage.removeItem('runFunctions'); // Remove the flag
        firstGeneration();
        secondGeneration();
        thirdGeneration();
        fourthGeneration();
        genOneButton.hidden = true;
        genTwoButton.hidden = true;
        genThreeButton.hidden = true;
        genFourButton.hidden = true;
        autoGen.innerText = "Regenerate";
        // regen.hidden = false;
    }
};


autoGen.addEventListener('click', autoGenerate);

function regenerate() {
    location.reload();
};

// Displays # of mutations
let emutes = 0
fourthGens.forEach(child => {
    if (child.colorDna.slot1 === "green" || child.colorDna.slot2 === "green") {
        emutes += 1
    }
});
const eMutations = document.querySelector(".e-mutes");
eMutations.insertAdjacentText("beforeend", `${emutes}`);

let hmutes = 0
fourthGens.forEach(child => {
    if (child.hairDna.slot1 === "blonde" || child.hairDna.slot2 === "blonde") {
        hmutes += 1
    }
});
const hMutations = document.querySelector(".h-mutes");
hMutations.insertAdjacentText("beforeend", `${hmutes}`);