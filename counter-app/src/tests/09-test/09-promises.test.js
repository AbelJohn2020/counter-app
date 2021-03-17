import getHeroeByIdAsync from "../../base-pruebas/09/09-promesas";
import heros from "../../data/heros";

describe('Test in 09-promises.js', () => {
    test('should return a hero async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heros[0])
                done();
            })
    })

    test('should return hero for ID does not exist', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('Could not find the hero');
                done();
            })
        
    })
    
    
})
