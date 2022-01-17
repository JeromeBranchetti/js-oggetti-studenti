//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e eta.
const studente = {
    nome : 'Gianni',
    cognome : 'Rodari',
    eta : 23
}
//Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto.

console.log("Stampare in console attraverso un ciclo for tutte le proprietà dell’oggetto.");

for(key in studente){
    console.log(key);
    console.log(studente[key]);
};
console.log("***************");

//Creare un array di oggetti di studenti.
console.log("Creare un array di oggetti di studenti.");

const studente1 = {
    nome : 'Mattia',
    cognome : 'Cosenti',
    eta : 24
};
const studente2 = {
    nome : 'Giorgio',
    cognome : 'Cavalli',
    eta : 22
};
const studente3 = {
    nome : 'Giulia',
    cognome : 'Fornari',
    eta : 21
};

let listaStudenti = [studente1, studente2, studente3];
listaStudenti.push();

for(let i = 0; i < listaStudenti.length; i++){
    let selected = listaStudenti[i];
    console.log(selected['nome'] + ' ' + selected['cognome']);
    
};
console.log("***************");

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e eta. con le funzioni

console.log("Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e eta. con le funzioni");

function Studente(nome, cognome, eta ){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
}

function RegistraStudente(){
    let numero = prompt("Quanti studenti vuoi iscrivere?");
    let nuovaListaStudenti = new Array(numero);
    for(numero; numero > 0;numero--){
        let nome = prompt("Nome dello studente?");
        let cognome = prompt("Cognome dello studente?");
        let eta = prompt("eta dello studente?");


        nuovaListaStudenti[numero] = new Studente(nome, cognome, eta);
    }
    return nuovaListaStudenti;
}

const listaFInale = listaStudenti.concat(RegistraStudente());

for(let i = 0;i < listaFInale.length;i++){
    let selezionato = listaFInale[i];
    for(key in selezionato){
        console.log(selezionato[key]);
    }
}
console.log("***************");

//seconda versione del compito.

console.log("seconda versione del compito.");

let studenteDiverso = {};

studenteDiverso.nome = prompt("Nome dello studente");
studenteDiverso.cognome = prompt("Cognome dello studente");
studenteDiverso.eta = prompt("eta dello studente");

listaStudenti.push(studenteDiverso);

for(let j = 0; j < listaStudenti.length;j++){
    let geppetto = listaStudenti[j];
    for(pippo in geppetto){
        console.log(geppetto[pippo]);
    }
};
console.log("***************");
