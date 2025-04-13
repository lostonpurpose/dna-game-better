function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Element {
    constructor(name, colorDna, borderDna) {
        this.name = name;
        this.colorDna = colorDna;
        this.borderDna = borderDna;
    }



    checkDna() {
        console.log(`${this.name}'s color DNA alleles are ${capitalize(this.colorDna.slot1)} and ${capitalize(this.colorDna.slot2)}`)
        console.log(`Their border DNA alleles are ${capitalize(this.borderDna.slot1)} and ${capitalize(this.borderDna.slot2)}`)

    }
}