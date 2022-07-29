// var status = "😎"

// setTimeout(() => {
//   const status = "😍"

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status
//     }
//   }

//   console.log(data.getStatus())
//   console.log(data.getStatus.call(this))
// }, 0)



// function getName(name) {
//     const hasName = //
//   }


// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   }
  
//   const colors = ["pink", "red", "blue"]
  
//   console.log(colorConfig.red)


//   const info = {
//     [Symbol('a')]: 'b'
//   }
  
//   console.log(info)
//   console.log(Object.keys(info))
// 🎉✨ This is my 100th question! ✨🎉
// const keys = ["name", "age"]
// const values = ["Lydia", 22]

// let b=Object['fromEntries'](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })) 
// console.log(b);

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "one");
  });
  
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, "two");
  });
  
  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));