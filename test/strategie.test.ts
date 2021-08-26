import { App } from './../src/classes/App';

describe('Stratégie test', () => {
    it("'should be return Cancane et Je vole !!!", () => {
        // let app = new App();
        // let result = app.main();
        expect(App.main()).toBe("Cancane et Je vole !!!");
    });

    it("'should be return Je vole !!!", () => {
        // let app = new App();
        // let result = app.main();
        expect(App.main()).toBe("Je vole !!!");
    })
})
