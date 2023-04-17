// Write your tests here!
const caesarModule = require("../src/caesar")
const {expect} = require("chai")

describe("caesar", () => {
  it("should return false if shift is 0", () => {
    const input = "hello"
    const shift = 0
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.be.false
  })
  
  it("should return false if shift is less than -25", () => {
    const input = "hello"
    const shift = -26
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.be.false
    })
  
  it("should return false if shift is greater than 25", () => {
    const input = "hello"
    const shift = 26
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.be.false
  })
  
  it("should encode a string with a positive shift", () => {
    const input = "hello world"
    const shift = 3
    const expected = "khoor zruog"
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  
  it("should encode a string with a negative shift", () => {
    const input = "hello world"
    const shift = -3
    const expected = "ebiil tloia"
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  
    it("should decode a string with a positive shift", () => {
    const input = "khoor zruog"
    const shift = 3
    const expected = "hello world"
    const actual = caesarModule.caesar(input, shift, false)
    expect(actual).to.equal(expected)
  })
  
    it("should decode a string with a negative shift", () => {
    const input = "ebiil tloia"
    const shift = -3
    const expected = "hello world"
    const actual = caesarModule.caesar(input, shift, false)
    expect(actual).to.equal(expected)
  })
  
   it("should handle non-alphabetic characters", () => {
    const input = "Hello, World!"
    const shift = 3
    const expected = "khoor, zruog!"
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  
})
