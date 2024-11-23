let promise = new Promise((resolve, reject)=>{
    console.log("I am a promise");
    resolve();
})

function getData(dataid,getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            resolve("SUccess");
            if(getNextData){
                getNextData();
            }
        }, (5000));
    })
}

// function getData(dataid, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataid);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }