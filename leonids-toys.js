
const toys = [
    rubix = {
        id: 1, 
        name: "rubix cube",
        price: 8,
        description: "a small cubic puzzle",
        shape: "cube",
        batteries: false,
        choke_hazard: false
    },
    
    nutcracker = {
        id: 2, 
        name: "Nutcracker King",
        price: 2,
        description: "a tall wooden figure of the Nutcracker King with moving jaw",
        shape: "human",
        batteries: false,
        choke_hazard: true
    },
    
    yoyo = {
        id: 3, 
        name: "Yo-yo",
        price: 15,
        description: "a small wooden yo-yo on a twine fiber",
        shape: "circular",
        batteries: false,
        choke_hazard: false

    }
]

// console.log(toys)

// for (const toy of toys) {
//     console.log(toy.name)
// }

top = {
    id: 4,
    name: "Spinning Top",
    price: 7,
    description: "a small plastic colored spinning object",
    shape: "conical",
    batteries: false,
    choke_hazard: true
}

rope = {
    id: 5,
    name: "LED jump rope",
    price: 10,
    description: "limited edition led light up jump rope",
    batteries: true,
    choke_hazard: false
}

toys.push(top)
toys.push(rope)

// console.log(toys)

// for (const toy of toys){
//     console.log(`Only ${toy.inventory} for the ${toy.description} ${toy.name}!`)
// }

// const toyOfChoice = 3

// for (const toy of toys){
//     if (toy.id === toyOfChoice){
//     toy.price = toy.price * 1.05
//     console.log(`The ${toy.description} ${toy.name} cost $${toy.price}!`)
// }
// }

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

matt = {
    name: "Playtime ground matt",
    price: 20,
    description: "neatly woven vegan organic playtime matt",
    batteries: false,
    choke_hazard: false
}

addToyToInventory(matt)

for (const toy of toys) {
    console.log(`The ${toy.description} ${toy.name} costs ${toy.price} dollars. To say it is a choking hazard would be ${toy.choke_hazard}.`)
}

console.log(toys)

