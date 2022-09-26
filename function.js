// function sleep(name, time) {
//     console.log("Everyday "+ name +" is sleeping at " + time);
// }
// sleep("Hasanur", "1 AM");
// sleep("Shahinur", "12 AM");
// sleep("Rohim", "11 PM");
// sleep("Korim", "10 PM");
// sleep("Pagla", "9 PM");



// var i = 1;
// factorial = 1;
// while (i <= 20) {
//     factorial = factorial * i;
//     console.log(factorial);
//     i++;
// }

function factorial(num) {
    var i = 1;
factorial = 1;
while (i <= num) {
    factorial = factorial * i;
    i++;
}
    return factorial;
}
console.log(factorial(5));