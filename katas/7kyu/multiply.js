function multiply(a, b) {
  const product = BigInt(a) * BigInt(b);
  return product.toString();
}

multiply("2", "3")
module.exports = { multiply };
