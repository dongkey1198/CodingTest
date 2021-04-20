const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input = line.split("");
}).on('close', function(){
    let result = '';
    let reverse = true;
    let stack = [];
    while(input.length > 0){
        let tmp = input.shift();
        switch(tmp){
            case '<':
                if(stack.length !== 0 && reverse === true){  //스택에 값이 존재하고 reverse 값이 true 일경우
                    result += `${stack.reverse().join('')}`; //배열을 reverse하고 문자열로 변환 후 result에 추가
                    stack = [];                              //스택 배열을 초기화 해준다.
                }
                result += `${tmp}`;                          // < 를 result에 추가한다.
                reverse = false;                             // <가 나온 시점부터는 TAG임으로 Reverse를 false로 변경
                break;
            case '>':                                       
                result += `${tmp}`;                         // >를 result에 추가한다.
                reverse = true;                             // >가 나혼 이후부터는 무자열이 TAG가 아님으로 Reverse를 True로 변경
                break;      
            case ' ':
                if(stack.length !== 0 && reverse === true){ // 스택에 값이 존재하고 reverse 값이 true 일경우
                    result += `${stack.reverse().join('')}`;// 문자열다음 공백이 나올경우 이는 문자열의 끝을 의미함으로 
                    stack = [];                             // 배열을 reverse하고 문자열로 변환 후 result에 추가하고 배열을 초기화
                }
                result += ' ';
                break;
            default:
                if(!reverse){           //reverse값이 false 일경우 모든 문자를 result에 추가시킨다.
                    result += `${tmp}`;
                } else {                //reverse값이 true일경우 이는 문자열의 문자를 의미함으로 
                    stack.push(tmp);    //뒤집기를 하기위해 stack에 순차적으로 추가한다.
                }
                break;
        }
    }
    if(stack){
        result += `${stack.reverse().join('')}`; 
    }
    console.log(result);
    process.exit();
});