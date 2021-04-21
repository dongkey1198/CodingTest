function solution([n, line]){
    let T = Number(n);
    let array = line.split(' ').map(num => Number(num));
    let result = new Array(T).fill(-1);
    let stack =[];
    let obj = array.reduce((acc, e) => {
        if(e in acc) acc[e] += 1; 
        else acc[e] = 1;
        return acc;
    },{});
    array.map((e, index, arr)=>{
        while(stack.length !== 0 && obj[arr[stack[stack.length-1]]] < obj[e]){
            result[stack.pop()] = e;
        }
        stack.push(index);
    });
    return result.join(' ');
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    console.log(solution(input));
    process.exit();
});