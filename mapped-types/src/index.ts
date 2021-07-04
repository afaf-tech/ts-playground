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