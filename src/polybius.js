const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function isEven (str) {
    const num = str.replace(/ /g, '').length
    return num % 2 === 0
  }

  function polybius (input, encode = true) {
    // your solution code here
    const key = [
      ['A', 'F', 'L', 'Q', 'V'],
      ['B', 'G', 'M', 'R', 'W'],
      ['C', 'H', 'N', 'S', 'X'],
      ['D', 'I/J', 'O', 'T', 'Y'],
      ['E', 'K', 'P', 'U', 'Z']
    ]
    let output = ''
    let pairs = []
    if (!encode) {
      if (isEven(input)) {
        // check if input length is odd
        for (let i = 0; i < input.length; i += 2) {
          const pairing = input.slice(i, i + 2)
          if (input[i] === ' ') {
            pairs.push(' ')
            i--
            continue
          }
          pairs.push(pairing)
        }
        console.log(pairs)
        pairs.forEach(pair => {
          const row = Number(pair.charAt(0))
          const column = Number(pair.charAt(1))
          console.log(pair)
          if (pair === ' ') {
            output += ' '
            return output
          }
          output += key[row - 1][column - 1]
        })
        return output.toLowerCase()
      } else return false
    }

    input = input.toUpperCase()
    for (let i = 0; i < input.length; i++) {
      let letter = input.charAt(i)
      //both I and J should add 42
      if (letter === 'J' || letter === 'I') {
        output += '42'
      }
      //spaces should remain
      if (letter === ' ') {
        output += ' '
      }
      //loop through rows and columns of key to compare against input[i]
      for (let row = 0; row < key.length; row++) {
        for (let column = 0; column < key[row].length; column++) {
          if (key[row][column] === letter) {
            output += row + 1 + '' + (column + 1)
          }
        }
      }
    }
    return output
  }
  return {
    polybius
  }
})()
module.exports = { polybius: polybiusModule.polybius }
