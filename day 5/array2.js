let items=[250, 645, 300,  900, 50];

let i=0;
for(let val of items){
    let offer = val/10;
    items[i]=items[i] -offer;
    console.log(`value after ofer = ${items[i]}`);
    i++;
}