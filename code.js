//Shortcut para Get Element By Id.
let getid = (getIt) => document.getElementById(getIt);


//Añado el evento al pulsar el botón
let calculateButton = getid("calculateButton").addEventListener("click", calc_consumption, false);


//

function comprobarCampos(){
    //Comprueba que los campos no están vacíos y tienen información correcta.
}

function calc_consumption(){
    alert("Working");
    return;

    //Toma los datos de las variables
    let distance = getid("distance_Input").value;
    let gasPrice = getid("gas_price_Input").value;
    let consumption = getid("consumption_Input").value;

    //Realiza el cálculo
    let consumption_1km = consumption / 100;
    let amount_Liters = consumption_1km * distance;

    //Manda a escribir por pantalla los resultados.
}

function bring_results(){
    //Por ahora usaré un alert.
}
