console.log("\n--- boolean ---");
var flag = false;
console.log(flag);
console.log("\n--- number ---");
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log("\n--- string ---");
var city = "Milan";
console.log(city);
var sentence = "Lorem ipsum dolor sit amet,\n    consetetur sadipscing elitr,\n    sed diam nonumy eirmod tempor invidunt\n    ut labore et dolore magna aliquyam erat,\n    sed diam voluptua.";
console.log(sentence);
var fullName = "Marco Secchi";
sentence = "Hello, my name is " + fullName;
console.log(sentence);
console.log("\n--- array ---");
var list = [1, 2, 3];
console.log(list);
console.log("\n--- tuple ---");
var tuple;
tuple = ["hello", 10];
console.log(tuple);
console.log("\n--- enum ---");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
console.log("\n--- any ---");
var notSure = 4;
console.log(notSure);
notSure = "Lorem Ipsum";
console.log(notSure);
console.log(notSure.aValue); // nessun errore in fase di compilazione
console.log("\n--- undefined and null ---");
var und;
console.log(und);
und = null;
console.log(und);
// console.log("\n--- void ---");
function warnUser() {
    alert("This is my warning message");
}
// console.log("\n--- never ---");
function error(message) {
    throw new Error(message);
}
