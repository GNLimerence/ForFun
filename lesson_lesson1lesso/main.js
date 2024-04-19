/*
Hamf built in:
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
*/
function writeLog (message) {
    var myString = ''
    for (var param of arguments){
        myString += `${param} -`
    }
    console.log(myString)
}
writeLog('Log1', 'Log2', 'Log3');
 
var car = {
    name: 'samsung',
    price: '10000'
}
console.log(car)
