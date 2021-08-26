import { VolerAvecDesAiles } from './VolerAvecDesAiles';
import { Cancan } from './Cancan';
import { Canard } from "./Canard";

export class Colvert extends Canard {

    constructor() {
        super();

        // this.comportementCancan = new Cancan();
        this.comportementVol = new VolerAvecDesAiles();
        
    }
    

    afficher(): string {
        return "Je suis un vrai Colvert";
    }
}