const d = (tree) => {
    const stk = [tree]
    const ret = [[tree]]
    const tmp = []
    while (stk.length && tmp.length) {
        while (stk.length) {
            const node = stk.shift()
            if (node.left) {
                tmp.push(node.left)
            }
            if (node.right) {
                tmp.push(node.right)
            }
        }

        ret.push([...tmp])
        stk.push([...tmp])
        tmp.length = 0
    }
    return ret
}
