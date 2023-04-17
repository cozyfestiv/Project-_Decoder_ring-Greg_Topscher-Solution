// Write your tests here!
const { expect } = require("chai");
const  polybiusModule = require("../src/polybius");

describe("polybius", () => {
 
  it("should translate both 'i' and 'j' to 42 when encoding", () => {
      const message = "jiggle";
      const actual = polybiusModule.polybius(message);
      const expected = "424222221351";
      expect(actual).to.equal(expected);
    });
 
      it("should translate 42 to both 'i' and 'j' when decoding", () => {
      const message = "424222221351";
      const actual = polybiusModule.polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
  
   it("should leave spaces as is", () => {
      const message = "2345 23513434112251";
      const actual = polybiusModule.polybius(message, false);
      const expected = "my message";
      expect(actual).to.equal(expected);
    });
  
  it("should ignore capital letters", () => {
    const message = "A Message"
    const actual = polybiusModule.polybius(message)
    const expected = "11 23513434112251"
    expect(actual).to.equal(expected)
  })
  
                            })