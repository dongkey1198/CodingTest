const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let t = input.shift();
    let result ='';
    for(let i = 0; i < t; i++){
        let sum = 0;
        let tmp = input[i].split(' ').map(num => parseInt(num));
        tmp.shift();
        for(let j = 0; j < tmp.length - 1; j++){
            for(let k = j+1; k <tmp.length; k++){
                sum += solution(tmp[j], tmp[k]);
            }
        }
        result += `${sum}\n`;
    }
    console.log(result);

    function solution(a, b){
        while(b !== 0){
            let r = a%b;
            a = b;
            b = r;
        }
        return a;
    }
    process.exit();
});

