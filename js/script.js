var studente = {
    nome: 'Alessio',
    cognome: 'Piras',
    età: 24,
};

for (var x in studente) {
    console.log(x, studente[x])
};

var studenti = [];

while(3 !== studenti.length ){
    var nome = prompt('inserisci il nome dello studente')
    var cognome = prompt('inserisci il cognome dello studente')
    var età = prompt('inserisci l\'età dello studente')
studenti.push({
    nomeStudente:nome,
    cognomeStudente:cognome,
    etàStudente:età,
})
} 

for(var x in studenti){
    for(var y in studenti[x])
    console.log(y,studenti[x][y])
}

