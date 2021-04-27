const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = line;
}).on('close', ()=>{
    let oct = "";
    // 문자열의 길이가 3보다 크거나 같을때만 3자리씩 잘라서 10진수로 변환한다.
    while(input.length >= 3 ){
        oct = parseInt(input.slice(input.length-3), 2).toString(8) + oct;
        input = input.slice(0, input.length - 3);
    }

    // 문자열의 길이가 0이라는 것은 문자열의 길이가
    // 3으로 나누어 떨어진다는 것이다.
    if(input.length === 0){
        console.log("" + oct);
    // 문자열이 남아있을경우 남은 문자열을 10진수로 변환하여 oct앞에 추가해준다.
    } else {
        console.log(parseInt(input, 2).toString(8) + oct);
    }
    console.log(parseInt('1100', 2).toString(8));
    process.exit();
});
