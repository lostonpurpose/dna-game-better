function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Element {
    constructor(name, colorDna) {
        this.name = name;
        this.colorDna = colorDna;
    }



    checkDna() {
        console.log(`${this.name}'s color DNA alleles are ${capitalize(this.colorDna.slot1)} and ${capitalize(this.colorDna.slot2)}`)
    }
}