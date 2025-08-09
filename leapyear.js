function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLY = isLeapYear(2008);
console.log(isLY);



function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLY2 = isLeapYear2(2008);
console.log(isLY2);