// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //helper function to check for duplicates using set
  function duplicateCheck (input) {
    return new Set(input).size !== input.length
  }

  function substitution (input, alphabet, encode = true) {
    // your solution code here
    //error handling, no alphabet, alphabet not 26 characters and doesn't contain duplicates
    if (!alphabet || alphabet.length !== 26) {
      return false
    }
    if (duplicateCheck(alphabet)) {
      return false
    }
    //global values for making ciphers
    const cipher = {}
    const stdAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //
    if (!encode) {
      for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet.charAt(i).toUpperCase()
        const substitute = stdAlpha.charAt(i)
        cipher[letter] = substitute
      }
    } else {
      for (let i = 0; i < stdAlpha.length; i++) {
        const letter = stdAlpha.charAt(i)
        const substitute = alphabet.charAt(i)
        cipher[letter] = substitute
      }
    }
    let output = ''

    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i).toUpperCase()

      if (char === ' ') {
        output += ' '
      } else if (cipher.hasOwnProperty(char)) {
        output += cipher[char]
      } else return false
    }
    return output.toLowerCase()
  }

  return {
    substitution
  }
})()

module.exports = { substitution: substitutionModule.substitution }
