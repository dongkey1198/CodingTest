const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map(num => parseInt(num));
}).on('close', () => {
    let A = input[0];
    let B = input[1];

    if(A>B){
        console.log(">");
    } else if(A < B){
        console.log("<");
    } else if(A == B){
        console.log("==");
    }

    process.exit();
});