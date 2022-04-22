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
            return document.location.reload(true);
        } else if (day > 31){
            alert("No ingresar un valor mayor a 31.");
            return document.location.reload(true);
        }
    }

    // VALIDACION DE MES

    if(!month){
        alert("Ingresa un mes valido.");
    } else {
        if(month <= 0){
            alert("Este no es un mes valido.");
            return document.location.reload(true);
        } else if(month > 12){
            alert("No ingresar un mes mayor a 12.");
            return document.location.reload(true);
        }
    }

    // VALIDACION DE YEAR

    if(!year){
        alert("Ingresa un a;o valido.");
    } else {
        if(year <= 0){
            alert("Este no es un a;o valido.");
            return document.location.reload(true);
        }
        
    }

    // CALCULO SIGLO

    function calcularSiglo(yNum){
        yNum = yNum / 100;

        if(yNum - Math.floor(yNum) == 0){
            return parseInt(yNum);
        } else if(yNum - Math.floor(yNum) > 0){
            yNum++;
            return parseInt(yNum);
        }
    }


    // GREGORIANO A ROMANO

        /* EL ORDEN DE LOS NUMEROS EN BIBLIOTECA ES IMPORTANTE PORQUE DEFINE CUANDO EMPIEZA A RESTAR, EJEMPLO = III= 3, IV = 4, EL CUATRO ES UNA RESTA. */

    function numRomano (num){
        let biblioteca = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        romano = '', // DECLARAMOS UN STRING VACIO PARA RETORNAR EL VALOR
        i; 

        for (i in biblioteca) {
            while ( num >= biblioteca[i] ) {
                romano += i;
                num -= biblioteca[i];
            }
        }
        return romano;
    }

    if(!year){
        return document.location.reload(true);
    } else {
        document.write("Bienvenido al: " + day + ", " + month + ", " + year + ". El a;o en numeros romanos es: " + numRomano(year) + " " + ". Estas en el siglo: " + calcularSiglo(year));
    }

}