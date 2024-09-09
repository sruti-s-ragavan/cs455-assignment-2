import { multiply, power } from "../src/js/math.js";

describe('math.js', function(){
    it('multiply()', function(){
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(2, 0)).toEqual(0);
        expect(multiply(0, 2)).toEqual(0);
    }); 

    it('power()', function(){
        // expect(() => power(2, -2)).toThrowError("Negative power is not supported");
        expect(power(2, 3)).toEqual(8);
        expect(power(4, 0)).toEqual(1);
        expect(power(4, 1)).toEqual(4);
    }); 
});