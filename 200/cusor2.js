const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{

}).on('close', ()=>{
        //처음 주어지는 문자열을 배열로 나눈다.
        let result = input.shift().split("");
        let arr = [];
        //명령어 수 제거
        input.shift();
        input.map(command => {
            let m = command.split(' ');
            switch(m[0]){
                case 'L':
                    if(result !== []){
                        let tmp = result.pop();
                        arr.push(tmp);
                    }
                    break;
                case 'D':
                    if(arr !== []){
                        let tmp = arr.pop();
                        result.push(tmp);
                    }
                    break;
                case 'B':
                    if(result !== []){
                        result.pop();
                    }
                    break;
                case 'P':
                    result.push(m[1]);
                    break;
            }
        });

    process.exit();
});