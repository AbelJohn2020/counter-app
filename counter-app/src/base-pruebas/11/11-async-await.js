
const getImage = async() => {

    try {

        const apiKey = '7JRusNpnwtLlEW6oG63FHsCPRuOpz2Yd';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'It does not exist';
    }
    
}


export default getImage;