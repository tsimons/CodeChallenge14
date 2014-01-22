/*
    Write a recursvie function that counts down from a given number
    if the number is divisible by 3, it replaces the number with foo
    if the number is divisible by 5, it replaces the number with bar
    if the number is divisible by 3 and 5, it replaces the number with foobar
    Don't forget to account for numbers less than 0
*/


var countDown = function (num) {
    if (num === 0) {
        return '' + 0;
    }
    
    if (num < 0) {
        return 'Error: Please use a positive number';
    }
    
    var output = '';
    
    if (num % 3 === 0) {
        output += 'foo';
    }
    
    if (num % 5 === 0) {
        output += 'bar';
    }
    
    return '' + (output || num) + ' ' + countDown(num - 1);
};