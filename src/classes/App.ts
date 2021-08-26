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
        // console.log('-----------------------------')
        
        // const propo = new PrototypeCanard();
        // propo.effectuerVol();
        // console.log('-----------------------------')

        // propo.setComportementVol(new PropulsionAReaction())
        // propo.effectuerVol()

    }

    main1() {

    }
}

// const app = new App();

// app.main();