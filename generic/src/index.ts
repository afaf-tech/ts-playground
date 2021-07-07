
class Person {
    name: string;
    alamat: string;
    constructor(name: string, alamat: string){
        this.name = name;
        this.alamat = alamat;
    }
}

const person1 = new Person("fafa", "lala")
const person2 = new Person("tata", "rara")

const people: Person[] = [person1, person2];

console.log(people);

//mapper
interface IPerson {
    nami: string;
}

const nana = people.map<IPerson>((data) => {return {nami: data.name}});

console.log(people);
console.log("nana", nana);
