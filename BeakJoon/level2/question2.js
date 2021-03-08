const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let score = parseInt(line);

    if(score >= 90 && score <= 100){
        console.log('A');
    } else if(score >= 80 && score <= 89){
        console.log('B');
    } else if(score >= 70 && score <= 79){
        console.log('C');
    } else if(score >= 60 && score <= 69){
        console.log('D');
    } else if(score < 60){
        console.log("F");
    }

}).on('close', () => {
    process.exit();
});