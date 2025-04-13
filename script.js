import { Color } from "./dna-alleles.js";
import { Element } from "./element.js";

const colorDom = new Color("blue", "blue", "color")
const colorRec = new Color("yellow", "yellow", "color")



const adam = new Element("Adam", colorDom);
const eve = new Element("Eve", colorRec);

adam.checkDna();