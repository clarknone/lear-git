let person = {
    name: "Sixtus",
    place: {
        country: "Nigeria", 
        city: "Lagos" }, 
    friends : ["Annie", "Becky"]
};

let {name:foo,
     place: {
         country : bar,
         city : village}
    } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"