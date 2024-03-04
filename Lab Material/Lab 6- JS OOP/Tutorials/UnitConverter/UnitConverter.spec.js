import { describe, it } from "mocha";
import { expect } from "chai";

import UnitConverter from "./UnitConverter.js";
const unitConverter = new UnitConverter();


describe("UnitConverter", () => {

    describe("Measurements", () => {
        it("meterToInch should convert from meter to inches", () => {
            expect(unitConverter.meterToInch(1)).to.equal(39.3701);
        })

        it("kgToOunce -> expect 1 kg to be 35.27 ", () => {
            expect(unitConverter.kgToOunce(1)).to.equal(35.274);
        })
    })


    describe("Money", () => {
        it("usdToQAR -> expect 100 USD to be 364", () => {
            expect(unitConverter.usdToQAR(100)).to.equal(364);
        })
    })
})