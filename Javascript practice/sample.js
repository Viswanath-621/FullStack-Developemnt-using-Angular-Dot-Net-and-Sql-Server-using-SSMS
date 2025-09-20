
/*Array useful methods 
 1. Splice (index, delcount,add new element)
 2. Slice (start index, end index)
 3. push
 4. concat
 5. pop
 6. unshift
 7. shift
*/

console.log("new to world");

var x = 10;
var x = 20; 

let a = 100;
let b = "sampel";
let c = 99.99;
let d = true;

a = 200;
b = "name";
c = 10.9;
d = false;

const v = 80;

const profile = {
    name: "viswa",
    age: 29,
    isSingle: true,
    new: 90,
};

let temp = BigInt(123*67);
console.log(temp);

console.log(profile);

//Aarithematic operstors 
a += 9;
b = 10;
let artop = {
a1 : a+b,
b1 : a-b,
c1 : a*b,
d1 : a/b,
e1 : a%b,
f1 : a**b,
g1 : a++,
h1 : ++a,
};

console.log(artop);


//compare operators

a = 10;
b = 10;
s = "";
if(a==b){
    s = "yess eqal";
}
else if(a<b){
    s = "a less than b";
}
else{
    s = "not equal";
}

console.log(s);

a = 10;
b = "10";

console.log("a===b", a===b);

age = 20;
s = age>18?'adult':"not-adult";
console.log(s);


//loops 

for(let i = 0; i<5; i++){
    console.log("sahoo");
}

let xy = "King"; 
for (let f of xy){
    console.log(f);
}


const obj = {
    profileId : 1,
    fullName : "vis",
    age : 20
};

for(let key in obj){
    console.log("Key = ",key, " value = ", obj[key]);
}

//Strings

let fullName1 = "TufGaming";

for(let i in fullName1){
    console.log(i);
}
j=0;
while(j<fullName1.length){
    console.log(fullName1[j]);
    j++;
}

//String Methods

console.log(fullName1.toUpperCase());
console.log(fullName1.toLowerCase());
console.log(typeof obj.age.toString());

let hj = "   k king jo  ";
console.log(hj.trim());

console.log(hj.slice(0,4));
console.log(hj.concat(fullName1));
console.log(hj.replace('k','l'));
console.log(hj.replaceAll('k','l'));
console.log(hj.charAt(3));

//Arrays

const arr = [100,20,30,40,50];

let result = []; 
for(let val of arr){
    result.push(val-(val/10));
}


console.log(result);

result.push(90);
console.log(result);

x = result.pop();
console.log(result,x);

y = result.toString();
console.log(y);

a = [90,"hi"];
b = [80,"bye"]
c = a.concat(b);
console.log(c);

c.unshift("antman");
console.log(c);

let value = c.shift();
console.log(value,c);

d = c.slice(0,2);
c.splice(0,2);
console.log(d,c);

c.splice(0,2,34,25,46,78);
console.log(c);

//add element using splice 
c.splice(2,0,"he");
console.log(c);
