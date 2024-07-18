//Task 1
const calc = (a)=>{
    if(a%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
calc(22)

//Task 2
const square = (x)=>{
    return x*x;
}
console.log(square(2));

//Task 3
const max = (num1,num2)=>{
    return Math.max(num1,num2)
}
console.log(max(2,10));

//Task 4
const conc = (str1,str2)=>{
    return str1.concat(str2)
}
console.log(conc("String 1"," String 2"));

//Task 5
const sum = (num1,num2)=>{
    return num1 + num2
}
console.log(sum(10,10));

//Task 6
const contain = (str1,str2)=>{
    return str1.includes(str2)
}
let companyName = "Perpetual Income & Growth Investment Trust PLC";
let similar = "Income";
console.log(contain(companyName,similar));

//Task Thala
let multiply = (a, b = 1) => {
    return a * b;
  };
  console.log(multiply(5, 6));
  console.log(multiply(3));

//Task 8
const info = (name,age)=>{
    if (name && age) {
        console.log("Thank You for giving us Your Personal Details");
        console.log(`Name You have added is ${name} and age is ${age}`);
      } else {
        console.log("Please add your Personal Details");
      }
    }

    let personalDetail = { name: "Shadman", age: 20 };
    
    info(personalDetail.name, personalDetail.age);

//Task 9
const sayHello = ()=>{
    console.log("Hello");
}

const high = (a,func)=>{
    for (let i = 1; i <=a; i++) {
        func();
    };
};
high(5,sayHello)

//Task 10
const last = (func1,func2,a)=>{
    let res1 = func1(a);
    let res2 = func2(res1);
    return res2;
};

let addOne = (x)=>x+1;
let sq = (y)=>y*y;

const result = last(addOne,sq,4);
console.log(result);