function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Element {
    constructor(name, colorDna, borderDna, hairDna, parent1 = null, parent2 = null) {
        this.name = name;
        this.colorDna = colorDna;
        this.borderDna = borderDna;
        this.hairDna = hairDna;
        this.parent1 = parent1;
        this.parent2 = parent2;
    }



    checkDna() {
        console.log(`${this.name}'s color DNA alleles are ${capitalize(this.colorDna.slot1)} and ${capitalize(this.colorDna.slot2)}`)
        console.log(`Their border DNA alleles are ${capitalize(this.borderDna.slot1)} and ${capitalize(this.borderDna.slot2)}`)

    }
}