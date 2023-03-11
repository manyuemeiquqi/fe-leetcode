/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//注意 空 返回 null
let mergeKLists = function(lists) {
  const arr = [];
  // lists.reduce((a, cur) => {

  // });
  for(let item of lists){
    while (item) {
        arr.push(item.val)
        item=item.next
    }
  }
  if(arr.length==0)
  return null
  arr.sort((a, b) => a - b);
  const head =cur= new ListNode();
  // for (let item of arr) {
  //   cur.val = item;
  //   cur.next = new ListNode();
  //   cur = cur.next;
  // }
  for(let i=0;i<arr.length;i++){
    cur.val = arr[i];
    if(i!=arr.length-1){
    cur.next = new ListNode();
    cur = cur.next;
    }
  }
  return head
};
// @lc code=end

