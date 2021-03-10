let arr = [];  

function init(){
    for(let i = 1; i <= 10000; i++){
        arr.push(i);
    }

    for(let i = 1; i <= 10000; i++){
        let n = calculate(i);
        if(n <= 10000){
            arr[n-1] = 0; 
        }
    }
    let answer = "";
    arr.forEach(n => {
        if(n !== 0){
            answer += `${n}\n`;
        }
    });
    console.log(answer);
}


function calculate(num){
    let n = num;
    while(num > 0){
        n += num % 10;
        num = parseInt(num/10);
    }
    return n;
}

init();