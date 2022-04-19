const getData = () => {
    let day = document.getElementById("valueDay").value;
    let month = document.getElementById("valueMonth").value;
    let year = document.getElementById("valueYear").value;
    
    // VERIFICACION DE DIA

    if(!day){
        alert("Ingresa dia valido.");
    } else {
        if(day <= 0){
            alert("Este no es un dia valido.");
        } else if (day > 31){
            alert("No ingresar un valor mayor a 31.");
        }
    }

    // VERIFICACION DE MES

    if(!month){
        alert("Ingresa un mes valido.");
    } else {
        if(month <= 0){
            alert("Este no es un mes valido.");
        } else if(month > 12){
            alert("No ingresar un mes mayor a 12.");
        }
    }

    // VERIFICACION DE YEAR

    if(!year){
        alert("Ingresa un a;o valido.");
    } else {
        if(year <= 0){
            alert("Este no es un a;o valido.");
        }
    }








}

