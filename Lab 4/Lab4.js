function tabla_cuadrados(){
  let resultado = "<table>";
  for (let i=1; i<= 10; i++){
    resultado += "<tr>";
    resultado += "<td>"+ i + "</td>"+ "<td>"+ i*i +"</td>"
    resultado += "</table>";
  }
  resultado += "</table>";
  return resultado;
}
