// promise = an objects that manages asynchronous operations
//           wrap a promise object around {asynchronous code}
//           "i promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2 CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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
            const trashTakenOut = false;
            if(trashTakenOut) {
                resolve("you take out the trash 🗑️");
            }
            else{
                reject("you didn't take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finished all chores")})
         .catch(error => console.error(error));