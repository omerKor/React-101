const users = ["Mehmet", "Ahmet", "Murat"];

const usersObj = [
    {
        name: "Mehmet",
        age:20,
    },
    {
        name: "Ahmet",
        age:21,
    },
    {
        name: "Murat",
        age:22,
    }
];
/*
 push
 map
 find
 filter
 some
 every
 includes
*/

// push
users.push("Ali");
users.push("Ömer");
console.log(users);
console.info("===========");

// map
users.map((item) => {
    console.log(item);
});
console.info("===========");
usersObj.map((item) => {
    console.log(item.name);
});
console.info("===========");

// find
const result = usersObj.find((item)=> item.name === "Mehmet" && item.age > 19);
console.log(result);
console.info("===========");

// filter
const filtered1 = usersObj.filter((item)=> item.name==="Mehmet" && item.age < 21);
const filtered2 = usersObj.filter(({name, age})=> name==="Mehmet" && age < 21); //alternatif tanımlama
console.log(filtered1);
console.log(filtered2);
console.info("===========");

// some
const some = usersObj.some((item) => item.age ===20);
console.log(some);
console.info("===========");

// every
const every = usersObj.every((item) => item.age ===20);
console.log(every);
console.info("===========");

//includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal");
console.log(isIncluded);

