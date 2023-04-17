// Write your tests here!
const { expect } = require("chai")
const substitutionModule = require("../src/substitution")

describe("substitution", () => {
  it("should return false if the alphabent is not 26 characters long", () => {
    const message = "message";
    const alphabet = "short";
    const actual = substitutionModule.substitution(message, alphabet);
    expect(actual).to.be.false;
  })
  
  it("correctly translates the given phrase, based on the alphabet given", () => {
    const message = "message"
    const alphabet = "plmoknijbuhvygctfxrdzeswaq"
    const actual = substitutionModule.substitution(message, alphabet)
    const expected = "ykrrpik";
    expect(actual).to.equal(expected)
    })

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const message = "message"
    const alphabet = "abcabcabcabcabcabcabcabcab"
    const actual = substitutionModule.substitution(message, alphabet)
    expect(actual).to.be.false
    })
  
   it("should maintain spaces in the message when encoding", () => {
    const message = "my message"
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
    const actual = substitutionModule.substitution(message, alphabet)
    const expected = "yp ysii.rs"
    expect(actual).to.equal(expected)
    })
  
   it("should maintain spaces in the message when decoding", () => {
    const message = "yp ysii.rs"
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
    const actual = substitutionModule.substitution(message, alphabet, false)
    const expected = "my message"
    expect(actual).to.equal(expected)
    })
  
   it("ignores capital letters", () => {
    const message = "A Message"
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
    const actual = substitutionModule.substitution(message, alphabet)
    const expected = ". ysii.rs"
    expect(actual).to.equal(expected)
    })
  
})