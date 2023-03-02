const number = parseInt(prompt('De quelle nombre veux-tu calculer la factorielle  : '));

// if number is negative
if (number < 0) {
    console.log('Branche les neuronnes et réessaye avec un nombre');
}

// if number is 0
else if (number === 0) {
    console.log(`La factorielle de ${number} est 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`La factorielle de ${number} est ${fact}`);
}