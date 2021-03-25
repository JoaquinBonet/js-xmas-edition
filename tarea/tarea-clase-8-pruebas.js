function probarValidarIntegrantes(){
    console.assert(
        validarCantidadIntegrantes("0") === "La cantidad de integrantes no puede ser menor a 1",
        "ValidarCantidadIntegrantes no valido que la cantidad no sea menor que 1"

    );


    console.assert(
        validarCantidadIntegrantes("75") === "La cantidad de integrantes no puede ser mayor a 50",
        "ValidarCantidadIntegrantes no valido que la cantidad no sea mayor a 50"
    )

    console.assert(
        validarCantidadIntegrantes("3") === "",
        "ValidarCantidadIntegrantes fallo con una cantidad valida"
    );
}

probarValidarIntegrantes();

function probarValidarEdad(){
    console.assert(
        validarEdad("253") === "La edad no puede ser mayor a 115",
        "ValidarEdad no valido que la edad no sea mayor a 115"
    )

    console.assert(
        validarEdad("2.35") === "La edad no puede tener decimales",
        "validarEdad no valido que la edad no tenga decimales"
    )

    console.assert(
        validarEdad("0") === "La edad no puede ser 0",
        "ValidarEdad no valido que la edad no sea 0"
    )

    console.assert(
        validarEdad("42") === "",
        "ValidarEdad no valido una edad valida"
    )
}

probarValidarEdad();

function probarValidarSalarios(){
    console.assert(
        validarSalarios("1566.4234") === "El salario debe tener maximo 2 decimales",
        "validarSalarios no valido que la cifra sea menor e 6 cifras y tenga maximo 2 decimales"
    );

    console.assert(
        validarSalarios("-52") === "El salario debe ser positivo",
        "validarSalarios no valido que el salario no sea positivo"
    )
}