"use strict";
function test(a1, a2) {
    if (typeof a1 === 'string' && !a2) {
        return a1;
    }
    else if (typeof a1 === 'string' && typeof a2 === 'number') {
        let result = {
            name: a1,
            age: a2
        };
        return result;
    }
    else {
        return a1 + a2;
    }
}
let newUser = test('and', 14);
console.log(newUser);
