import heros from "../../data/heros";

export const getHeroById = (id) => heros.find( (hero) => hero.id === id );

export const getHerosByOwner = ( owner ) => heros.filter( (hero) => hero.owner === owner );

export const getHeroByLevel = (level) => heros.filter((hero) => hero.level === level);



