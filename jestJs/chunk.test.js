const chunk =  require('./chunk')
const chunkedArr = [1,2,3,4]

test('cut table into ', () => {
    expect(chunk(chunkedArra, 2)).toBe([1,2], [3,4]);
})