"use strict";
var Person = /** @class */ (function () {
    function Person(name, alamat) {
        this.name = name;
        this.alamat = alamat;
    }
    return Person;
}());
var person1 = new Person("fafa", "lala");
var person2 = new Person("tata", "rara");
var people = [person1, person2];
console.log(people);
var nana = people.map(function (data) { return { name: data.name }; });
console.log(people);
console.log("nana", nana);
//# sourceMappingURL=index.js.map