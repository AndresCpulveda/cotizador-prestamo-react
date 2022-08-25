export const calcularIntereses = (cantidad, plazo) => {
  /*Cantidades
  0 - 1000 = 25%
  1001 - 5000 = 20%
  5001 - 10000 = 15%
  +10000 = 10% */

  let intereses = 0;
  if(cantidad <= 1000) {
    intereses = cantidad * 0.25
  }else if(cantidad <= 5000) {
    intereses = cantidad * 0.2
  }else if(cantidad <= 10000) {
    intereses = cantidad * 0.15
  }else if(cantidad > 10000) {
    intereses = cantidad * 0.1
  }
  /*
  Calcular plazo
  3 = 5%
  6 = 10%
  12 = 15%
  24 = 20%
  */
  let interesPlazo = 0;
  switch (plazo) {
    case 3:
      interesPlazo = cantidad * .05
      break;
    case 6:
      interesPlazo = cantidad * .1
      break;
    case 12:
      interesPlazo = cantidad * .15
      break;
    case 24:
      interesPlazo = cantidad * .2
      break; 
    default:
      break;
  }
  return intereses + interesPlazo + cantidad;
}