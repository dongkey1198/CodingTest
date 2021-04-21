const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let N = parseInt(input.shift());
    let arr = input.shift().split('');
    let numbers= input.map(num => parseInt(num));
    let stack = [];
    
    for(let i = 0; i < arr.length; i++){
        // 알파벳은 모두 대문자이며 A 부터 Z까지 순차적으로 나온다.
        // 아스키 코드값을 이용하여 해당 알파벳의 인덱스 값을 구하고 해당 값들을 스택에 저장한다.
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90){
            stack.push(numbers[arr[i].charCodeAt(0) - 65]);
        } 
        else{
            // 스택에 순차적으로 값들이 저장된 상태이다 연사자가 나올경우 스택에 마지막에 추가된 값과
            //  그전에 추가된 값을 pop() 한다.
            let num2 = stack.pop();
            let num1 = stack.pop();
            // 연사자에 따라 계산을하고 결과값을 다시 스택에 push() 해준다.
            //  마지막에는 스택에 오직 결과값만 남게된다.
            switch(arr[i]){
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(num1 / num2);
                }
            }
        }
    
    // stack에 남아있는 결과값을 소수 2번째 자리 까지 출력하기위해
    // toFixed()를 사용한다 2는 소수 두째 자리 까지 출려하겠다는 의미이다.
    console.log(stack[0].toFixed(2));
    process.exit();
});