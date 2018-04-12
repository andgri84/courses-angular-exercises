let list1 = [1, 2, 4];
let list2 = [3, 6, 8];

console.log('List1: ' + list1);
console.log('List2: ' + list2);

let list3 = [...list1, ...list2];
console.log('List3: ' + list3);


let list4 = [];
list4.push(...list2);
console.log('List4: ' + list4);

list2.push(...list1);
//[...list2] = [5, 6, 7];
console.log('List2: ' + list2);
