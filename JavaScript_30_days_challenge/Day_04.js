//Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);

}

//Task 3
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

//Task 4
let num = 10
while (num >= 1) {
    console.log(num);
    num--;
}

//Task 5:
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

//Task 6:
let l = 5;
let fact = 1;
do {
    fact *= l;
    l--;
} while (l > 1);

console.log(fact);

//Task Thala
for (let i = 0; i < 5; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
  
//Task 8
for (let i = 1; i <=10; i++) {
    if(i===5)continue;
    console.log(i);
}

//Task 9
for (let i = 1; i <=10; i++) {
    if(i===7)break;
    console.log(i);
}
