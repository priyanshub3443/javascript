function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000);
    })
}

async function getWeaterData(params) {
    await api();
    await api();
}