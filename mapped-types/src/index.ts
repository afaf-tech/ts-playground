export type Point = {
    x: number,
    y: number,
};

// export type ReadOnly<T> = {
//    readonly [Key in keyof T]: T[Key]
// };


export const origin: Readonly<Point> ={
    x: 0,
    y: 0,
}

console.log(origin);

// origin.x = 2; // Should Error


// Mapped advance Type
export type Coordinate ={
    readonly x: number,
    y?: number,
}

export type Mapped<T> = {
    -readonly [P in keyof T]+?: T[P] // - in modifier to remove from lookup type and  + is the opposite
}

export type Result= Mapped<Coordinate>;  // become x & y is optional and not readonly
const point: Result = {
}


export class State<T> {
    constructor (public current: T){}
    update(next: Partial<T>){ // partial 
        this.current = {...this.current, ...next};
    }
}


const state = new State({x: 3, y: 4});
state.update({x: 43})
state.update({y: 4329487234})

console.log('state ',state.current);
