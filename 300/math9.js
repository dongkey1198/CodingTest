const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', ()=>{

    let n = input[0];
    let m = input[1];

    console.log(solution(n) - solution(m) - solution(n-m));

    function solution(num){
        let a = 5;
        let result = 0;
        while(true){
            if(a > num){
                break;
            }
            result += parseInt(num/a);
            a *= 5;
        }
        return result;
    }
    process.exit();
});

