var friendsAge = [25, 30, 36, 48];
friendsAge[1] = 45;
friendsAge[friendsAge.length] = 11;
friendsAge.push(25);
friendsAge.push(28);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
var importentParson = [];
importentParson.push("Hasanur", "Shahinur");
console.log(importentParson);
importentParson.shift();
importentParson.unshift("Eleyas", "Dukhu", "Mojhahar");
console.log(importentParson);
var tealine = ["Hasanur", "Shahinur", "Khademul", "Lutfor,", "Foysal", "Eyakub", "Eliyas", "Dukhu"];
var line = tealine.slice(3);
console.log(tealine);
console.log(line);
var names = ["Hasanur", "Shahinur", "Khademul", "Lutfor", "Foysal", "Eyakub", "Eliyas", "Dukhu"];
for (i= 0; i < names.length; i++) {
    var nam = names[i];
    console.log(nam);
}