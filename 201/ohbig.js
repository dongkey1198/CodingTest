const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let T = parseInt(input.shift());
    let arr = input[0].split(' ').map(num => parseInt(num));
    let stack = [];


    for(let i = 0; i < T; i++){
        // !!!!!!!스택에는 배열의 인덱스 값을 넣는다!!!!!!!!!!!!

        // 스택이 비어있고 스택 가장위에있는 인덱스값에 위치한 숫자가 현재 값 보다 작을경우
        // 스택에 있는 인덱스 값의 위치에 현재 값을 너어준다. 
        while(stack.length !== 0 && arr[stack[stack.length-1]] < arr[i]){
            arr[stack.pop()] = arr[i];
        }
        // 
        stack.push(i);
    }
    while(stack.length > 0){
        arr[stack.pop()] = -1;
    }

    let result ="";

    for(i in arr){
        result += `${arr[i]} `;
    }
    console.log(result.trim());
    process.exit();
});