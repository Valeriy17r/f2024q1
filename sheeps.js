const sheeps = [1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2]
const empty = []
for (x = 0; x <= sheeps.length; x++) {
    if (sheeps[x] === 2) {
        empty.push(sheeps[x])
    }
}

console.log(`количество 2 в массиве равно  ${empty.length}`)