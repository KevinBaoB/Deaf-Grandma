function deafGrandma(input) {
  console.log(goodbyeCount);
  if (input.length === 0) {
    return "WHAT?!";
  } else if (input === input.toLowerCase()) {
    return "SPEAK UP, KID!";
  } else if (input === input.toUpperCase() && input != "GOODBYE!") {
    return "NO, NOT SINCE 1946!";
  } else if (input === "GOODBYE!" && goodbyeCount === 0) {
    goodbyeCount++;
    return "LEAVING SO SOON?";
  } else if (input === "GOODBYE!" && goodbyeCount > 0) {
    return "LATER SKATER!";
  }
}
let goodbyeCount = 0;

console.log("hi, grandma");

console.log("I SAID HI, GRANDMA");

console.log(deafGrandma("GOODBYE!"));

console.log(deafGrandma("GOODBYE!"));
