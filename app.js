let result = document.getElementById("result")
function genotp() {
    let otp = Math.floor(Math.random()*1000000)
result.innerText = `Your OTP Code is ${otp}` 
console.log(otp)
}


