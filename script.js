// console.log('start');
// import { vars } from './script1'

// console.log(vars)

console.log('script')

let btn = document.getElementById('btn-circle')
let outerDiv = document.getElementById('outer-comp')
let count = 0

btn.addEventListener('click', (e) => {
    let cir1 = document.getElementById('circle1')
    let cir2 = document.getElementById('circle2')
    // console.log('click', e, e.detail, e.target.value)
    btn.style.position = 'absolute'
    btn.style.zIndex = 1
    // Math.floor(Math.random() * (max - min + 1)) + min;
    let cir1Radious = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    console.log(cir1, cir2)
    if (count == 0) {
        // outerDiv.removeChild(cir1)
        let di = document.createElement('div')
        di.id = 'circle1'
        di.style.position = 'absolute'
        di.style.width = `${cir1Radious}px`
        di.style.height = `${cir1Radious}px`
        di.style.border = '1px solid black'
        di.style.borderRadius = '100%'
        di.style.zIndex = 0
        outerDiv.appendChild(di)
        count = 1
        outerDiv.removeChild(cir2)

    } else {
        let di2 = document.createElement('div')
        di2.id = 'circle2'
        di2.style.position = 'absolute'
        di2.style.width = '200px'
        di2.style.height = '200px'
        di2.style.border = '1px solid black'
        di2.style.borderRadius = '100%'
        di2.style.zIndex = 0
        outerDiv.appendChild(di2)
        count = 0
    }

})