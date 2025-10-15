// Step 1: Create a variable for score

let score=85;

// Step 2: Use a switch statement to choose which tests to run
switch (true) {
    case (score>=90):
        console.log("Grade A")
        break;
    case (score>=80 && score<90):
        console.log("Grade B")
        break;
    case (score >= 70 && score < 80):
        console.log("Grade C")
        break;
    case (score >= 60 && score < 70):
        console.log("Grade D")
        break;
    default:
        console.log("Grade F")
        break;
}
