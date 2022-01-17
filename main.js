//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

const studente = {
    nome : 'Gianni',
    cognome : 'Rodari',
    età : 23
}

//Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto.
for(key in studente){
    console.log(key);
    console.log(studente[key]);
};

//Creare un array di oggetti di studenti.
const studente1 = {
    nome : 'Mattia',
    cognome : 'Cosenti',
    età : 24
};
const studente2 = {
    nome : 'Giorgio',
    cognome : 'Cavalli',
    età : 22
};
const studente3 = {
    nome : 'Giulia',
    cognome : 'Fornari',
    età : 21
};

let listaStudenti = [studente1, studente2, studente3];
listaStudenti.push();

for(let i = 0; i < listaStudenti.length; i++){
    let selected = listaStudenti[i];
    console.log(selected['nome'] + ' ' + selected['cognome']);
    
};

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. con le funzioni


function Studente(nome, cognome, età ){
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
}

function RegistraStudente(){
    let numero = prompt("Quanti studenti vuoi iscrivere?");
    let nuovaListaStudenti = new Array(numero);
    for(numero; numero > 0;numero--){
        let nome = prompt("Nome dello studente?");
        let cognome = prompt("Cognome dello studente?");
        let età = prompt("Età dello studente?");


        nuovaListaStudenti[numero] = new Studente(nome, cognome, età);
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

//seconda versione del compito.

let studenteDiverso = {};

studenteDiverso.nome = prompt("Nome dello studente");
studenteDiverso.cognome = prompt("Cognome dello studente");
studenteDiverso.eta = prompt("Età dello studente");

listaStudenti.push(studenteDiverso);

for(let j = 0; j < listaStudenti.length;j++){
    for(pippo in listaStudenti){
        console.log(listaStudenti[pippo]);
    }
};