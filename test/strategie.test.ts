import { App } from './../src/classes/App';

describe('Stratégie test', () => {
    it("'should be return Je vole !!!", () => {
        let app = new App();
        let result = app.main();
        expect(result).toBe("Je vole !!!");
    })
})
