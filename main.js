let entradaCalculadora = document.getElementById('input');
let temporal = 0;
let memory=0;
let operacion = "";
let operacionCompleta = '';

// Añadir numeros al input
function add(num){
   let valor = entradaCalculadora.value;
    if(num == 0){
        if(valor[valor.length - 1] != "0" || valor.length > 1){
            entradaCalculadora.value += num;
        }
        // busca si el valor actual es un punto, si es un punto pone -1 y no deja poner mas
    }else if(num == '.' && valor.indexOf('.') === -1){
         // si el valor esta vacio, al pulsar , añade un 0.
        if(valor === ''){
            entradaCalculadora.value += '0' + num;
        }else if(valor[valor.length - 1] != '.' && valor != ''){
            entradaCalculadora.value += num;
        }
    }else if(num != '.'){
        entradaCalculadora.value += num;
    }
}

//limpiar el input
function cleanInput(){
    entradaCalculadora.value = "";
    operacionCompleta = '';
}

//limpiar input cuando haces operacion
function operacionFunction(operador){
    temporal = entradaCalculadora.value;
    cleanInput();
    operacion = operador;
    operacionCompleta += temporal + operacion;
    ultimaOperacion = operacion + temporal;
}

//dar resultado en el input
function igual(){
    entradaCalculadora.value = eval(temporal + operacion + entradaCalculadora.value)
}

// funcion %
function porciento(){
    entradaCalculadora.value = entradaCalculadora.value / 100;
}
// funcion pi
function pi(){
    entradaCalculadora.value = 3.14159
}
// funcion cubo
function cubo(){
    aux = operacionCompleta + entradaCalculadora.value
    entradaCalculadora.value = eval(aux * aux * aux)
    operacionCompleta = '';
}
// funcion cuadrado
function cuadrado(){
    aux = operacionCompleta + entradaCalculadora.value
    entradaCalculadora.value = eval(aux * aux)
    operacionCompleta = '';
}
// Función raíz cuadrada
function raizCuadrada() {
    // Math.sqrt se usa para calcular la raiz cuadrade de numero positivos o cero.
    entradaCalculadora.value = Math.sqrt(parseFloat(entradaCalculadora.value));
}

// Función cambiar signo
function cambiarSigno() {
    // pasamos el valor actual a numero de coma flotante y luego con el - lo multiplicamos por -1 
    // y a si se cambia de positivo a negativo
   entradaCalculadora.value = -entradaCalculadora.value;
}

// funcion Memory Clear
function MemoryClear(){
    memory = 0;
}
// funcion Memory Retrive
function MemoryRetrive(){
    entradaCalculadora.value = memory;
}
// funcion guardar num
function memorySave(){
    memory = entradaCalculadora.value;
}
// funcion restar valor a memoria
function RestNumMemory(){
    entradaCalculadora.value = memory - entradaCalculadora.value;
    cambiarSigno();
}