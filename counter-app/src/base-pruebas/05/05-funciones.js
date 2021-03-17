const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;



const getUser = () => ({
        uid: 'Авель Лео',
        username: 'Регулус',
});

const getUsuarioActivo = ( name ) =>({
    uid: 'Илиас Лео',
    username: name
});

export { getUser, getUsuarioActivo };


