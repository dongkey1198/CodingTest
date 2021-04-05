const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    let arr = line.split(' ').map(num => parseInt(num));
    input.push(arr);
}).on('close', function(){
    let N = input.shift()[0];
    let total = 0;
    let days = 0;   
    while(days < N){
        if((days + input[days][0]) <= N){
            total+= input[days][1];
            days += input[days][0];
        } else if((days + input[days][0]) > N){
            break;
        }
    }

    console.log(total);


    process.exit();
});