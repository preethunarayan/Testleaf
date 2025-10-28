//  def function  fetchDataFromDatabase
function fetchDataFromDatabase() {
  // Return a Promise
  return new Promise((resolve, reject) => {
    //  3-second delay 
    setTimeout(() => {
      const data = true 
     // const data = false
      // If data is true, resolve the Promise
      if (data) {
        resolve("Data fetched successfully!")
      } else {
        // If data is false, reject the Promise
        reject("Data not found!")
      }
    }, 3000)
  })
}

// Call the function and handle the Promise
fetchDataFromDatabase()
  .then((message) => { 
    console.log(message); // Runs if Promise is resolved
  })
  .catch((error) => {
    console.log(error); // Runs if Promise is rejected
  });
