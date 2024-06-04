const inventory = new Map();

function addItem(id, name, category, quantity){
    if(inventory.has(id)) {
        console.log(`Error: Item with ID ${id} already exists`);
    }else{
        inventory.set(id,{name, category,quantity});
        console.log("item added")
    }
}
