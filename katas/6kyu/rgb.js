function rgb(r, g, b) {
  const rgbArray = [
    r < 0 ? 0 : r > 255 ? 255 : r,
    g < 0 ? 0 : g > 255 ? 255 : g,
    b < 0 ? 0 : b > 255 ? 255 : b,
  ]
  let hexCode = ""
  const hex = (q, r) => {
    const convert = (n) => {
      if (n >= 10) {
        return String.fromCharCode(n + 87).toUpperCase()
      } else {
        return n.toString()
      }
    }
    return convert(q) + convert(r)
  }
  for (const val of rgbArray) {
    const quotient = Math.floor(val / 16)
    const remainder = val % 16
    hexCode += hex(quotient, remainder)
  }
  return hexCode
}

console.log(rgb(0, 0, 0)) // Output: "000000"
console.log(rgb(0, 0, -20)) // Output: "000000"
console.log(rgb(300, 255, 255)) // Output: "FFFFFF"
