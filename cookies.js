// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

/*
// check to see if you have cookies enabled
console.log(navigator.cookieEnabled);

// create our own cookie
document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 EST; path=/";
document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 EST; path=/";

// printing out the cookie
console.log(document.cookie);
*/

setCookie("firstName", "Spongebob", 365);
setCookie("lastName", "Squarepants", 365);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
// deleteCookie("lastName");
// deleteCookie("firstName");
// deleteCookie("email");

console.log(document.cookie);

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });

    return result;
}