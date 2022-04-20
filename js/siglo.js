const getData = () => {
    let day = document.getElementById("valueDay").value;
    let month = document.getElementById("valueMonth").value;
    let year = document.getElementById("valueYear").value;
    
    // VALIDACION DE DIA

    if(!day){
        alert("Ingresa dia valido.");
    } else {
        if(day <= 0){
            alert("Este no es un dia valido.");
        } else if (day > 31){
            alert("No ingresar un valor mayor a 31.");
        }
    }

    // VALIDACION DE MES

    if(!month){
        alert("Ingresa un mes valido.");
    } else {
        if(month <= 0){
            alert("Este no es un mes valido.");
        } else if(month > 12){
            alert("No ingresar un mes mayor a 12.");
        }
    }

    // VALIDACION DE YEAR

    if(!year){
        alert("Ingresa un a;o valido.");
    } else {
        if(year <= 0){
            alert("Este no es un a;o valido.");
        }
    }

    // CALCULO SIGLO

    function calcularSiglo(dNum, mNum, yNum){
        yNum = yNum / 100;

        if(yNum - Math.floor(yNum) == 0){
            alert("Bienvenido al " + dNum + " del " + mNum + " del siglo " + parseInt(yNum));
        } else if(yNum - Math.floor(yNum) > 0){
            yNum++;
            alert("Bienvenido al " + dNum + " del " + mNum + " del siglo " + parseInt(yNum));
        }
    }

    calcularSiglo(day, month, year);





}