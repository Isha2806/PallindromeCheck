


function reversStr(str){
        //split
        var charList = str.split('');
        //reverse
        var reversedList = charList.reverse();
        //join
         var reversedStr = reversedList.join(''); 
        return reversedStr;
}



function isPalindrome(str){
    var reverse = reversStr(str);
    return str === reverse;

}
//function that converts the date to  str
var date = {
    day:28,
    month:6,
    year:2001
};
function convertDateToStr(date){
    var dateStr = {day:'',month:'',year : ''};
    if(date.day <10){
        dateStr.day = '0'+date.day;
    }else{
        dateStr.day = date.day.toString();
    }
    if(date.month <10){
        dateStr.month = '0'+date.month;
    }else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}
console.log(convertDateToStr(date));

//write a js function which returns all variations of it
function getAllDateFormat(date){
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy   = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy   = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd   = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
   
    return[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function checkPallindromeForAllDateFormats(date){
    var pallindromeList = getAllDateFormat(date);
    var isPallindrome = false;
    for(var i = 0 ; i<pallindromeList.length ; i++){
        if (isPalindrome(pallindromeList[i])){
            isPallindrome=true;
            break;
        }
        
    }
    return isPallindrome ; 
}
var date = {
    day:28,
    month:6,
    year:2001
};
console.log(checkPallindromeForAllDateFormats(date));

//