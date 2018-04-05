var NotAPerson = /** @class */ (function () {
    function NotAPerson(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return NotAPerson;
}());
function printFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p1 = { firstName: "Marco", lastName: "Secchi" };
var p2 = { firstName: "Mario", lastName: "Rossi" };
var p3 = new NotAPerson("Giovanna", "D'Arco", 19);
printFullName(p1);
printFullName(p2);
printFullName(p3);
printFullName({ firstName: "Giovanni", lastName: "Bianchi" });
// printFullName({name: "Marco Secchi"}); // Compiler error
