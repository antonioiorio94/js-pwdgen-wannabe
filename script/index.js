const nomeUtente = prompt("Inserisci il tuo nome");

document.getElementById('nome').innerText = nomeUtente;


const cognomeUtente = prompt("Inserisci il tuo cognome");

document.getElementById("cognome").innerText = cognomeUtente;


const colorePreferito = prompt("Dimmi il tuo colore preferito");

document.getElementById("colore").innerText = colorePreferito;

const nuovaPassword = (nomeUtente + cognomeUtente + colorePreferito + "21");

console.log(nuovaPassword);

document.getElementById("password").innerText = nuovaPassword;