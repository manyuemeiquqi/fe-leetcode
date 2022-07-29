qs
3. 箭头函数的作用域 另外一个知识点是隐式类型转换
4. 隐式类型转换的一元操作符+ 以及！
5. 注意js中对象的key值都是字符串，底层自动转换
7. Number为什么与数字的==可以为TRUE
12. 重新去看待new 构造函数没有返回值的，但是new出来可以拿到一个新的对象，由此就是手写new的思路
    并且构造函数与其他函数最大的区别里面就是里面使用了this.


13. 事件传播的三个阶段 事件到达target 然后进行捕获bubbling
14. foo.__proto__==Foo.prototype
    .__proto__==Object.prototype
    .
    除了基本对象都有原型

17. 存在模板字符串是怎么衡量第一个arr[0]的
18. 19 args argument 类数组 typeof都是obj
21. eval json stringify urlparse
22. session


24. hasOwnProperty 找key set的has找value
    

26. 全局上下文
27. continue break
29. object的键值自动转换字符串，因此如果传入obj，会a["[object Object]"]变成这样，这也算隐式类型转换的一种

31. event.target的源头就是最深嵌套的target，可以通过event.stopPropagation
37. 数组跳跃赋值，中间空的值是undefined，打印出来都是<1 empty item>
38. 看不懂？？
✅
43. ...'string'  7内置 8falsy  


45. promise ??? setTimeout 第三个参数就是给第一个参数 传递参数
46. 这里用变量来拿到对象的引用，数组根据这个引用如果那这个进行赋值，这里复制的这个引用，这两个引用依然保持着对原始对象的引用

49. parseInt对字符串的转换仅仅是通过合法性检查，遇到不合法的字符，停止解析然后忽略

53. 54 55 57 
58. delete操作符删除，其返回值为ture或false，删除var const let是不可以的，直接false，只能删除全局？？上的属性 


61. defineProperty 定义的属性不可枚举以及Object.keys的返回值

62.JSON.stringify的第二个参数
63 64 65 66
67. import 静态引入，编译阶段进行引入，这就意味着在引入的文件在编译阶段就会执行，早于运行阶段，这就成为与COMMONJS的不同，common可以运行的时候进行动态的引入（加载依赖项）
69. padStart的传入的第一个参数的长度如果小于str的长度，则不会进行填充

72. String.raw看不懂

73. 看不懂题目


75. freeze冻结的是对象， isFrozen可以检查，
    foreeze的对象其属性不能进行修改
76. in运算符和includes

77. for in for of 
---
80. array的项可以使任意值包括null和undefined
81. 函数具备形参，但是未传入实参，那么参数的值就变为undefined
    
82. this的指向取决于他的位置？？


85. 链式调用的.then res=>res 为前一个回调函数返回的值
86. ？？

88. 函数的形参可以进行依赖设置，前提是只能前面的依赖后面的，否则会依法referenceError
89. export 和 import * as ??
    
91. push的返回值，引申所有数组的方法的返回值是什么
92. 箭头函数的实例没有其?? 查看__prototype prototype
93. 在函数形参里面使用rest运算符，剩余参数的值只能是一个包含所有剩余参数的数组，并且只能作为最后一个参数
    
95. return自动插入，throw，break这样的关键字

97. symbol不可枚举？？

语法 syntax 多出现于符号
类型 type 没有放到合适的位置
引用 refer 未出现的关键字或者变量

100. []&& ''&&  ||

--130
131. flat的第一个参数
133.？？
134. ??
135. ？？
136. object的seal？？
139. class的私有变量#

140. 看不懂
144. 看不懂


147. constructor内部的属性是不会在原型链上共享出去打的

148. Object.assign 分配到第一个参数上面以及返回值

151. object对象里面的箭头函数的this指向什么
152. 看不懂题目
153. 什么b写法 forEntries A: entries
B: values
C: fromEntries
D: forEach
154. ？{} ？[]truthy 以及邮箱的正则
155. !的作用，最后的返回值
