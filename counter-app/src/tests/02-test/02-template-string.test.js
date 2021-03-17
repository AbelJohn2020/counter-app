import '@testing-library/jest-dom';
import getSayHello from '../../base-pruebas/02/02-template-string';

describe('test in 02-template-string.test.js', () => {
    test('getSayHello should get to return Привет Кэролайн...', () => {
        const name = 'Кэролайн';
        const sayHello = getSayHello(name);
        expect(sayHello).toBe(`Привет ${name}...`);
    })

    // getSayHello should get to return Привет Наллели... if there is not arguments in name

    test('test in 02-template-string.test.js name without arguments', () => {
        const sayHello = getSayHello();
        expect(sayHello).toBe(`Привет Наллели...`);
    })
    
    
});
