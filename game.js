function createWorld(){
    const world = [];
    for (let i = 0; i < 100; i++){
        world.push('#');
    }
    return world;
}

function worldToString(world){
    let sWorld = "";
    for (let x of world){
        sWorld += x;
    }
    return sWorld;
}

let world = createWorld();
console.log(world)
console.log(worldToString(world))

document.getElementById("game").innerHTML = worldToString(world);