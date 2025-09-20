
/*Array useful methods 
 1. Splice (index, delcount,add new element)
 2. Slice (start index, end index)
 3. push
 4. concat
 5. pop
 6. unshift
 7. shift
 8. forEach 
 9. map
10. filter
11. reduce
*/


/*So till here i understood the loops concepts as 
- for(let i in arrays); -> index
- for (let i of arrays); -> direct value
- arrays.forEach((val,index,arrays)=>{
    
}) 
    
AND,
if no arrays is there but we need a loop then we can use the simple 
- for (let i=0;i<n;i++)
OR 
- let i =0;
  While(i<n){
  i++;
  }
*/

// Note: Higher order functions or Methods eg: forEach, as they accept a function as a parameter or input and they can return a function as a output.


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

function myFunction(msg,n){
    console.log(msg, n);
}

myFunction("hii man", 90);

function addnew(a,b){
    return a+b;
}

console.log(addnew(2,5));

//arrow functions 

const arrowSum = (a,b) => {
    console.log(a+b);
    return a+b;
}

arrowSum(2,3);

//practice functions 

function checkVowels(Str){
    let arr = ['a','e','i','o','u'];
    let s=0;
    for(const chr of Str){
        if (arr.includes(chr)){
            s +=1; 
        }
    }

    return s;
}

console.log(checkVowels("aiou"));

//same logic with arrow method 

const checkVowelsArrow = (Str) =>{
    let arr = ['a','e','i','o','u'];
    let s=0;
    for(const chr of Str){
        if (arr.includes(chr)){
            s +=1; 
        }
    }

    return s;
}
console.log(checkVowelsArrow('aeiou'));

//forEach topic for arrays
let arrays= [10,20,30,40];
const results = [];
arrays.forEach((val, idx, arr)=>{
    results.push(val**2);
});

console.log(results);

//case 2 -> maps

arrays = ['king','chica'];

// arrays.unshift(arrays.forEach((val)=>{
//     return val.toUpperCase();
// }));

arrays = arrays.map((val)=>val.toUpperCase());

console.log(arrays);

arrays=[10,20];
let newArr = arrays.filter((value)=>{
    return value%5==0;

});

console.log(newArr);

let reduArray =[10,20,30,90];

const output = reduArray.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);

//find largest number using reduce method in arrays
arrs = [10,20,40,90,30,78];

result = arrs.reduce((i,j)=>{
    return i > j ? i : j;
});

//Basics are done -> Now real javaScript starts 

/* The 3 Musketeers of WEB DEV 
- Html -> Structure
- CSS -> stylle
- JS -> Logic

Lovely point i got to know, is that, all the html code is asscessible by window.document 

window.document 
console.dir(window.document)
*/

document.body.childNodes[3].innerText ='abcd';