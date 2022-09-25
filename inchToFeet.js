// function inchToFeet (inch) {
//     var feet = inch/12;
//     return feet;
// }

// // var hasanur = inchToFeet(300);
// // console.log(hasanur);
// // var melu = inchToFeet(36);
// // console.log(melu);

// var inch1 = [12, 24, 36, 48, 60, 72, 146];
// for (i = 0; i < inch1.length; i++) {
//     var fee1 = inch1[i]/12;
//     console.log(fee1);
// }
// const year = 2022;
// const leapYear = year % 4;
// console.log(leapYear == 0);

function isLeapYear(year) {
const leapYear = year % 4;
if (leapYear == 0) {
    return true;
}
else {
    return false;
}
}

console.log(isLeapYear(2024));