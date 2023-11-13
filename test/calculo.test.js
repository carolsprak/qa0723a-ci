const sum = require("../src/calculo");

test('Realizar soma com números positivos' ,() => {
   expect(sum(2,2)).toBe(4);
   expect(sum(10000000000,2)).toBe(10000000002);
   expect(sum("a","b")).toBe("ab");
   expect(sum("a",1)).toBe("a1");
});


test('Realizar soma com número negativos' ,() => {
    expect(sum(-2,-2)).toBe(-4);
    expect(sum(-2,2)).toBe(0);
   expect(sum(-10000000000,-2)).toBe(-10000000002);
 });