const distance = (a, b) => {

    function Exception(message) {
        this.message = message
    }

    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Exception('InvalidType');
    }

    const matrix = []

    for (let i = 0; i <= b.length; i++) {

        matrix[i] = [i]

        for (let j = 1; j <= a.length; j++) {

            if (i === 0) {
                matrix[i][j] = j
            } else {

                matrix[i][j] = Math.min(
                                matrix[i - 1][j] + 1,
                                matrix[i][j - 1] + 1,
                                matrix[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)
                )

            }
        }
    }

    return matrix[b.length][a.length];
}

let result = distance('cats', 'placate')
console.log(result)

module.exports.distance = distance