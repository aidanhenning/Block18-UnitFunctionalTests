// ----- UNIT TESTS -----
// Expect [action] to be ...

// 1. Expect [result] to be a * b
    // a) Expect [userInput(a, b)] to be typof number
    // b) Expect [userInput(a, b)] to be separated by ","
    // c) Expect [userInput(a, b)] to be only two numbers
    // d) Expect [result] to be typof number
    // e) Expect [result] to be one number
// 2. Expect [result] to be single array, all odds
    // a) Expect [userInput(arr1, arr2)] to be two arrays
    // b) Expect [userInput(arr1, arr2)] to contian typeof number
    // c) Expect [userInput(arr1, arr2)] to be separated by ","
    // d) Expect [return] to be single array
    // e) Expect [return] to be only odds
    // f) Expect [return] to be ascending numbers
    // g) Expect [return] to contain typeof number
    // h) Expect [return] to be separated by ","

    // i) Expect [userInput(arr1, num)] to be error
    // j) Expect [userInput("arr1, arr2")] to be error
    // k) Expect [userInput([1,2,3,4,5], [3,5,7,9])] to output each number once


// ----- FUNCTIONAL TESTS -----
// When a user [does something with some paramters], [some thing should happen]

// 1. When a user in in checkout, if logged in, checkout page should autofill payment information, else if guest, should leave black and prompt login/account setup
    // a) When a user is not logged in, checkout should process as normal
    // b) When a user is not logged in, the user should be prompted to log in or sign up before submitting payment
    // c) When a user is not logged in, shipping and payment information should not autofill
    // d) When a user is not logged in, the user should not receive a members discount

    // e) When a user is logged in, checkout should process as normal
    // f) When a user is logged in, shipping and payment information should autofill
    // g) When a user is logged in, the user should receive a members discount
    // h) When a user is logged in, the checkout page should update with personalized messages using the users first name
    // i) When a user is logged in, the checkout page should suggest previously purchased items to add in the cart