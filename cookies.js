// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// check to see if you have cookies enabled
console.log(navigator.cookieEnabled);

// create our own cookie
document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 EST; path=/";
document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 EST; path=/";

// printing out the cookie
console.log(document.cookie);