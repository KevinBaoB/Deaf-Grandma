let goodbyeCount = 0;
// let convo = true;

// function deafGrandma(input) {
//   console.log(goodbyeCount);
function deafGrandma() {
  let input = window.prompt("Answer Grandma!");
  let lower = input.toLowerCase();

  if (input.length === 0) {
    alert("WHAT?!");
    deafGrandma();
  } else if (input.includes(lower)) {
    alert("SPEAK UP, KID!");
    deafGrandma();
  } else if (input === input.toUpperCase() && input != "GOODBYE!") {
    alert("NO, NOT SINCE 1946!");
    deafGrandma();
  } else if (input === "GOODBYE!" && goodbyeCount === 0) {
    goodbyeCount++;
    alert("LEAVING SO SOON?");
    deafGrandma();
  } else if (input === "GOODBYE!" && goodbyeCount > 0) {
    alert("LATER SKATER!");
    // convo = false;
  }
}
// }
deafGrandma();
