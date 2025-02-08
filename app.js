let result = document.getElementById("result");

function genotp() {
    // Get the values and convert them to numbers inside the function
    let numOne = +document.getElementById("numOne").value;
    let numTwo = +document.getElementById("numTwo").value;

    console.log(typeof(numOne), typeof(numTwo)); // Check the types of numOne and numTwo

    let div = numOne / numTwo;

    if (numTwo === 0 || div === Infinity || div === -Infinity)  {
        result.textContent = "Math Error";
        console.log("Math Error");
    } else {
        result.textContent = `your answer is ${Math.round(div)}` ;
        console.log(div);
    }
}



