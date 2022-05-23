let input = window.prompt("Answer Grandma!");
let goodbyeCount = 0;

// function deafGrandma(input) {
//   console.log(goodbyeCount);
if (input.length === 0) {
  console.log("WHAT?!");
  input;
} else if (input === input.toLowerCase()) {
  console.log("SPEAK UP, KID!");
} else if (input === input.toUpperCase() && input != "GOODBYE!") {
  console.log("NO, NOT SINCE 1946!");
} else if (input === "GOODBYE!" && goodbyeCount === 0) {
  goodbyeCount++;
  console.log("LEAVING SO SOON?");
} else if (input === "GOODBYE!" && goodbyeCount > 0) {
  console.log("LATER SKATER!");
}
// }
