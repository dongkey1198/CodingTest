const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split('');
}).on('close', ()=>{
    // 각 부호별로 우선순위를 매겨준다.
    const op = {
        '(': 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        ')': 3
    };
    let stack = [];
    let result = '';
    
    for(let i = 0; i < input.length; i++){
        // 만약 해당 문자가 op객체안에 존재하지 않을경우 결과값에 추가한다.
        if(op[input[i]] === undefined){
            result += `${input[i]}`;
        } 
        // ( 일경우 스택에 추가한다.
        else if(input[i] === '('){
            stack.push(input[i]);
        }
        // 문자 ) 일경우 문자 ( 가나올때까지 스택 맨위에 존재하는 값들을 결과값에 추가한다.
        // 문자 ) 가나온후 결과 값에 추가된 값들은 우선순위가 높은 걸로 자동 측정되어 먼저 출력된다.
        else if(input[i] === ')'){
            while(true){
                let tmp = stack.pop();
                if(tmp === '(') break;
                result += `${tmp}`;
            }
        }
        // 나머지 경우는 +,-,*,/ 가 나온 경우이다.
        else {
            //스택의 길이가 0이 아니고 스택 가장위에 존재하는 문자의 우선순위가
            //현재 문자의 우선순위 보다 높은경우, 스택 가장 위에있는 값을 결과값에 추가한다.
            //스택의 길이가 0이거나 현재 문자의 우선순위가 스택 가장위의 값보다 클경우는
            //그냥 스택에 현재값을 추가해준다.
            while(stack.length > 0 && op[stack[stack.length-1]] >= op[input[i]]){
                result += `${stack.pop()}`;
            }
            stack.push(input[i]);
        }
    }
    // 괄호 밖에 존재하는 + - * / 들은 갈호 안의 값들 보다 우선순위가 낮다
    // 또한 결과 값에 추가되 지않은 상태임으로 나머지 값들을 순차적으로 결과값에
    // 추가해준다.
    while(stack.length > 0){
        result += `${stack.pop()}`;
    }
    console.log(result);
});