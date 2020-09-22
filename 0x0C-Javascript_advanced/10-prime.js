const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    } 
    return num > 1;
}


let countPrimeNumbers = () => {
    let numbers = [];
    for(let n = 2; n < 100; n++) {
        if (isPrime(n)) {
            numbers.push(n)
        }
    }
    return numbers.length;
};

var startTime = performance.now();
for(let times = 1; times <= 100; times++) { 
    countPrimeNumbers(100)
};
var endTime = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (endTime - startTime) + ' milliseconds.');