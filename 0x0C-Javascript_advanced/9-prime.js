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
countPrimeNumbers();
var endTime = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (endTime - startTime) + ' milliseconds.');