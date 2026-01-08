// async/await = async = makes a function return a promise
//               await = makes an async function wait for a promise

//               allows you to write asynchronous code in a synchronous manner
//               async doesn't have resolve or reject parameters
//               everything after await is placed in an event queue

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("you walk the dog 🦮");
            }
            else{
                reject("you didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned) {
                resolve("you clean the kitchen 🧹");
            }
            else{
                reject("you didn't clean the kitchen");
            }
        }, 1500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("you take out the trash 🗑️");
            }
            else{
                reject("you didn't take out the trash");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("you finished all the chores");
    }
    catch(error) {
        console.error(error);
    }
}

doChores();