import { Cancan } from './Cancan';
import { NePasVoler } from './NePasVoler';
import { Canard } from "./Canard";

export class PrototypeCanard extends Canard {

    constructor() {
        super();

        this.comportementVol = new NePasVoler();
        this.comportementCancan = new Cancan();
        
    }
    

    afficher() {
        console.log("Je suis un Prototype de Canard");
    }
}