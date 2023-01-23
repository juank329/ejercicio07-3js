//- La fecha de hoy dia
let hoy = new Date();
let dia = hoy.getDate();
console.log(dia);

//segunda opcion completa
let hoy2 = new Date();
console.log(hoy2);


//- La fecha de tu nacimiento
let cumpleanyo = new Date(1980, 4, 17);
console.log(cumpleanyo)


//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let esTarde = hoy2 > cumpleanyo;
console.log(esTarde);

//- Una variable que contenga el día de tu nacimiento
let diaCumple = cumpleanyo.getDate();
console.log(diaCumple);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesCumple = cumpleanyo.getMonth();
console.log(mesCumple +1 );


//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anhoCumple = cumpleanyo.getFullYear();
console.log(anhoCumple);
