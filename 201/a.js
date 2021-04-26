function isPrime(arr){
    // 0과 1은 소수가 아니다 그러므로 false을 제할당
    arr[0] = false;
    arr[1] = false;
    // 정수 2부터 20까지의 숫자중 소수를 찾아내보자
    for(let i = 2; i < arr.length; i++){
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                arr[i] = false;
                break;
            }
        }
    }
    return arr;
}


// 길이 21인 배열 0~20까지의 index넘버를 가지는 배열을 생성후 false값을 할당
const array = new Array(21).fill(true);
let result = isPrime(array);
for(let i = 0; i < result.length; i++){
    if(result[i]){
        console.log(i); // 0~20 사이의 소수: 2,3,5,7,11,13,17,19(8개)
    }
}