const max = 4_000_000

let n1 = 1, n2 = 2
let sum = 2

while (n2 < max) {
  const nextFib = n1 + n2
  n1 = n2
  n2 = nextFib
  
  if (n2 % 2 === 0) sum += n2
}

console.log("Sum:", sum)
