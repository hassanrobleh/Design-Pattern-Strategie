import { App } from './../src/classes/App';

describe('Stratégie test', () => {
    it("should be return Cancane et Je vole !!!", () => {
        // let app = new App();
        // let result = app.main();
        expect(App.main()).toBe("Cancane et Je vole !!!");
    });

    it("should be return Je ne sais pas voler !!!", () => {
        // let app = new App();
        // let result = app.main();
        expect(App.main1()).toBe("Je ne sais pas voler !!!");
    });

    it("should be return Je vole avec un réaction !", () => {
        // let app = new App();
        // let result = app.main();
        expect(App.main2()).toBe("Je vole avec un réaction !");
    });
})
