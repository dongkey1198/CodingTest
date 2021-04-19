const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    let t = input.shift();
    let stack = [];
    let result = "";
    let cnt = 0;
    while(true){
        while(true){
            cnt++;
            stack.push(cnt);
            result += '+\n';
            if(cnt === input[0]){
                break;
            }
        }
        while(true){
            if(stack.length === 0){
                break;
            } else if (stack[stack.length - 1] === input[0]){
                stack.pop();
                input.shift();
                result += '-\n';
            } else if(stack[stack.length - 1] > input[0]){
                result += 'NO\n';
                break;
            } else{
                break;
            } 
        }
        if(cnt === t){
            break;
        }
    }
    console.log(result);
    process.exit();
});

