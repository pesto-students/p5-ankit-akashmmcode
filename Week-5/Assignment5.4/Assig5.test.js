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
    it('adding 1 + 2 should return 3', () => {
        expect(mathOperations.addition(1, 2)).toBe(3);
    });
    it('adding 1 + 2 should return 3', () => {
        expect(mathOperations.subtraction(2, 2)).toBe(0);
    });

    it('adding 1 + 2 should return 3', () => {
        expect(mathOperations.multiplication(1, 2)).toBe(2);
    });
})


