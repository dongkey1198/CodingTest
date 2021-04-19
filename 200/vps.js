const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input.shift();
    let result = '';
    input.map(el => {
        result += `${solution(el)}\n`;
    });

    console.log(result);
    function solution(el){
        let tmp = el.split("");
        let stack = [];
        if(tmp.length % 2 !== 0) return 'NO';
        else if(tmp[0] === ')') return 'NO';
        
        let cnt = 0;
        
        for(let i = 0; i < tmp.length; i++){
            if(tmp[i] === '('){
                cnt++;
            } else if(tmp[i] === ')'){
                cnt--;
                if(cnt < 0){
                    return 'NO';
                }
            }
        }
        if(cnt > 0){
            return 'NO';
        }
        return 'YES';
    }

    process.exit();
});