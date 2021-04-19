const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

let input = [];

rl.on('line', function(line){
    let arr = line.split(' ');
    input.push(arr);
}).on('close', function(){
    input.shift();
    let result = '';
    
    input.map(arr => {
        let tmp = '';
        for(let i = 0; i < arr.length; i++){
            let str = reverseString(arr[i]);
            tmp += `${str} `;
        }
        tmp.trim();
        result += `${tmp}\n`;
    });

    console.log(result);

    function reverseString(str){
        return str.split("").reverse().join("");
    }
    process.exit();
});