// 剑指 Offer 10- I. 斐波那契数列
// var fib = function(n) {

//     if(n<=1) return n
//     const dp = new Array(n+1)
//     dp[0]=0
//     dp[1]=1
//     for(let i=2;i<=n;i++){
//         dp[i] = dp[i-1]+dp[i-2]
//     }
//     return dp[n]

// };
// fib(3)

// 剑指 Offer 22. 链表中倒数第k个节点

// var getKthFromEnd = function(head, k) {
//     const arr = []
//     while(head){
//         arr.push(head)
//         head=head.next
//     }
//     return arr[arr.length-k]
// };
