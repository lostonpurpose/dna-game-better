import { Dna } from "./dna";

export class Color extends Dna {
    constructor(rec, dom, type) {
        super(rec, dom);
        this.name = type;
    }

}

