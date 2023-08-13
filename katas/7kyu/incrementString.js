function incrementString(str) {
  const match = str.match(/\d+$/)
  const number = match ? match[0] : ""
  const word = match ? str.slice(0, str.length - number.length) : str
  if (match) {
    final =
      word + (parseInt(number) + 1).toString().padStart(match[0].length, "0")
  } else {
    final = word + "1"
  }
  console.log(final)
  return final
}

// incrementString("foobar000")
// ;("foobar001")
// incrementString("foobar999")
// ;("foobar1000")
// incrementString("foobar00999")
// ;("foobar01000")
// incrementString("foo")
// ;("foo1")
// incrementString("foobar001")
// ;("foobar002")
// incrementString("foobar1")
// ;("foobar2")
// incrementString("1")
// ;("2")
// incrementString("009")
// ;("010")
// incrementString("fo99obar99")
// ;("fo99obar100")
