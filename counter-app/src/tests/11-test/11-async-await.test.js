import getImage from "../../base-pruebas/11/11-async-await"

describe('Test with async and await in 11-async-await.js', () => {
    test('should return the url image', async () => {
        const url = await getImage();
        console.log(url)
        expect(url.includes('https://')).toBe(true);
    })
    
})
