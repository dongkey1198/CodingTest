const realine = require('readline');
const rl = realine.createInterface({
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

    const count_numbers = new Array(T);

    for(let i = 0; i < count_numbers.length; i++){
        count_numbers[arr[i]] = 0;
    }

    for(let i = 0; i < arr.length; i++){
        count_numbers[arr[i]]++;
    }
    console.log(count_numbers[1]);
    for(let i = 0; i< arr.length; i++){
        while(stack.length !== 0 && count_numbers[arr[stack.length-1]] < count_numbers[arr[i]]){
            arr[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    while(stack.length !== 0){
        arr[stack.pop()] = -1;
    }

    let result = "";
    for(i in arr){
        result += `${arr[i]} `;
    }
    console.log(result.trim());
    process.exit();
});