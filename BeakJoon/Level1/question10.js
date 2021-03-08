const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);

}).on('close', () => {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let hund = parseInt(num2/100);
    let ten = parseInt((num2/10)%10);
    let one = num2 % 10;

    let n1 = num1 * one;
    let n2 = num1 * ten;
    let n3 = num1 * hund;

    console.log(n1 + "\n" + n2 + "\n" + n3);
    console.log((n3*100) + (n2*10) + n1);

    process.exit();
});