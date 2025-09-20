import capitalized from './capitalizeStr'
import reversed from './reverseStr'
import calculator from './calculator'
import caesarCipher from './caesarCipher'
import analyze from './analyze'

test('capitalize first letter of string', () => {
    expect(capitalized('test')).toBe('Test')
})

test('reverse str', () => {
    expect(reversed('test')).toBe('tset')
})

test('calculator', () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.subtract(1,2)).toBe(-1)
    expect(calculator.divide(1,2)).toBe(0.5)
    expect(calculator.multiply(2,3)).toBe(6)
})

test('caesar cipher', () => {
    expect(caesarCipher('test', 3)).toBe('whvw')
    expect(caesarCipher('Test', 3)).toBe('Whvw')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyze array', () => {
    expect(analyze([0,1,2,3,4,5])).toMatchObject({
        average: 2.5,
        min: 0,
        max: 5,
        length: 6
    })
    expect(analyze([0,-1,-2,-3,-4,-5])).toMatchObject({
        average: -2.5,
        min: -5,
        max: 0,
        length: 6
    })
    expect(analyze([0])).toMatchObject({
        average: 0,
        min: 0,
        max: 0,
        length: 1
    })
})