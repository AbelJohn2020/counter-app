


const name   = 'Кэролайн';
const lastname = 'Флореc';


// const completeName = name + ' ' + lastname;
const completeName = `${ name } ${ lastname }`;

// console.log( completeName );


export default function getSayHello(name='Наллели') {
    return `Привет ${name}...`;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );