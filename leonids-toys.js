const jacks = {
    id: 1,
    name: "Jacks",
    maker: "Janedoe",
    price: 900,
   
}

const legos = {
    id: 2,
    name: "Legos",
    maker: "Walmart",
    price: 600,
    
}

const bear = {
    id: 3,
    name: "Bear",
    maker: "Mattel",
    price: 600,
    
}

const goo = {
    id: 4,
    name: "Goo",
    maker: "Aliens",
    price: 230,
    
} 

const doll = {
    id: 5,
    name: "Doll",
    maker: "Barbie",
    price: 550,
    
}


const toys = [
    {
    id: 1,
    name: "Jacks",
    maker: "Janedoe",
    price: 900,

    },

    {
    id: 2,
    name: "Legos",
    maker: "Walmart",
    price: 600,
    },

    {
    id: 3,
    name: "Bear",
    maker: "Mattel",
    price: 600,
}

]

toys.push(goo)
toys.push(doll)

console.log(toys)

// display a catalog of items using string int, dot and for, of

for (const toy of toys){
    console.log (toy.name)
}

// Add 5% cost to the price of each toy
    for (const toy of toys) {
        toy.price = toy.price * 1.05
    
       
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
    }