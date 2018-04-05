interface IPerson {
    firstName: string,
    lastName: string;
}

class NotAPerson {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

function printFullName(person: IPerson): void {
    console.log(person.firstName + " " + person.lastName);
}

let p1: IPerson = {firstName: "Marco", lastName: "Secchi"};
let p2: any = {firstName: "Mario", lastName: "Rossi"};
let p3: NotAPerson = new NotAPerson("Giovanna", "D'Arco", 19);

printFullName(p1);
printFullName(p2);
printFullName(p3);
printFullName({firstName: "Giovanni", lastName: "Bianchi"});
// printFullName({name: "Marco Secchi"}); // Compiler error