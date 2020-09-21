function divideBy(firstNumber) {
    function divNum(secondNumber) {
        return secondNumber / firstNumber;
    }
    return divNum;
}

function addBy(firstNumber) {
    function sumNum(secondNumber) {
        return firstNumber + secondNumber;
    }
    return sumNum;
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);