function distinct(numbers) {
  let result = []

  numbers.forEach((number) => {
    if (!result.includes(number)) {
      result.push(number)
    }
  })
  console.log(result)
  return result
}

module.exports = {distinct}

distinct([1, 1, 2])
// [(1, 2)]
distinct([1, 2, 1, 1, 3, 2])
// [(1, 2, 3)]
