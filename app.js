function reverseString(string){
    const listOfChars = string.split("");
    const reverseListOfChars = listOfChars.reverse();
    const reversedString = reverseListOfChars.join();
    return reversedString;
}


function checkPalindrom(string){
    const reverse = reverseString(string);

    if(string == reverse){
        return true;
    } else {
        return false;
    }
    
}

console.log(checkPalindrom("racecar"));
console.log(checkPalindrom("777"));
console.log(checkPalindrom("malayalam"));
console.log(checkPalindrom("444"));





















































// const dobInput = document.querySelector("#dob-input")

// const btnCheck = document.querySelector("#check")

 



// function reverseString(string) {
//     const charList = string.split("");
//     const reversedCharList =  charList.reverseString();
//     const reversedString = reversedCharList.join("")
//     return reversedString;
// }

// function isStringPalindrome(string) {
//     const reversedString = reverseString(string);
//     return string === reversedString;

// }

// function getDateAsString(date) {
//     const dateInString = { day: "", month: "", year: ""}

//     if (dateInString.day < 10) {
//         dateInString.day = "0" + date.day;
//     } else {
//         dateInString.day = date.day.toString();
//     }
//     if (dateInString.month < 10) {
//         dateInString.month = "0" + date.month;
//     } else {
//         dateInString.month = dateInString.toString();
//     }

//     dateInString.year = dateInString.toString();
//     return dateInString;
// }


// function getDateInAllFormat(date){
    
//     const ddmmyyyy = date.day + date.month + date.year;
//     const mmddyyyy = date.month + date.day + date.year;
//     const yyyymmdd = date.year + date.month + date.day;
//     const ddmmyy = date.day + date.month + date.year.slilce(-2);
//     const mmddyy = date.month + date.day + date.year.slice(-2);
//     const yymmdd = date.year.slice(-2) + date.month + date.day;
    
//     return [ ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
// }

// function checkPalindromeForAllDateFormat(date) {
//     const dateFormatList = getDateInAllFormat(date);
//     const palindromeList = [];
    
//     for (var i=0; i<dateFormatList.length; i++) {
//         const result = isStringPalindrome(dateFormatList[i]);
//         palindromeList.push(result);
//     }
//     return palindromeList;


