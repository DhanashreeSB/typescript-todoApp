import { calculateSquare } from './calculateSquare';

describe("Test calculateSquare",()=>{
    test("squares 2*2 to 4",()=>{
        expect(calculateSquare(2)).toStrictEqual(4);
    })
})