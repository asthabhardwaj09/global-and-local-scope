var c =78 // or jo bahar hai if se usako kehte hai global scope
let a=12

if(true){ // if k andar jo hai wo hai block scope
    let a=12
    const b= 89
    var c =67
    console.log(a);
}

console.log(a);
// console.log(b);
console.log(c);