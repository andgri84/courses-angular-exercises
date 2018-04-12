// Type inference
let val1 = 5;
// a = "hello"; // Compile error

// Type keyword
type str = string;
let val2: str = "Hello";

class User {}
type Employee = User;
type Boss = User;

let theEmployee: Employee;
let theBoss: Boss;

// Union Type
function logAge (age: number|string) {
    console.log(age);
}

logAge(10);
logAge("10");

// Intersection Type

interface Warrior {
    fight(): void;
}
  
interface Thief {
    pickPocket(): void;
}

type WarriorThief = Warrior & Thief;
let conan: WarriorThief;
