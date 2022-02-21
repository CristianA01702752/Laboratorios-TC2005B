function recarga() {
    location.reload()
}

function reinicio(){
    document.write("<div><button onclick='recarga()'>Regresar al menú</button></div>");
}

function tabla() {
    let num = Number(prompt("Ingresa un número: "));
    document.write("<table>","<tr>","<th>Número </th>","<th>Elevado al cuadrado </th>","<th>Elevado al cubo</th>","</tr>");
    for (let i = 1; i <= num; i++) {
        document.write("<tr>");
        document.write("<td>",i,"</td>");
        document.write("<td>",Math.pow(i,2),"</td>");
        document.write("<td>",Math.pow(i,3),"</td>");
        document.write("</tr>");
    }
    document.write("</table>")
    reinicio();
}

function suma() {
    let a = Math.floor(Math.random() * 21);
    let b = Math.floor(Math.random() * 21);
    let inicio = new Date().getSeconds();
    let respuesta = Number(prompt("¿Cuál es la suma de "+a+"+"+b+"?"));
    let final = new Date().getSeconds();

    if ( respuesta === (a+b) ) {
        document.write("<p>Tu respuesta fue correcta.</p>");
        document.write("<p>Tu tiempo fue de: "+(final-inicio)+" segundos.</p>");
    }
    else {
        document.write("<p>Tu respuesta fue incorrecta.</p>")
        document.write("<p>Tu tiempo fue de: "+(final-inicio)+" segundos.</p>");
    }
    reinicio();
}

function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0 ) {
            negativos++;
        }
        else if (arreglo[i] === 0 ) {
            ceros++;
        }
        else {
            positivos++;
        }
    }
    document.write("<p><strong>Numeros negativos encontrados: </strong><span></span>",negativos,"</p>")
    document.write("<p><strong>Ceros encontrados: </strong><span></span>",ceros,"</p>")
    document.write("<p><strong>Numeros positivos encontrados: </strong><span></span>",positivos,"</p>")
    reinicio();
}

function promedios(arreglo) {
    let promedio = 0;
    document.write("<h1>Promedios</h1>","<p>[");
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            promedio += arreglo[i][j];
        }
        if(i < arreglo.length-1){
          document.write("&nbsp ",promedio/arreglo.length,",");
        }
        else{
          document.write("&nbsp ",promedio/arreglo.length);
        }
        promedio = 0;
    }
    document.write("]</p>");
    reinicio();
}

function invertirNum() {
    let num = prompt("Ingresa un número: ");
    let respuesta = "";
    for (let i = num.length-1; i >= 0; i--) {
        respuesta+=num[i];
    }
    document.write("<h1>Número Inverso</h1>");
    document.write("<p>El inverso del número ingresado es: ",respuesta,"</p>");
    reinicio();
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
    document.write("<h1>Bubble Sort</h1>");
    document.write("<p>El arreglo ordenado es: ",arreglo,"</p>");
    reinicio();
}
