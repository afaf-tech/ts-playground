"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxy = void 0;
function proxy(object, key) {
    return new Proxy(object, {
        get(target, prop, receiver) {
            if (prop === key) {
                console.log('getting', key, target[prop]);
            }
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            console.log('key', key);
            console.log('object', object);
            if (prop === key) {
                console.log('setting', key, value);
            }
            return Reflect.set(target, prop, value, receiver);
        }
    });
}
exports.proxy = proxy;
//# sourceMappingURL=proxy.js.map