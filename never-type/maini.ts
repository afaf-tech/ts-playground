
/* TypeScript introduced a new type never, which indicates the values that will never occur. */
/*
    The never type is used when you are sure that something is never going to occur. 
    For example, you write a function which will not return to its end point or always throws an exception.
 */

/* 
    difference between never and void = The void type can have undefined or null as a value 
    where as never cannot have any value.
*/

// will return never;
const fail = (message: string): never => {
    throw new Error(message);
}

// will return never;
const sing = function(): never {
    while(true){
        console.log('Never gonna give you up');
    }
}


// create inrterface 
interface Square{
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Rectangle | Circle;

// accept function within the area of Shape type
function area(s: Shape){
    if(s.kind === 'square'){
        return s.size * s.size;
    }else if(s.kind ==='rectangle'){
        return s.width * s.height;
    }else if(s.kind ==='circle') {
        return Math.PI * (s.radius **2);
    }
    const _ensureAllCasesAreHandledd: never = s;
}