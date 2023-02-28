// 1、考察点在8大排序
// var sortList = function (head) {
//   if (!head) return null;
//   let arr = [];
//   let origin = head,
//     origin1 = head;
//   while (origin) {
//     arr.push(origin.val);
//     origin = origin.next;
//   }
//   arr.sort((a, b) => a - b);
//   for (item of arr) {
//     origin1.val = item;
//     origin1 = origin1.next;
//   }
//   return head;
// };
