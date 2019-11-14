var km = parseInt(prompt("Inseririre i kilometri"));
console.log(km);

var età = parseInt(prompt("Inserire l'età"));
console.log(età);

var prezzo = km + età;
var prezzo = (km + età) * 0.21;
if (età < 18) {
    var prezzo = (prezzo * 20) / 100;
} else if (età > 65) {
    var prezzo = (prezzo * 20) / 100;
} else if (età < 65 > 18) {
    var prezzo = (prezzo);
}
console.log(prezzo);
