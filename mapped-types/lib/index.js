"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.origin = void 0;
// export type ReadOnly<T> = {
//    readonly [Key in keyof T]: T[Key]
// };
exports.origin = {
    x: 0,
    y: 0,
};
console.log(exports.origin);
var point = {};
var State = /** @class */ (function () {
    function State(current) {
        this.current = current;
    }
    State.prototype.update = function (next) {
        this.current = __assign(__assign({}, this.current), next);
    };
    return State;
}());
exports.State = State;
var state = new State({ x: 3, y: 4 });
state.update({ x: 43 });
state.update({ y: 4329487234 });
console.log('state ', state.current);
//# sourceMappingURL=index.js.map