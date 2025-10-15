// Step 1: Create a variable for the browser name
let browserName = "chrome"

// Step 2: Use an if-else statement to decide which browser to launch
if (browserName === "chrome") {
    console.log("Launching Chrome browser...")
} else {
    console.log("Launching default browser...")
}

// Step 3: Create a variable for the test type
let testType = "smoke"
//let testType = "sanity"
//let testType = "regression"
//let testType = "others"

// Step 4: Use a switch statement to choose which tests to run
switch (testType) {
    case "smoke":
        console.log("Running Smoke Tests...")
        break;
    case "sanity":
        console.log("Running Sanity Tests...")
        break;
    case "regression":
        console.log("Running Regression Tests...")
        break;
    default:
        console.log("Running Default Smoke Tests...")
        break;
}
