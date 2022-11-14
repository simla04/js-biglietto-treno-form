//  Scrivere un programma che chieda all’utente:
//  - Il numero di chilometri da percorrere
//  - Età del passeggero
//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  - va applicato uno sconto del 20% per i minorenni
//  - va applicato uno sconto del 40% per gli over 65.
//  MILESTONE 1:
//  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), //  realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
//  MILESTONE 2:
//  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà //  inserire i dati e visualizzare il calcolo finale con il prezzo.
//  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con //  massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
_______________________________________________________________________

//let Kilometers = prompt('Quanti kilometri deve fare?');
   // let EtaPersona = parseInt(prompt("Quanti anni ha?"));
   // const priceKm = 0.21;
   // let ticketprice = Kilometers * priceKm; 


    //biglietto con sconto del 20%
   // let Discount20 = ticketprice - (ticketprice * 0.2);

    //biglietto con sconto del 40%
   //let Discount40 = ticketprice - (ticketprice * 0.4);


   // if (EtaPersona <=18){
   // ticketprice = Discount20.toFixed(2);
   // }
  //  else if(EtaPersona >= 65){
   // ticketprice = Discount40.toFixed(2);
   // }
   // else{
   // ticketprice
   // }
   // document.getElementById('prezzo-biglietto').innerHTML = `Il prezzo //del biglietto è:  ${ticketprice} Є`;

   let nameUser = document.getElementById('nameUser').value;
   let Km = document.getElementById('Km').value;
   let EtaPersona = document.getElementById('EtaPersona').value;
   // let nameUser = document.getElementById('nameUser').value;
   // let nameUser = document.getElementById('nameUser').value;


   //
   if (EtaPersona <=18){
ticketprice = Discount20.toFixed(2);
}
   else if(EtaPersona >= 65){
ticketprice = Discount40.toFixed(2);
}
else{
ticketprice
}