// .toLocalString() = returns a string with a language
//                    sensitive representation of a number

// Intl.NumberFormat()

// number.toLocaleString("locale", {options});

// 'locale' = specify the language (undefined = default set in browser)
// 'options' = object with formatting options

let number = 123456.789;

// number = number.toLocaleString("en-US"); // usa
// number = number.toLocaleString("hi-IN"); // india
// number = number.toLocaleString("de-DE"); // germany
// number = number.toLocaleString(undefined); // usa(default)

// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"}); // usa currency format
// number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // india currency format
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // germany currency format

console.log(number);