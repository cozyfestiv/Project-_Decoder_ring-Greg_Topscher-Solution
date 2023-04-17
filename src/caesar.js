// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
      input = input.toLowerCase();
      let output = '';
      for (let i = 0; i < input.length; i++){
      let letter = input.charCodeAt(i);
      if (letter < 97) {
        letter = String.fromCharCode(letter)
      } else {
        letter = encode ? letter + shift : letter - shift;
         if (letter > 122) {
            letter = 96 + (letter - 122)
          }
          if(letter < 97) {
            let start = 97 - letter
            letter = 123 - start
          } 
        letter = String.fromCharCode(letter)
      }
      output += letter;
  }
    return output;
}
   function decode(input, shift) {
    shift = -shift;
    return caesar(input, shift, true);
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };