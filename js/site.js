//get values/string from the page
//controller function
function getValues(){
    document.getElementById("alert").classList.add("invisible");
    let userString =  document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

//reverse string
//logic function
function reverseString(userString){
    let revString = [];
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}
//display the reversed string to the user
//view function
function displayString(revString){
    //write to page
    document.getElementById("msg").innerHTML = `Your String reversed is: ${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}