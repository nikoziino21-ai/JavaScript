console.log("ESERCIZIO 1");
const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25,
    citta: "Roma"
};
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}.`);

console.log("ESERCIZIO 2");
persona.email = "mario.rossi@gmail.com";
delete persona.eta;
console.log(persona);

console.log("ESERCIZIO 3");
const utente = {
    indirizzo: {
        via: "Via Roma 1",
        citta: "Milano",
        cap: "20100"
    }
};
console.log(`CAP: ${utente.indirizzo.cap}`);

console.log("ESERCIZIO 4");
const chiave = "nome";
console.log(`Valore di ${chiave}: ${persona[chiave]}`);

console.log("ESERCIZIO 5");
const a = 12;
const b = 19;
const c = 19;
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} else if (a === b && a > c) {
    console.log(`Pareggio (con a=${a}, b=${b})`);
} else if (a === c && a > b) {
    console.log(`Pareggio (con a=${a}, c=${c})`);
} else if (b === c && b > a) {
    console.log(`Pareggio (con b=${b}, c=${c})`);
} else {
    console.log("Pareggio");
}

console.log("ESERCIZIO 6");
const totaleCarrello = 35;
let costoSpedizione;
if (totaleCarrello >= 50) {
    costoSpedizione = 0;
} else {
    costoSpedizione = 9.90;
}
let totaleFinale = totaleCarrello + costoSpedizione;
console.log(`Totale carrello: ${totaleCarrello}€ - Spedizione: ${costoSpedizione}€ - Totale finale: ${totaleFinale}€`);

costoSpedizione = totaleCarrello >= 50 ? 0 : 9.90;
totaleFinale = totaleCarrello + costoSpedizione;
console.log(`Totale carrello: ${totaleCarrello}€ - Spedizione: ${costoSpedizione}€ - Totale finale: ${totaleFinale}€`);

console.log("ESERCIZIO 7");
let totaleIniziale = 100;
let sconto = totaleIniziale * 0.30;
let totaleScontato = totaleIniziale - sconto;
let spedizioneSconto = totaleScontato >= 50 ? 0 : 9.90;
let finaleSconto = totaleScontato + spedizioneSconto;
console.log(`Sconto applicato: -${sconto}€ - Totale finale: ${finaleSconto}€`);
console.log(`(con totale=${totaleIniziale})`);

console.log("ESERCIZIO 8");
const valori = [42, "ciao", true];
for (let i = 0; i < valori.length; i++) {
    const x = valori[i];
    if (typeof x === "number") {
        console.log(`${x} è un numero`);
    } else {
        console.log(`${x} non è un numero`);
    }
}

console.log("ESERCIZIO 9");
const numeri = [];
numeri.push(1, 2, 3, 4, 5);
numeri.unshift(0);
console.log(numeri);
console.log(`Lunghezza: ${numeri.length}`);

console.log("ESERCIZIO 10");
numeri[numeri.length - 1] = 100;
console.log(numeri);

console.log("ESERCIZIO 11");
const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];
console.log(carrello);
carrello.splice(1, 1, "Diario");
console.log(carrello);
console.log(carrello); // Ripetuto per rispecchiare l'output di sequenza atteso

console.log("ESERCIZIO 12");
const prodotti = ["Penna", "Quaderno", "Zaino"];
const cercato = "Zaino";
console.log(`${cercato} è in carrello: ${prodotti.includes(cercato)}`);
const posizione = prodotti.indexOf(cercato);
if (posizione !== -1) {
    console.log(`Posizione: ${posizione}`);
} else {
    console.log("Non in carrello");
}

console.log("ESERCIZIO 13");
const utenti = [
    { nome: "Mario", eta: 25 },
    { nome: "Lucia", eta: 30 },
    { nome: "Anna", eta: 22 }
];
for (let i = 0; i < utenti.length; i++) {
    console.log(`${utenti[i].nome} (${utenti[i].eta} anni)`);
}
console.table(utenti);

console.log("ESERCIZIO 14");
for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].eta >= 18) {
        console.log(`${utenti[i].nome} (${utenti[i].eta} anni) - maggiorenne`);
    }
}

console.log("ESERCIZIO 15");
const inventario = [
    { nome: "Penna", prezzo: 1.5, disponibile: true },
    { nome: "Quaderno", prezzo: 4, disponibile: true },
    { nome: "Zaino", prezzo: 25, disponibile: false },
    { nome: "Astuccio", prezzo: 12, disponibile: true }
];
for (let i = 0; i < inventario.length; i++) {
    const p = inventario[i];
    if (p.disponibile && p.prezzo < 10) {
        console.log(`OFFERTA: ${p.nome} (${p.prezzo}€)`);
    } else if (p.disponibile && p.prezzo >= 10) {
        console.log(`${p.nome} - ${p.prezzo}€`);
    } else {
        console.log(`${p.nome} - esaurito`);
    }
}

console.log("ESERCIZIO 16");
const originale = [1, 2, 3, 4, 5];
const inverso = [];
for (let i = originale.length - 1; i >= 0; i--) {
    inverso.push(originale[i]);
}
console.log(inverso);
