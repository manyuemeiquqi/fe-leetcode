const numKLenSubstrRepeats = (s, k) => {
    let ret = 0
    const len = s.length
    const set = new Set()
    let l = 0
    let r = 0
    while (r < len) {
        const addChar = s[r]
        while (set.has(addChar)) {
            set.delete(s[l])
            l++
        }
        set.add(addChar)
        if (set.size === k) {
            ret += 1
            set.delete(s[l])
            l++
        }
        r++
    }
    const allStringNumber = len - k + 1

    return allStringNumber - ret
}

numKLenSubstrRepeats("createfunonyoka", 4)
