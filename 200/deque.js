const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Deque {
    constructor() {
        this.arr = [];
        this.rear = 0;
    }

    push_front(item){
        this.arr.unshift(item);
        this.rear += 1;
    }

    push_back(item){
        this.arr[this.rear] = item;
        this.rear += 1;
    }

    pop_front(){
        if(this.arr.length > 0){
            this.rear -= 1;
            return this.arr.shift();
        }
        return -1;
    }

    pop_back(){
        if(this.arr.length > 0){
            this.rear -= 1;
            return this.arr.pop();
        }
        return -1;
    }
    size(){
        return this.arr.length;
    }
    empty(){
        if(this.arr.length > 0){
            return 0;
        }
        return 1;
    }
    front(){
        if(this.arr.length > 0){
            return this.arr[0];
        }
        return -1;
    }
    back(){
        if(this.arr.length > 0){
            return this.arr[this.arr.length - 1];
        }
        return -1;
    }
}

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // 명령어의 수는 사용하지 않을것이기 때문에 shift()를 사용하여 제거한다.
    input.shift();

    const deque = new Deque();
    let result = '';

    input.map(el => {
        let cmd = el.split(' ');
        switch(cmd[0]){
            case 'push_front':
                deque.push_front(cmd[1]);
                break;
            case 'push_back':
                deque.push_back(cmd[1]);
                break;
            case 'pop_front':
                result += `${deque.pop_front()}\n`;
                break;
            case 'pop_back':
                result += `${deque.pop_back()}\n`;
                break;
            case 'size':
                result += `${deque.size()}\n`;
                break;
            case 'empty':
                result += `${deque.empty()}\n`;
                break;
            case 'front':
                result += `${deque.front()}\n`;
                break;
            case 'back':
                result += `${deque.back()}\n`;
                break;
        }
    })
    console.log(result);
    process.exit();
});