// 1 - Dare la possibilità di inserire il nome

let first_name = prompt('Inserisci il tuo nome');
console.log(first_name);

// 2 - Dare la possibilità di inserire il cognome

let last_name = prompt('Inserisci il tuo cognome');
console.log(last_name);

// 3 - Dare la possibilità di inserire il colore preferito

let favourite_color = prompt('Inserisci il tuo colore preferito');
console.log(favourite_color);

// 4 - Concatenare le informazioni e aggiungere a fine stringa il numero 21

let generated_password = first_name + last_name + favourite_color + '21';
console.log(generated_password);
document.getElementById('your-password').innerHTML = generated_password;

// 5 - Visualizzare il risultato