// creating faces func

export const og = document.querySelector(".gen-one");
export const genTwo = document.querySelector(".gen-two");
export const genThree = document.querySelector(".gen-three");
export const genFour = document.querySelector(".gen-four");
export const timEric = document.querySelector(".tim-eric");

// export const generations = [og, genTwo];

export default function insertFaces(child, generation) {

    // creates new div

    generation.insertAdjacentHTML("beforeend", `<div class="${child.name}-container"></div>`);
    const headContainer = document.querySelector(`.${child.name}-container`)

    // creates head
    headContainer.insertAdjacentHTML("beforeend", `<div class="${child.name}"></div>`);
    const newFace = headContainer.querySelector(`.${child.name}`);
    
    function toolTip() {
    // tooltip with DNA 
    // HTML structure for tooltip
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.style.display = 'none'; // Hidden by default
    document.body.appendChild(tooltip);

    // On hover, show tooltip
    newFace.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
        tooltip.innerHTML = `
        ${child.name !== "Tim" && child.name !== "Eric" ? 
        `Parents: ${child.parent1.name} and ${child.parent2.name}` : "Parents: Adam and Eve"}
        <br><br>Head Shape: ${child.borderDna.slot1}, ${child.borderDna.slot2}<br><br>Color: ${child.colorDna.slot1}, ${child.colorDna.slot2}<br><br>Hair: ${child.hairDna.slot1}, ${child.hairDna.slot2}`;
        const rect = newFace.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
    
        // place to the left, 5px gap
        tooltip.style.left = `${rect.left + (rect.width - tooltipRect.width + 35) / 2}px`;
        tooltip.style.top  = `${rect.top + window.scrollY - tooltipRect.height + 10}px`;
        tooltip.classList.add('show');
    });

    // On mouse leave, hide tooltip
    newFace.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 200); // Allow fade-out before hiding completely
        
    });
    // end tooltip
};

    if (child.name !== "tim" && child.name !== "eric") {
        toolTip();
    }

    // adds name for each face
    newFace.insertAdjacentHTML("afterend", `<p class="face-name">${child.name}</p>`);

    // border / head-shape check
    if (child.borderDna.slot1 === child.borderDna.domBorder || child.borderDna.slot2 === child.borderDna.domBorder) {
        newFace.style.cssText = `height: 100px; 
        width: 100px;
        margin: 12px 5px;
        border: 2px solid black;
        border-radius: 50%;
        position: relative;`
    }
    else {
        newFace.style.cssText = `height: 100px; 
        width: 100px;
        margin: 12px 5px;
        border: 2px solid black;
        border-radius: 50px 50px 30px 30px;
        position: relative;`
    }

    // creates eyes
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye1"></div>`);
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-eye2"></div>`);

    const eye1 = document.querySelector(`.${child.name}-eye1`);
    const eye2 = document.querySelector(`.${child.name}-eye2`);

    eye1.style.cssText = `height: 20px;
    width: 24px;
    margin-top: 35px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 20px;`

    eye2.style.cssText = `height: 20px;
    width: 24px;
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

    pupil1.style.cssText = `height: 6px;
    width: 6px;
    margin-top: 42px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 29px;
    background-color: black`

    pupil2.style.cssText = `height: 6px;
    width: 6px;
    margin-top: 42px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    margin-left: 67px;
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

    // creates hair
    newFace.insertAdjacentHTML("beforeend", `<div class="${child.name}-hair"></div>`);
    const hair = document.querySelector(`.${child.name}-hair`)
    hair.style.cssText = `width: 92px;
    height: 30px;
    margin-top: -5px;
    margin-bottom: 12px;
    border: 1px solid black;
    border-radius: 90px 90px 9px 9px;
    background-color: none;
    position: absolute;
    margin-left: 3px;`

    // color check
    if (child.colorDna.slot1 === "green" && child.colorDna.slot2 === "green") {
        headContainer.classList.add("color-special");
        eye1.style.backgroundColor = 'green';
        eye2.style.backgroundColor = 'green';
    }
    else if (child.colorDna.slot1 === child.colorDna.domColor || child.colorDna.slot2 === child.colorDna.domColor) {
        headContainer.classList.add("color-dom");
        eye1.style.backgroundColor = 'saddlebrown';
        eye2.style.backgroundColor = 'saddlebrown';
    }
    else {
        headContainer.classList.add("color-rec");
        eye1.style.backgroundColor = 'lightblue';
        eye2.style.backgroundColor = 'lightblue';
    }

    // hair check
    if (child.hairDna.slot1 === "blonde" && child.hairDna.slot2 === "blonde") {
        hair.style.backgroundColor = 'goldenrod';
    }
    else if (child.hairDna.slot1 === child.hairDna.domColor || child.hairDna.slot2 === child.hairDna.domColor) {
        hair.style.backgroundColor = "black";
    } 
    else {
        hair.style.backgroundColor = "saddlebrown";
    }
};