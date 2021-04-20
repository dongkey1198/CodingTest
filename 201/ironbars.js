const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split('');
}).on('close', ()=>{
    let result = 0;
    let stack = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] === '('){
            stack.push(input[i]);
        } else {
            if(input[i-1] === '('){
                stack.pop();
                result += stack.length;
            } else {
                stack.pop();
                result +=1;
            }
        } 

        console.log(stack,result);
        
    }
    console.log(result);
    process.exit();
});