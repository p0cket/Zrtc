const { startServer } = require('./server')

describe('index test', () => {
    it('should be a function', () => {
        expect(typeof startServer).toBe('function')
    })
});
