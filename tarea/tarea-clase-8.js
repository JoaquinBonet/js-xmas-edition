/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/

const $form = document.querySelector("#calculador-edades")

function validarCantidadIntegrantes(integrantes){
    if (integrantes  > 50 ){
        return "La cantidad de integrantes no puede ser mayor a 50"
    } else if (integrantes <=    0){
        return "La cantidad de integrantes no puede ser menor a 1"
    } else {
        return "";
    }
}




function validarEdad(arrayEdades){

    for (i = 0; i < arrayEdades.length; i++){
  
    if (arrayEdades[i] %1 !== 0){
        return "La edad no puede tener decimales";
      } else if (arrayEdades[i]  > 115) {
         return "La edad no puede ser mayor a 115"
             } else if(arrayEdades[i] === 0) {
                     return "La edad no puede ser 0"
                         } else {
                                 return "";
    }
}
}



    


function validarFormCantidadIntegrantes(){
    const $integrantes = Number(document.querySelector("#cantidad-integrantes").value);
    let errorIntegrantes = validarCantidadIntegrantes($integrantes);
   

    if (errorIntegrantes === ""){
        ocultarErrores();
        mostrarBotonCrearSalarios();
        borrarIntegrantesAnteriores();
        crearIntegrantes($integrantes);
    } else {
        const contenedorErrores = document.createElement("li");
        const $errores = document.querySelector("#mostrar-errores");
        contenedorErrores.innerText = errorIntegrantes
        $errores.appendChild(contenedorErrores);
        mostrarErrores();
        document.querySelector("#cantidad-integrantes").className = "error" 
    }
    

}

function validarFormEdad(){
    const $edades  = obtenerEdadesIntegrantes();
    let errorEdades = validarEdad($edades)

    if (errorEdades === ""){
        mostrarEdad('mayor', obtenerMayorNumero($edades));
        mostrarEdad('menor', obtenerMenorNumero($edades));
        mostrarEdad('promedio', obtenerPromedio($edades));
        mostrarResultados();

    } else {
        const contenedorErrores = document.createElement("li");
        const $errores = document.querySelector("#mostrar-errores");
        $errores.appendChild(contenedorErrores)
        contenedorErrores.innerText = errorEdades;
        mostrarErrores();
        document.querySelector("#integrantes").className = "error"
        ocultarBotonCrearSalario();

    }

}


function validarSalarios(salarios){
    for (i = 0; i < salarios.length; i++){
        if (salarios[i] < 0){
         return "El salario debe ser positivo"
        } else if(salarios[i] % 1 !== 0) {
            return "El salario debe tener maximo 2 decimales"

        } else {
            return ""
    }
}
}


function validarFormSalarios(){

    const $salarios = obtenerSalariosIntegrantes();
    const errorSalarios = validarSalarios($salarios);

    if (errorSalarios === ""){
        mostrarAnalisisSalarios();
        mostrarSalario( `mayor`, obtenerMayorSalario($salarios));
        mostrarSalario(`menor`, obtenerMenorSalario($salarios));
        mostrarSalario(`promedio`, obtenerPromedioSalarios($salarios));
        mostrarSalario(`promedio-mensual`, obtenerPromedioSalariosMensuales(obtenerSalariosMensuales($salarios)));
      

    } else {
        const $errores = document.querySelector("#mostrar-errores");
        const contenedorErrores = document.createElement("li");
        $errores.appendChild(contenedorErrores);
        contenedorErrores.innerText = errorSalarios;
        document.querySelector("#salarios").className = "error";
        mostrarErrores();
        


    }

}


function borrarErrores(){
    const $errores = document.querySelector("#mostrar-errores")
    $errores.querySelector("li").remove()
}