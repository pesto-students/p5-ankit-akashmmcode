const mathOperations = {
    addition: function (a, b) {
        return a + b;
    },

    subtraction: function (a, b) {
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b
    }
}

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.addition(1, 2)).toBe(3);
    });
})

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.subtraction(2, 2)).toBe(0);
    });
})

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.multiplication(1, 2)).toBe(2);
    });
})


