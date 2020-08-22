const assert = require('assert');
const Translate = require("..")

const ts = new Translate()

describe("Verify if its gets up and check for expected errors", () => {
    it('Verify that asks for the route', () => {
        assert.throws(() => {
            ts.init()
        })
    });



})