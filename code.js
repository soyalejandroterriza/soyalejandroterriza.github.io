//Shortcut para Get Element By Id.
let getid = (getIt) => document.getElementById(getIt);


//Añado el evento al pulsar los botones
let calculateButton = getid("calculateButton").addEventListener("click", getResults, false);
let resetButton = getid("resetButton").addEventListener("click", emptyInputs, false);


//Declaro las variables donde almacenaré la información que me interesa.
let distance = "";
let gasPrice = "";
let consumption = "";

function getValues() { //Atrapar los valores que me interesan.

    distance = getid("distance_Input").value;
    gasPrice = getid("gas_price_Input").value;
    consumption = getid("consumption_Input").value;
}

function emptyInputs() { //Vacía el formulario.

    getid("distance_Input").value = "";
    getid("gas_price_Input").value = "";
    getid("consumption_Input").value = "";
}

function field_checker() {//Controla las introducciones del usuario.
    //Esta función realiza comprobaciones en los Inputs, interrumpiendo calc_consumption si fuese necesario. También avisará
    //por alert de los errores de introducción.

    //Comprobar que los campos no están vacíos
    if (distance == "" || gasPrice == "" || consumption == "") {
        alert("Alguno de los campos está vacío.");
        return false;
    }

    //Reemplazar comas por puntos.
    distance = distance.replace(',', '.');
    gasPrice = gasPrice.replace(',', '.');
    consumption = consumption.replace(',', '.');


    //Necesito comprobar que los campos sean únicamente números.
    if (isNaN(distance) || isNaN(gasPrice) || isNaN(consumption)) {
        alert("Alguno de los campos introducidos no es un número.");
        return false;
    }

    //Devuelvo los textos a double, hasta ahora eran String.
    distance = parseFloat(distance);
    gasPrice = parseFloat(gasPrice);
    consumption = parseFloat(consumption);

    //Si ninguna de las condiciones ha saltado, devuelve true.
    return true;
}

function getResults() {
    //Atrapo la información de los campos
    getValues();

    //Comprueba los campos e interrumpe el procedimiento si hay alguno incorrecto.
    if (field_checker() == false) {
        return;
    }

    //Realiza el cálculo y almacena los datos resultantes.
    let consumption_1km = consumption / 100;
    let amount_Liters = consumption_1km * distance;
    let total_Cost = amount_Liters * gasPrice;

    //Redondear todos los resultados a un máximo de dos decimales.
    consumption_1km = parseFloat(consumption_1km.toFixed(2));
    amount_Liters = parseFloat(amount_Liters.toFixed(2));
    total_Cost = parseFloat(total_Cost.toFixed(2));
    distance = parseFloat(distance.toFixed(2));
    consumption = parseFloat(consumption.toFixed(2));
    gasPrice = parseFloat(gasPrice.toFixed(2));

    //Manda a escribir por pantalla los resultados.
    let summary = `El coste total para un viaje de ${distance} kms en tu vehículo asciente a ${total_Cost} €, utilizando un total de ${amount_Liters} litros de gasolina.`;
    alert(summary);
}
