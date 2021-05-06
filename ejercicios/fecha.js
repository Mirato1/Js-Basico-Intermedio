let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
let f =new Date();
document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

const nacimiento = new Date (2000, 10, 17)


function diasEntreFechas(fecha1, fecha2){
  const unDia = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2);

  return Math.floor(diferencia / unDia);
}
