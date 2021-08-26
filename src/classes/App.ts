import { PropulsionAReaction } from './PropulsionAReaction';
import { PrototypeCanard } from './PrototypeCanard';
import { Colvert } from './Colvert';

export class App {
    static main() {
        let result = "";
        let colvert = new Colvert;
        result += colvert.effectuerCancan();
        result += colvert.effectuerVol();
        return result;

    }

    static main1() {
        let propo = new PrototypeCanard();
        return propo.effectuerVol();

    }

    static main2() {
        let propo = new PrototypeCanard();
        propo.setComportementVol(new PropulsionAReaction());
        return propo.effectuerVol();
    }
}

// const app = new App();

// app.main();