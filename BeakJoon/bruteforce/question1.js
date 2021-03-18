const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    let arr = line.split(' ').map(num => parseInt(num));
    input.push(arr);
}).on('close', ()=>{
    let M = input[0][1];
    let arr = input[1];
    let tmp = 0;
    for(let i = 0; i < arr.length ; i++){
        for(let j = i + 1; j < arr.length - 1; j++){
            for(let k = j + 1 ; k < arr.length; k++){
                let sum = arr[i] + arr[j] + arr[k];
                if(tmp < sum && sum <= M){
                    tmp = sum;
                }
            }
        }
    }
    console.log(tmp);
    process.exit();
});