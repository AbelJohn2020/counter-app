import { getHeroById, getHeroByLevel } from "../../base-pruebas/08/08-imp-exp";
import heros from "../../data/heros";

describe('Test in 08-imp-exp.js', () => {
    test('should return a hero by id', () => {
        const id = 1;
        const hero = getHeroById(id);
        const heroData = heros.find(heroId => heroId.id === id);

        expect(hero).toEqual(heroData);
    })

    test('should get to return a undefined if id hero does not exist', () => {
        const id = 10;
        const hero = getHeroById(id);

        expect(hero).toBe(undefined);
    })

    test('should return master level of heros', () => {
        const level = 'Master';
        const hero = getHeroByLevel(level);
        const heroLevel = heros.filter(heroLevel => heroLevel.level === level);

        expect(hero).toStrictEqual(heroLevel);
    })
    
    test('should return graduated level of heros', () => {
        const level = 'Graduated';
        const hero = getHeroByLevel(level)
        const heroLevel = heros.filter(heroLevel => heroLevel.level === level);
        
        expect(hero).toStrictEqual(heroLevel);
    })

    test('should return graduated.length of heros', () => {
        const level = 'Graduated';
        const hero = getHeroByLevel(level);
        const heroLength = hero.length;
        const heroLevel = hero.filter(heroLevel => heroLevel.level === level);
        const heroLevelLength = heroLevel.length;

        expect(heroLength).toBe(heroLevelLength);
    })
    
    
})
