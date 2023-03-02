const n = (prompt('De quelle nombre veux-tu calculer la factorielle  : '));

let string = "";
for (let i = 1; i <= n; i++) {
  // spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // stars
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(`Voici une belle pyramide de ${n} étages
${string}`);