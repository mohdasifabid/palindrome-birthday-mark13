const dobInput = document.querySelector("#dob-input")
const checkBtn = document.querySelector("#check")
const output = document.querySelector("#output")



function reverseString(string){
    const listOfChars = string.split("");
    const reverseListOfChars = listOfChars.reverse();
    const reversedString = reverseListOfChars.join("");
    return reversedString;
}

function checkPalindrome(string){
    const reverse = reverseString(string);

    if(string === reverse){
        return true;
    } else {
        return false;
    }
     
}


function getAllDateFormat(dateString){
        const ddmmyyyy = dateString.day + dateString.month + dateString.year;
    const mmddyyyy = dateString.month + dateString.day + dateString.year;
    const yyyymmdd = dateString.year + dateString.month + dateString.day;
    const ddmmyy = dateString.day + dateString.month + dateString.year.slice(-2);
    const mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
    const yymmdd = dateString.year.slice(-2) + dateString.month + dateString.day;

    return [ ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}





function checkPalindromeForAllDateFormat(date){
    const listOfPalindrome = getAllDateFormat(date);

    const ifPalindrome = false;

    for (var i=0; i=listOfPalindrome.length; i++){
        if(checkPalindrome(listOfPalindrome[i])){
            ifPalindrome = true;
            break;
        }
    } 
    return ifPalindrome;
}

function getDayMonthYear(dateInput){
const dmy = dateInput.split("-")
return { day: dmy[2], month: dmy[1], year: dmy[0]}
}

checkBtn.addEventListener("click",function(){
    const dateObject = getDayMonthYear(dobInput.value);
    const allFormat = getAllDateFormat(dateObject);
    console.log(allFormat);
    
let palindromes = []

    for (var i=0; i<allFormat.length; i++){

        const finalPalindromeDecision = checkPalindrome(allFormat[i])
        palindromes.push(finalPalindromeDecision)
    }
    console.log(palindromes)

    let resultText = ""

    for (var i=0; i<palindromes.length; i++){

        if(palindromes[i] === true){
            resultText = "Hurre! your birthday is a palindrome :)"
            break;
        }
        resultText = "Uff! your birthday is not a palindrome :("
    }
output.textContent = resultText

})











