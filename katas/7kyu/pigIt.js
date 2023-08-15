function pigIt(str) {
  words = str.match(/\b[A-Za-z]+\b/g)
  const transformedWords = words.map((word) => {
    const prefix = word[0]
    const root = word.slice(1)
    return root + prefix + "ay"
  })
  const final = transformedWords.join(" ")
  const lastChar = str[str.length - 1]
  const isSpecialCharacter = /[!.,;?]/.test(lastChar)
  return final + (isSpecialCharacter ? " " + lastChar : "")
}

// pigIt("Pig latin is cool")
// ;("igPay atinlay siay oolcay")
// pigIt("This is my string")
// ;("hisTay siay ymay tringsay")
// pigIt("O tempora o mores !")
// ;("Oay emporatay oay oresmay !")
