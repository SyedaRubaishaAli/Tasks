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
function getData(name,id) {
    console.log(name);
    console.log(id);
    console.log("searching");

    id_Data.forEach((user, i) => {
        if (user.id == "num03") { 
        if (user.name == "Ahmer") {
            
        
        empty.push(user)
        }
    }
    }
    );
    console.log(empty);
}
getData("Ahmer","num03")

array.forEach(element => {
    
});

