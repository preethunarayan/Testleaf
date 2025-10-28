
let browser = "Chrome"


function checkBrowserVersion(callback) {
  //  setTimeout to delay 2 sec
  setTimeout(() => {callback(browser)}, 2000)
}

// callback function that displays the browser version to the console
function displayBrowserVersion(version) {
  console.log("Browser version is:", version)
}

// Call checkBrowserVersion and pass the callback function
checkBrowserVersion(displayBrowserVersion)
