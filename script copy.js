console.log('script.js')

// function func() {

// }

// class myClass {

// }

// console.log(typeof func, 'type of function')
// console.log(typeof myClass, 'type of class')

// const myPromise = new Promise((res, rej) => {
//     document.getElementById("btn").addEventListener("click", () => {
//         res("resolved")
//     }, { once: true })
//     document.getElementById("btn1").addEventListener("click", () => {
//         rej("reject")
//     }, { once: true })
// })

// console.log(myPromise.then((value) => console.log(value)).catch(e => console.log(e)))

async function func() {
    new Promise((res, rej) => {
        return "shiv";
    })
}
let res = func()
console.log(res)
