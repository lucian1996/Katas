function generateHashtag(str) {
  var hash = "#"
  str.split(" ").map((a) => {
    hash += a.charAt(0).toUpperCase() + a.slice(1)
  })
  return hash != "#" && hash.length <= 140 ? hash : false
}

module.exports = {generateHashtag}
