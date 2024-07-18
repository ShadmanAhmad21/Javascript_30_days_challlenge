//Task 1
const arr1 = [1,2,3,4,5]
console.log(arr1);

//Task 2
console.log(arr1[0])
console.log(arr1[arr1.length-1]);

//Task 3
arr1.push(6)
console.log(arr1);

//Task 4
arr1.pop(6)
console.log(arr1);

//Task 5
arr1.shift()
console.log(arr1);

//Task 6
arr1.unshift(9)
console.log(arr1);

//Task Thala
const numbers = [1,2,3,4,5,6]
console.log(`Main array ${numbers}`)
const doubledno = numbers.map(numbers=> numbers*2);
console.log(`Array after using map ${doubledno}`)

//Task 8
const number = [1,2,3,4,5,6]
console.log(`Main array ${number}`)
const filtered = number.filter(number => number % 2 == 0);
console.log(`Array after using filter ${filtered}`)

//Task 9
const num = [1,2,3,4,5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all numbers in array ${sum}`)

//Task 10
arr1.forEach(element => {
    console.log(element);
});

//Task 11
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}

//Task 12
const twoDimensionarray=[
    [9,8,7],
    [6,5,4],
    [3,2,1]
  ]
  console.log(twoDimensionarray)

//Task 13
console.log(twoDimensionarray[0][1])