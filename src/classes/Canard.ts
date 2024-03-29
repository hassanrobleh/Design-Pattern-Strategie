import { Cancan } from './Cancan';
import { VolerAvecDesAiles } from './VolerAvecDesAiles';

export abstract class Canard {

    comportementVol: ComportementVol;
    comportementCancan: ComportementCancan;

    constructor() {
        this.comportementVol = new VolerAvecDesAiles();
        this.comportementCancan = new Cancan();
    }

    // constructor(comportementVol: ComportementVol, comportementCancan: ComportementCancan) {
    //     this.comportementVol = comportementVol;
    //     this.comportementCancan = comportementCancan;
    // }

    abstract afficher() : string;

    effectuerVol(): string {
        return this.comportementVol.voler();
    }

    effectuerCancan(): string {
        return this.comportementCancan.cancaner();
    }

    setComportementVol(comportementVol: ComportementVol, ) {
        this.comportementVol = comportementVol;
    }

    setComportementCancan(comportementCancan : ComportementCancan) {
        this.comportementCancan = comportementCancan
    }

    nager(): string {
        return "Tous les canards flottent, même les leurres ! ";
    }
}