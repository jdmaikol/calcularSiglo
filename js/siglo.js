const getData = () => {
    let day = document.getElementById("valueDay").value;
    let month = document.getElementById("valueMonth").value;
    let year = document.getElementById("valueYear").value;

    // VALIDACION DE DIA

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    if(!day){
        alert("Ingresa dia valido.");
        return document.location.reload(true);
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
        return document.location.reload(true);
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
        alert("Ingresa un año valido.");
        return document.location.reload(true);
    } else {
        if(year <= 0){
            alert("Este no es un año valido.");
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
        document.write("Bienvenido al: " + day + ", " + month + ", " + miles(year) + " (" + numRomano(year) + ")");
        console.log(miles(year));
    }

    /* NUMEROS A LETRAS */

    function unidades(num)
    {
        switch(num)
        {
            case 1: return "UNO";
            case 2: return "DOS";
            case 3: return "TRES";
            case 4: return "CUATRO";
            case 5: return "CINCO";
            case 6: return "SEIS";
            case 7: return "SIETE";
            case 8: return "OCHO";
            case 9: return "NUEVE";
        }
        return "";
    }

    function decenas(num)
    {
        let numDecena = Math.floor(num / 10);
        let numUnidad = num - (numDecena * 10);

        switch(numDecena)
        {
            case 1: 
                switch(numUnidad) 
                {
                    case 0: return "DIEZ";
                    case 1: return "ONCE";
                    case 2: return "DOCE";
                    case 3: return "TRECE";
                    case 4: return "CATORCE";
                    case 5: return "QUINCE";
                    default: return "DIECI" + unidades(numUnidad);
                }
            case 2: 
                switch(numUnidad)
                {
                    case 0: return "VEINTE";
                    default: return "VEINTI" + unidades(numUnidad);
                }
            case 3: return decenaY("TREINTA", numUnidad);
            case 4: return decenaY("CUARENTA", numUnidad);
            case 5: return decenaY("CINCUENTA", numUnidad);
            case 6: return decenaY("SESENTA", numUnidad);
            case 7: return decenaY("SETENTA", numUnidad);
            case 8: return decenaY("OCHENTA", numUnidad);
            case 9: return decenaY("NOVENTA", numUnidad);
        }
        return unidades(num);
    }

    function decenaY(strSin, numUnidades)
    {
        if (numUnidades > 0)
        {
            return strSin + " Y " + unidades(numUnidades);
        }

        return strSin;
    }

    function centenas(num)
    {
        let numCentenas = Math.floor(num / 100);
        let numDecenas = num - (numCentenas * 100);

        

        switch(numCentenas)
        {
            case 1: 
                if (numDecenas > 0) 
                {
                    return "CIENTO " + decenas(numDecenas);
                }
                return "CIEN";
            case 2: return "DOSCIENTOS " + decenas(numDecenas);
            case 3: return "TRECIENTOS " + decenas(numDecenas);
            case 4: return "CUATROCIENTOS " + decenas(numDecenas);
            case 5: return "QUINIENTOS " + decenas(numDecenas);
            case 6: return "SEISCIENTOS " + decenas(numDecenas);
            case 7: return "SETECIENTOS " + decenas(numDecenas);
            case 8: return "OCHOCIENTOS " + decenas(numDecenas);
            case 9: return "NOVECIENTOS " + decenas(numDecenas);
        }
        return decenas(numDecenas);
    }

    function miles(num)
    {
        let numDivisor = 1000;
        let numCientos = Math.floor(num / numDivisor);
        let numResto = num - (numCientos * numDivisor);

         switch(numCientos)
        {   
            case 1: 
                if(centenas(numResto) == undefined)
                {
                    return "MIL " + unidades(numResto);
                }
                    return "MIL " + centenas(numResto);
            case 2: 
                if(centenas(numResto) == undefined)
                {
                    return "DOS MIL " + unidades(numResto);
                }

                return "DOS MIL " + centenas(numResto);
                
            case 3: 
                if(centenas(numResto) == undefined)
                {
                    return "TRES MIL " + unidades(numResto);
                }
                return "TRES MIL " + centenas(numResto);
            
            case 4: 
                if(centenas(numResto) == undefined)
                {
                    return "CUATRO MIL " + unidades(numResto);
                }
                return "CUATRO MIL " + centenas(numResto);

            case 5: 
                if(centenas(numResto) == undefined)
                {
                    return "CINCO MIL " + unidades(numResto);
                }
                return "CINCO MIL " + centenas(numResto);

            case 6: 
                if(centenas(numResto) == undefined)
                {
                    return "SEIS MIL " + unidades(numResto);
                }
                return "SEIS MIL " + centenas(numResto);
            
            case 7: 
                if(centenas(numResto) == undefined)
                {
                    return "SIETE MIL " + unidades(numResto);
                }
                return "SIETE MIL " + centenas(numResto);
                
            case 8: 
                if(centenas(numResto) == undefined)
                {
                    return "OCHO MIL " + unidades(numResto);
                }
                return "OCHO MIL " + centenas(numResto);
                
            case 9: 
                if(centenas(numResto) == undefined)
                {
                    return "NUEVE MIL " + unidades(numResto);
                }
                return "NUEVE MIL " + centenas(numResto);
        }
        return centenas(numResto);
    }

    // function millones(num){
    //     let numDivisor = 1000000;
    //     let numCientos = Math.floor(num / numDivisor);
    //     let numResto = num - (numCientos * numDivisor);

    //     let srtMillones = seccion(num, numDivisor, "UN MILLON DE", "MILLONES DE");
    //     let strMiles = miles(numResto);

    //     if(srtMillones == "")
    //     {
    //         return strMiles;
    //     }

    //     return srtMillones + " " + strMiles;
    // }

}