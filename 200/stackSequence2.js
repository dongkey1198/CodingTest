const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    input.shift();
    let result = "";
    let stack = [];
    let tf = true;
    let count = 0;
    for(let i = 0; i < input.length; i++){
        let num = input[i];
        while(count < num){
            count ++;
            stack.push(count);
            console.log(stack);
            result += "+\n";
        }
        if(stack[stack.length-1] === num){
            stack.pop();
            result += "-\n";
        } else{
            tf = false;
            break;
        }
    }

    if(tf === false){
        console.log('NO');
    } else{
        console.log(result);
    }

    
    process.exit();
});