const {calculateTip, fahrenToCel, celToFahren} = require('../src/math')

test('Should cal total tip', ()=>{
    const tot = calculateTip(10, .3)

    expect(tot).toBe(13)

    // if(tot !== 13)
    //     throw new Error('Total tip is not 13... it is : '+ tot)
})

test('With default tip', () => {
    const tot = calculateTip(10)
    expect(tot).toBe(12.5)
})

test('convert 32f to 0c',() => {
    const r = fahrenToCel(32)

    expect(r).toBe(0)
})
test('convert 0c to 32',() => {
    const r = celToFahren(0)

    expect(r).toBe(32)
})