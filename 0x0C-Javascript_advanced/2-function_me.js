function welcomeMessage(fullName) {
    function greeting() {
        alert('Welcome' + ' ' + fullName);
    }
    return greeting;
}
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');