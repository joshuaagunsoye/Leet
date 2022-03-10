function romanToInteger(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const specialSymbols = {
    I: { V: 5, X: 10 },
    X: { L: 50, C: 100 },
    C: { V: 500, X: 1000 },
  };

  let result = 0;
  let pointer = 0;

  while (pointer < s.length) {
    let currentCharacter = s[pointer];
    if (specialSymbols[currentCharacter]) {
      let nextCharacter = s[1 + pointer];
      if (specialSymbols[currentCharacter][nextCharacter]) {
        result += specialSymbols[currentCharacter][nextCharacter];
        pointer += 2;
      }
    }
    result += symbols[currentCharacter];
    pointer++;
  }
  return result;
}

console.log(romanToInteger("III"))