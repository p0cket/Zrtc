const { foo } = require('./')

describe('index test', () => {
    it('should fail', () => {
        expect(foo).toBe('bar')
    })
});