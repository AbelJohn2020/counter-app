import returnArray from "../../base-pruebas/07/07-deses-arr";


describe('test in 07-deses-arr.test.js', () => {
    test('returnArray should get to return an Array', () => {
        const [letters, numbers] = returnArray();
        expect(letters).toBe('Саша');
        expect(typeof letters).toBe('string');
        expect(numbers).toBe(25);
        expect(typeof numbers).toBe('number');
    })
    
})
