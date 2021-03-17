describe('test in file demo.test.js', () => {
       
    test( 'the strings should be equals', () => {
        // 1. init
        const message = 'Я люблю тебя Кэролайн';
        // 2. impulse
        const messageTwo = `Я люблю тебя Кэролайн`;
        // 3. look the behavior 
        expect(message).toBe(messageTwo);
    });

});