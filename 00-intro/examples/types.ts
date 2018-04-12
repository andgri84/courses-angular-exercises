console.log("\n--- boolean ---");
let flag: boolean = false;
console.log(flag);

console.log("\n--- number ---");
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

console.log("\n--- string ---");
let city: string = "Milan";
console.log(city);

let sentence: string = `Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt
    ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`;
console.log(sentence);

const fullName = "Marco Secchi";
sentence = `Hello, my name is ${ fullName }`;
console.log(sentence);

console.log("\n--- array ---");
let list: Array<number> = [1, 2, 3];
console.log(list);

console.log("\n--- tuple ---");
let tuple: [string, number];
tuple = ["hello", 10];
console.log(tuple);

console.log("\n--- enum ---");
enum Color {Red, Green, Blue}
let color: Color = Color.Green;
console.log(color);

console.log("\n--- any ---");
let notSure: any = 4;
console.log(notSure);
notSure = "Lorem Ipsum";
console.log(notSure);
console.log(notSure.aValue); // nessun errore in fase di compilazione

console.log("\n--- undefined and null ---");
let und: any;
console.log(und);
und = null;
console.log(und);

// console.log("\n--- void ---");
 function warnUser(): void {
    alert("This is my warning message");
 }

// console.log("\n--- never ---");
 function error(message: string): never {
    throw new Error(message);
 }
