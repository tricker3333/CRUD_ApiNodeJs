// age = 10;
// age = 20;
// console.log(age);

// const car = { wheel: 4, name: "BMW" }
// console.log("Car", car);

// person = { name: "Yash", age: 23, pass: 1234 }
// console.log("Person", person);

// if (person.age == 23) {
//     person.age += 2;
//     console.log("Perosn", person);
// }
// else {
//     console.log("Persong age is not equals to 23");
// }


//even odd

// num = 10;

// if(num =>0){
//     if(num%2==0){
//         console.log("Number is Even",num);
//     }else{
//         console.log("Number is odd",num);
//     }
// }else{
//     console.log("Number should be greater then 0");
// }



// function isEven(number) {
//     return number % 2 === 0;
//   }

//   // Example usage:
//   const isNumberEven = isEven(7);
//   console.log("Is the number even?", isNumberEven);


n = 5;
function factorial(n) {
    let fact = 1;
    if (n === 0)
        return 1;

    for (let i = 2; i <= n; i++)
        fact = fact * i;
    return fact;

}

console.log(factorial(n));