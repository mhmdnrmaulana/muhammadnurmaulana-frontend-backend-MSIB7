function diagonalSum(matrix) {
  return matrix.reduce((sum, row, i) => {
    sum += row[i] + row[row.length - 1 - i]

    if (i === row.length - 1 - i) {
      sum -= row[i]
    }

    return sum
  }, 0)
}

// Cases 1
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

// Cases 2
console.log(
  diagonalSum([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)
