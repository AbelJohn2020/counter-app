import { getHeroById } from "../08/08-imp-exp";

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'Could not find the hero' );
            }
        }, 1500  )
    
    });


}

export default getHeroeByIdAsync;