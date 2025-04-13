import { Dna } from './dna.js';  // Import Dna class

export class Color extends Dna {

    constructor(slot1, slot2, domColor) {
        super(slot1, slot2);  // Call Dna's constructor explicitly
        this.domColor = "blue";
    }
}
