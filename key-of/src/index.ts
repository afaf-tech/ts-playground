import { proxy } from "./proxy";

function logAccess<T>(object: T, key: keyof T): T {
    return proxy(object, key);
}


const todo = logAccess({
    id: 2,
    text: 'buy milk',
}, 'text');


todo.text = 'Like & Subscribe';

console.log(todo);
