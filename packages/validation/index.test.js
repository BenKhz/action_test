const Validator = require('./index.js');

describe('Number Validation', () => {

    it('should pass if contains any numbers', () => {
        const my_valid = Validator;
        let hasNums = my_valid.hasNums('dsafjfd123');
        expect(hasNums).toBeTruthy();
    })
    it('should fail if no numbers present', () => {
        const my_valid = Validator;
        let hasNums = my_valid.hasNums('dsafjfd');
        expect(hasNums).not.toBeTruthy();
    })
})
describe('String Length Validation', () => {

    it('should pass if string longer than target', () => {
        const my_valid = Validator;
        let hasNums = my_valid.isLongerThan(4, "hello");
        expect(hasNums).toBeTruthy();
    })
    it('should fail if shorter than target', () => {
        const my_valid = Validator;
        let hasNums = my_valid.isLongerThan(4, "hi");
        expect(hasNums).not.toBeTruthy();
    })
    it('should fail if equal to target', () => {
        const my_valid = Validator;
        let hasNums = my_valid.isLongerThan(4, "heck");
        expect(hasNums).not.toBeTruthy();
    })
})