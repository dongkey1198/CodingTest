const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = line;
}).on('close', ()=>{
    let binary = '';
    
    while(input.length > 0){
        // 뒤에 숫자부터 순차적으로 2진수로 변환한다.
        let tmp = parseInt(input.slice(input.length-1), 8).toString(2);
        // 만약 변환한 2진수의 길이가 3보다 작고 input에 남은 숫자의 개수가 1개 보다 많으면
        // 2진수를 가지고있는  tmp의 문자열의 길이가 3이될때까지 문자 '0'을 tmp 가장앞에 추가해준다.
        if(tmp.length < 3 && input.length !== 1){
            while(tmp.length !== 3){
                tmp = '0'+tmp;
            }
        }
        binary = tmp + binary;
        // 문자열 맨뒤에값을 없에준다.
        input = input.slice(0, input.length-1); 
    }
    console.log(binary);
    process.exit();
});

