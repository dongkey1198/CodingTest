const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map( num => parseInt(num));
}).on('close', () => {

    let num1  = input[0];
    let num2 = input[1];
    let num3 = input[2];
    // console.log((input[0] + input[1]) % input[2]);
    // console.log((input[0] % input[2]) + (input[1] % input[2]) % input[2]);
    // console.log((input[0] * input[1]) % input[2]);
    // console.log((input[0] % input[2]) * (input[1] % input[2]) % input[2]);
    // console.log();
    console.log((num1 + num2) % num3);
    console.log(((num1 % num3) + (num2 % num3)) % num3);
    console.log((num1 * num2) % num3);
    console.log(((num1 % num3) * (num2 % num3)) % num3);

    process.exit();
});