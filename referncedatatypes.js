
//objects
//objects are used to store multiple values in a single variable 
var user = {
    name: "Anvesh",
    age: 22,
    height: 5.8,
    isStudent: true
};

console.log(user.name);
var user2 = {
    name: "Raju",
    age: 22,
    height: 5.6,
    isStudent: false
};
console.log(user2.name);

//nested objects
var user3 = {
    name: "datta",
    age: 22,
    height: 6.0,
    isStudent: false,
    address: {
        street: "Bapatla",
        city: "India",
        state: "Andhra Pradesh",
    },
    family: {
        father: "Ramu",
        mother: "Sita"

    }

};
console.log(user3.family.father);
console.log(user3.address.city);

//arrays

//arrays can store multiple values in a single variable
//arrays are two types: homogeneous and heterogeneous
//mostly arrays are homogeneous
//heterogeneous arrays are used rarely 

var grocerylist = [
    {
        item: "milk",
        quantity: 2,
        price: "$1"
    },
    {
        item: "bread",
        quantity: 1,
        price: "$2"
    },
    {
        item: "eggs",
        quantity: 12,
        price: "$3"
    }

];

console.log(grocerylist[0].item);
console.log(grocerylist[1].item);
console.log(grocerylist[2].item);
