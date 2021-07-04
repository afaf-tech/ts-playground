
/* Types 
    ->> Unions
    ->> Primitives 
    ->> Shorthand Functions
    ->> Advance Type Functions
 */

/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

// intersection
type IntersectionAB = typeA & typeB;

// union
type UnionAB = typeA | typeB;

let myData: UnionAB = {
  id: 1,
  propA: 'testA',
//   propB: 'testB',
};


/* Interface 
    ->> Declaration Merging
    ->> Familiarity
 */


    /**
 * Merge
 */

interface Song {
    songName: string;
  }
  
interface Song {
artistName: string;
}

const mySong: Song = {
artistName: 'Metallica',
songName: 'Enter Sandman',
};


// implements
export interface Point2D {
    x: number,
    y: number,
}

export interface Point3D extends Point2D {
    z: number,
}


export const point: Point3D = {
    x: 3,
    y: 32,
    z: 434,
}

export class Example implements Point3D {
    x=0;
    y=0;
    z=0;
}