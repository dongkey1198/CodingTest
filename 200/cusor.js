const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    //처음 주어지는 문자열을 배열로 나눈다.
    let result = input.shift().split("");
    result.push(" ");
    //명령어 수 제거
    input.shift();

    let index = result.length - 1;
    input.map(command => {
        let m = command.split(' ');
        switch(m[0]){
            case 'L':
                if(index > 0) index -= 1;
                break;
            case 'D':
                if(index < result.length - 1) index += 1;
                break;
            case 'B':
                if(index !== 0){
                    result.splice(index - 1, 1);
                    index -= 1;
                }
                break;
            case 'P':
                result.splice(index, 0, m[1]);
                index += 1;
                break;
        }
    });
    result = result.join('');
    console.log(result);
    process.exit();
});