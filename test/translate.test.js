const assert = require('assert');
const Translate = require("..")
const ts = new Translate()
ts.translationPath = "./data"
ts.init()
describe("Translate with a few different options", () => {
    it('Verify its initialized', () => {
        assert.notEqual(ts, undefined)
    });
    it("Verify it get the files", () => {
        assert.equal(ts.files.length, 2)
    });
    it("Verify if it translate to english", () => {
        assert.equal(ts.translate("en", "second_section.button_send"), "Send")
    });
    it("Verify if it translate to spanish", () => {
        assert.equal(ts.translate("es", "second_section.button_send"), "Enviar")
    });
    it("Verify it outputs the default string", () => {
        assert.equal(ts.translate("es", "second_section.button_sen", "default"), "default")
    });


})