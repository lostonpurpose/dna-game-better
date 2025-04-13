export class Element {
    constructor(name, colorDna) {
        this.name = name;
        this.colorDna = colorDna;
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    checkDna() {
        console.log(`${this.name}'s color DNA alleles are ${this.colorDna.slot1.toUpperCase()} and ${this.colorDna.slot2}`)
    }
}