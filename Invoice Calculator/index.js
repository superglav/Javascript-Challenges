let arr = []
let washBtn = document.getElementById('wash-btn')
let mowBtn = document.getElementById('mow-btn')
let pullBtn = document.getElementById('pull-btn')
let washText = document.getElementById('wash-text')
let mowText = document.getElementById('mow-text')
let pullText = document.getElementById('pull-text')
let pullPricep = document.getElementById('pull-price')
let washPricep = document.getElementById('wash-price')
let mowPricep = document.getElementById('mow-price')
let totalPrice = document.getElementById('pull-price1')
let resetBtn = document.getElementById('reset')
let reset = false

resetBtn.addEventListener('dblclick',function(){
    reset = true
})


washBtn.addEventListener('click', function (){
    arr.push({service : "wash car", price: 10})
    if (arr.length > 0 ) {
        console.log(arr.length)
       let example = 0
        for(let items of arr){
        washPricep.textContent = items.price
        washText.textContent = items.service 
        example += parseInt(items.price)
    }

    totalPrice.value = example
    }
})

mowBtn.addEventListener('click', function (){
    arr.push({service : "Mow Lawn", price: 20})
    let example = 0
    if (arr.length > 0 ) {
        for(let items of arr){
        mowPricep.textContent = items.price
        mowText.textContent = items.service 
        example += parseInt(items.price)
        }
        totalPrice.value = example
    }
})

pullBtn.addEventListener('click', function (){
    arr.push({service : "Pull weeds", price:30})
    let example = 0
    if (arr.length > 0 ) {
        for(let items of arr){
        pullPricep.textContent = items.price
        pullText.textContent = items.service 
        example += parseInt(items.price)
        console.log(typeof totalPrice.value)
        }
    }
    totalPrice.value = example

})

console.log(arr)























// let washCarArr = []
// let mowLawnArr = []
// let pullWeedsArr = []
// let washBtn = document.getElementById('wash-btn')
// let mowBtn = document.getElementById('mow-btn')
// let pullBtn = document.getElementById('pull-btn')
// let resetBtn = document.getElementById('reset')
// let mowPricep = document.getElementById('mow-price')
// let pullPricep = document.getElementById('pull-price')
// let washPricep = document.getElementById('wash-price')
// let washText = document.getElementById('wash-text')
// let mowText = document.getElementById('mow-text')
// let pullText = document.getElementById('pull-text')
// console.log(washCarArr)
// let totalPrice = document.getElementById('pull-price1')
// // press a button and stores the values in array
// washBtn.addEventListener('click', function(){
    
//     washText.textContent = ""
//     washPricep.textContent = ""
//     washCarArr.push({service: "Wash Car" , price: 10})
//     washText.textContent += washCarArr[0].service
//     washPricep.textContent += washCarArr[0].price
//     totalPrice.textContent = Number(washPricep.textContent)
//     calculatePrice ()
//     console.log(totalPrice.textContent)
//     console.log(washCarArr)
    
// })
// mowBtn.addEventListener('click', function(){
//     mowText.textContent = ""
//     mowPricep.textContent = ""
//     mowLawnArr.push({service: "Mow Lawn" , price: 20})
//     mowText.textContent += mowLawnArr[0].service
//     mowPricep.textContent += mowLawnArr[0].price
//     totalPrice.textContent = Number(mowPricep.textContent)
//     calculatePrice ()
//     console.log(totalPrice.textContent)

// })
// pullBtn.addEventListener('click', function(){
//     pullText.textContent = ""
//     pullPricep.textContent = ""
//     pullWeedsArr.push({service: "Pull Weeds" , price: 30})
//     pullText.textContent += pullWeedsArr[0].service
//     pullPricep.textContent += pullWeedsArr[0].price
//     totalPrice.textContent = Number(pullPricep.textContent)
//     calculatePrice ()
//     console.log(totalPrice.textContent)
// })

// function calculatePrice (){

// totalPrice.textContent = Number(washPricep.textContent) + Number(mowPricep.textContent) + Number(pullPricep.textContent)
// }

// console.log(washCarArr)

// resetBtn.addEventListener('click', function(){
//      washCarArr = null
//      mowLawnArr = []
//      pullWeedsArr = []
//      console.log(washCarArr)
// })