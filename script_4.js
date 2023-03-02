const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("Voici la liste des entrepreneurs nés dans les 70's")
entrepreneurs.forEach(seventies => {
  if (seventies.year < 1980 && seventies.year > 1969){
      console.log(seventies)
}});

console.log(`---------------------------------------------------`)

console.log("Voici le nom et prénom de tous les entrepreneurs")

stars = [];

entrepreneurs.forEach(contractors => {
  stars.push(contractors.first + ` ` + contractors.last)
});
console.log(stars)

console.log(`---------------------------------------------------`)

console.log("Voici l'âge qu'aurait tous les entrepreneurs aujourd'hui")
oldstars = []

entrepreneurs.forEach(actual => {
  oldstars.push(actual.first + ` ` + actual.last + ` a ` + (2022 - actual.year) + ` ans.`)
});
console.log(oldstars)

console.log(`---------------------------------------------------`)

console.log("Voici les noms des entrepreneurs par ordre alphabétique")
entrepreneurs.sort((a, b) => {
  if (a.last < b.last) {
    return -1;
  } else {
    return 1;
  };
});

entrepreneurs.forEach(alphabetical => {
  console.log(alphabetical.last + ` ` + alphabetical.first);    
});