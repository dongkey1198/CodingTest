class Stack{
    constructor(array = []){
        this.array = array;
    }
    // 스택의 가장 마지막에 값을 밀어 넣는다.
    push(value){
        return this.array.push(value)
    }
    // 스택의 가장 마지막데이터, 즉 가장 마지막에 밀어 넣은 데이터를 꺼낸다
    pop(){
        return this.array.pop();
    }
    // 스택의 복사본 배열을 반환한다.
    // 스택안에 존재하는 값들을 entries 함수로 반환 받아 확인한다.
    entries(){
        return[...this.array];
    }
}

const stack = new Stack([1, 2]);
console.log(stack.entries());   //[1, 2]

stack.push(3);
console.log(stack.entries());   //[1, 2, 3]

stack.pop();
console.log(stack.entries());   //[1, 2]