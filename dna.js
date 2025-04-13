export class Dna {
    constructor(slot1, slot2) {
        this.slot1 = slot1;
        this.slot2 = slot2;
    }
}


// for color need rec and dom, bg same
// also need element that contains Dna, 2 versions
// for dna as parent just have rec, dom
// then color use super (rec, dom) and color is child class
// then, when creating new element it receives color from 
// a color object (another element's object), no 2 elements
// when creating new have to reference the 2 parent elements
// and during creation of new element do logic for receiving
// half from each parent
// hmm, having rec and dom doesn't make sense if you have 2 rec,
// so rename to slot1 and slot2
// then use logic in contructor to determine "active"
// so if slot1 or slot2 === dom then active = dom
// else active = rec
// no no no, Color just has rec, dom, and name
// element contains the 2 slots
// active is also an element variable