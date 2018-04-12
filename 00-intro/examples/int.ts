interface MyInterface {
    myVal:any;
}

class MyClass1 implements MyInterface {
    myVal:any;

}

class MyClass2 {
    myVal:any;
    
}

let inst1: MyInterface = new MyClass1();
let inst2: MyInterface = new MyClass2();
let inst3: MyInterface = {myVal: 3};

console.log(inst1);
console.log(inst2);