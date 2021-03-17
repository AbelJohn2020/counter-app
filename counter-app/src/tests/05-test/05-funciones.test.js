import { getUser, getUsuarioActivo } from "../../base-pruebas/05/05-funciones"

describe('Test in 05-functions.test.js', () => {
    
    test('getUser should get to return an object', () => {
        const userTest = {
            uid: 'Авель Лео',
            username: 'Регулус',
        }

        const user = getUser();

        expect(user).toStrictEqual(userTest);           // is the same if we use expect(user).toEqual(userTest);
    })

    test('getActiveUser should get to return an object ', () => {
        const objectTest = {
            uid: 'Илиас Лео',
            username: 'Хосе',
        };

        const user = getUsuarioActivo('Хосе');
        
        expect(user).toStrictEqual(objectTest);
    })
    
    
})
