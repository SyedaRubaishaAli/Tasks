id_Data = [
    {
        name: "Jannat",
        id: "num01"
    },
    {
        name: "Ahmer",
        id: "num03"
    },
    {
        name: "Usman",
        id: "num02"
    },
    {
        name: "Ahmer",
        id: "num03"
    }
]
empty=[]
// function getData(name,id) {
//     // console.log(name);
//     // console.log(id);
//     // console.log("searching");

//     id_Data.forEach((user, i) => {
//         if (user.id == "num03") { 
//         if (user.name == "Ahmer") {
            
        
//         empty.push(user)
//         }
//     }
//     }
//     );
//     // console.log(empty);
// }
// getData("Ahmer","num03")

// array.forEach(element => {
    
// });

//Var can be overwrite or initiate b ho skta he 
var id1 = 1
// Let can be overwrite or initiate ni ho skta
let id2 = 2
// Const na e overwrite hoga na initiate hoga
const id3 = 3

console.log(id1);
// var id1 = 21350
console.log(id1);

console.log(id2);
 id2 = 21350
console.log(id2);



function name(params) {
    // ye local call ho rha he
     id1 = 1242
    console.log( id1);
}
name()

// ye global call ho rha he
console.log( id1);
//   id1 = 156420000
console.log( id1);