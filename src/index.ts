interface User {
    name: string;
    age: number;
}

function test(a1: string): string;
function test(a1: string, a2: number): User;
function test(a1: number, a2: number): number;

function test(a1: unknown, a2?: unknown): string | number | User{
    if (typeof a1 === 'string' && !a2) {
        return (a1 as string);
    } 
    else if (typeof a1 === 'string' && typeof a2 === 'number') {
        let result: User = {
            name: a1 as string,
            age: a2 as number
        }
        return result;
    } 
    else {
        return (a1 as number) + (a2 as number);
    }
}

let newUser = test('and', 14);

console.log(newUser);

