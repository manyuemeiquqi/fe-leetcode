const findLongestCommonString = (a, b) => {
    let short
    let long
    if (a.length > b.length) {
        short = b
        long = a
    } else {
        short = a
        long = b
    }
    const len = short.length
    for (let i = len; i >= 1; i--) {
        for (let j = 0; j <= len - i; j++) {
            const sub = short.slice(j, j + i)
            if (long.includes(sub)) {
                return sub
            }
        }
    }
    return ""
}

const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let tokens = line.split(" ")
        let a = parseInt(tokens[0])
        let b = parseInt(tokens[1])
        console.log(a + b)
    }
})()
