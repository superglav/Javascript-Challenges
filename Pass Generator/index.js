let passboxes = document.querySelectorAll(".test")
let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>0123456789?"
let passwordLength = 10
let arr = Array.from(char)


function generatepass(){
    
    for ( const password of passboxes) {
       let newPassword = " "       
       
       for (i=0; i< passwordLength; i++) {
       newPassword += arr[Math.floor(Math.random()*arr.length)]
    }
       password.textContent = newPassword
    }
    
}








