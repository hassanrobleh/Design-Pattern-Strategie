import { PropulsionAReaction } from './PropulsionAReaction';
import { PrototypeCanard } from './PrototypeCanard';
import { Colvert } from './Colvert';

export class App {
    main() {
        const colvert = new Colvert;
        return colvert.effectuerVol();
        // console.log(colvert.afficher())
        
        // colvert.effectuerCancan();
        // console.log('-----------------------------')
        
        // const propo = new PrototypeCanard();
        // propo.effectuerVol();
        // console.log('-----------------------------')

        // propo.setComportementVol(new PropulsionAReaction())
        // propo.effectuerVol()

    }
}

const app = new App();

app.main();