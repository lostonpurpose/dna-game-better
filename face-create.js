// creating faces func




// this creates the first two for now
export default function insertFaces(child) {
    const og = document.querySelector(".the-og");
    og.insertAdjacentText("beforeend", child.name);


    // creates new div

    og.insertAdjacentHTML("beforeend", `<div class="${child.name}-container"></div>`);
    const headContainer = document.querySelector(`.${child.name}-container`)


    // creates head
    headContainer.insertAdjacentHTML("beforeend", `<div class="${child.name}"></div>`);
    const newFace = document.querySelector(`.${child.name}`);

    // border / head-shape check
    if (child.borderDna.slot1 === child.borderDna.domBorder || child.borderDna.slot2 === child.borderDna.domBorder) {
        newFace.style.cssText = `height: 100px; 
        width: 100px;
        margin-top: 12px;
        margin-bottom: 12px;
        border: 2px solid black;
        border-radius: 50%;
        position: relative;`
    }
    else {
        newFace.style.cssText = `height: 100px; 
        width: 100px;
        margin-top: 12px;
        margin-bottom: 12px;
        border: 2px solid black;
        border-radius: 30px;
        position: relative;`
    }

    // creates eyes
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye1"></div>`);
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye2"></div>`);

    const eye1 = document.querySelector(`.${child.name}-eye1`);
    const eye2 = document.querySelector(`.${child.name}-eye2`);

    eye1.style.cssText = `height: 20px;
    width: 20px;
    margin-top: 35px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 20px;`

    eye2.style.cssText = `height: 20px;
    width: 20px;
    margin-top: 35px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 58px;`

    // creates pupils
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-pupil1"></div>`);
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-pupil2"></div>`);
    const pupil1 = document.querySelector(`.${child.name}-pupil1`);
    const pupil2 = document.querySelector(`.${child.name}-pupil2`);

    pupil1.style.cssText = `height: 8px;
    width: 8px;
    margin-top: 41px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 26px;
    background-color: black`

    pupil2.style.cssText = `height: 8px;
    width: 8px;
    margin-top: 41px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 65px;
    background-color: black`



    // creates mouth
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-mouth"></div>`);
    const mouth = document.querySelector(`.${child.name}-mouth`)
    mouth.style.cssText = `height: 2px;
    width: 20px;
    margin-top: 74px;
    margin-bottom: 12px;
    border: 1px solid black;
    background-color: black;
    position: absolute;
    margin-left: 39px;`

    // color check
    if (child.colorDna.slot1 === "green" && child.colorDna.slot2 === "green") {
        headContainer.classList.add("color-special");
        eye1.style.backgroundColor = 'green';
        eye2.style.backgroundColor = 'green';
    }
    else if (child.colorDna.slot1 === child.colorDna.domColor || child.colorDna.slot2 === child.colorDna.domColor) {
        headContainer.classList.add("color-dom");
        eye1.style.backgroundColor = 'brown';
        eye2.style.backgroundColor = 'brown';
    }
    else {
        headContainer.classList.add("color-rec");
        eye1.style.backgroundColor = 'lightblue';
        eye2.style.backgroundColor = 'lightblue';
    }

    
};