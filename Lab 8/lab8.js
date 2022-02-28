function promedio(arreglo){
    let sum = 0;
    for(let i = 0; i < arreglo.length; i++){
        sum += arreglo[i];
    }
    return sum/arreglo.length;
}

function texto(str){
    const fs = require('fs');
    fs.writeFileSync('archivoLab.txt', str);
    return "El archivo se creó exitosamente";
}

function bubbleSort(arreglo) {
  let tam = arreglo.length;
  let check = false;

  for(let i =0; i<tam; i++){
    check = false;

    for(let j = 0; j<tam; j++){

      if(arreglo[j] > arreglo[j+1]){
        let temp = arreglo[j];
        arreglo[j] = arreglo[j+1];
        arreglo [j+1] = temp;
        check = true;
      }
    }
    if(!check){
      break;
    }
  }
  return arreglo;
}
const arreglo = [16, 95, 34, 84, 29, 74, 18, 46, 54, 41];

console.log(promedio(arreglo));
console.log(texto("Adiós mundo cruel"));
console.log(bubbleSort(arreglo));


const fs = require("fs");
const http = require('http');
const server = http.createServer( (request, response) => {
    fs.readFile('Lab1.html', (error, data) => {
        response.write(data);
        return response.end();
    });
});
server.listen(3000);
