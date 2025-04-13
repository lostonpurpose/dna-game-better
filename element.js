import { Dna } from "./dna";
import { Color } from "./dna-alleles";

export class Element(name, slot1, slot2, active) {
    this.name = name;
    this.slot1 = slot1;
    this.slot2 = slot2;
    this.active = active;

    setActive() {
        if ( slot1 === Color.dom || slot2 === Color.dom ) {
            return active = Color.dom
        }
        else {
            return active = Color.rec
        }
    }

    checkDna() {
        console.log(`${this.name} ...`)
    }
}