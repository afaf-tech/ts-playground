"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_1 = require("./proxy");
function logAccess(object, key) {
    return proxy_1.proxy(object, key);
}
const todo = logAccess({
    id: 2,
    text: 'buy milk',
}, 'text');
todo.text = 'Like & Subscribe';
console.log(todo);
//# sourceMappingURL=index.js.map