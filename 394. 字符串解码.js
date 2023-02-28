//1、 辅助栈
//2、正则
var decodeString = function (s) {
  if (s.includes("[")) {
    const d = s.replace(/\d+\[[a-z]+\]/, (str) => {
      const [count, content] = str.slice(0, -1).split("[");
      return content.repeat(Number(count));
    });
    return decodeString(d);
  } else {
    return isNaN(s) ? s : "";
  }
};
