/**
 * First try uses old-plain for loop.
 * 
 * This can lead to quick results in computers with decent hardware and ranges
 * that don't surpass enormous values.
 * 
 * This is an O(n) algorithm.
 * 
 * For range 1000:       0m0.030s
 * For range 10000000:   0m0.061s
 * For range 1000000000: 0m2.616s
 */

const range = 1000
let sum = 0

for (let n = 3; n < range; n++)
{
  if (n % 3 === 0 || n % 5 === 0) sum += n
}

console.log(`Range: ${range}, Sum: ${sum}`)
