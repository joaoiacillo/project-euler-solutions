/**
 * Second try uses arithmetic progression.
 * 
 * It increases line numbers and math operations, but at least it's an O(1)
 * algorithm. It's waaay faster than the first try.
 * 
 * For range 1000:       0m0.030s
 * For range 10000000:   0m0.031s
 * For range 1000000000: 0m0.033s
 */

const range = 1000000000

function progSum(startAndStep) {
  const termQuantity = Math.floor((range - 1) / startAndStep)
  const lastTerm = startAndStep + (termQuantity - 1) * startAndStep
  return (startAndStep + lastTerm) * (termQuantity / 2)
}

const sum = progSum(3) + progSum(5) - progSum(15)

console.log(`Range: ${range}, Sum: ${sum}`)
