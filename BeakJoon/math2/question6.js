const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer ='';
rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    input.shift();
    input.forEach(num => {
        let arr = [];
        for(let i = 2; i <= num; i++){
            let isPrime = true;
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                arr.push(i);
            }
        }
        let tmp = solution(num, arr);
        answer += `${tmp[0]} ${tmp[1]}\n`;        

    });
    console.log(answer);
    process.exit();
});

function solution(num, arr){
    let array = [];
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i; j < arr.length; j++){
            if((arr[i] + arr[j]) === num){
                array.push([arr[i], arr[j]]); 
            }
        }
    }
    
    if(array.length > 1){
        return array[array.length-1];
    }

    return array[0];
}