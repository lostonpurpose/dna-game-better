export class Dna {
    constructor(rec, dom) {
        this.rec = rec;
        this.dom = dom;
    }
}


for color need rec and dom, bg same
also need element that contains Dna, 2 versions
for dna as parent just have rec, dom
then color use super (rec, dom) and color is child class
then, when creating new element it receives color from 
a color object (another element's object), no 2 elements
when creating new have to reference the 2 parent elements
and during creation of new element do logic for receiving
half from each parent
