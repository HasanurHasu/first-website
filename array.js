var friendsAge = [25, 30, 36, 48];
friendsAge[1] = 45;
friendsAge[friendsAge.length] = 11;
friendsAge.push(25);
friendsAge.push(28);
// console.log(friendsAge);
friendsAge.pop();
// console.log(friendsAge);

var importentParson = [];
importentParson.push("Hasanur", "Shahinur");
// console.log(importentParson);
importentParson.shift();
importentParson.unshift("Eleyas", "Dukhu", "Mojhahar");
// console.log(importentParson);

var tealine = ["Hasanur", "Shahinur", "Khademul", "Lutfor,", "Foysal", "Eyakub", "Eliyas", "Dukhu"];
var line = tealine.slice(3);
// console.log(tealine);
// console.log(line);

var color = "blue";
switch (color) {
    case "blue":
        console.log("Your selected color is blue");
        break;
    case "green":
        console.log("Your selected color is green.");
        break;
    case "white":
        console.log("Your selected color is white.");
        break;
    default:
        console.log("Wrong selected.");
};
