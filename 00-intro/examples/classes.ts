class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class User extends Person {
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        super(firstName, lastName);
        this.email = email;
    }
}

let p: Person = new Person("Marco", "Secchi");
console.log(p.fullName);