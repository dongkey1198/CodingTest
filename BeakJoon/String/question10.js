const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let arr = [];
    let cnt = parseInt(input.shift());

    input.forEach(el => {
        for(let i = 0; i < el.length; i++){
            if(!arr.includes(el[i])){
                arr.push(el[i]);
            } else if(el[i] !== el[i-1]){
                cnt --;
                break;
            }
        }
        arr = [];
    });
    console.log(cnt);

    input.forEach(word => {
        
        for(let i = 0 ; i < word.length; i++){
            
        }
    });
    process.exit();
});