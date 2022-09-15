let calificaciones = [[10,9,8,7,6],[6,8,9,9,5],[10,8,10,8,7],[5,5,5,5,5],[7,9,9,8,7]];

function fnAprobado(grupo, promedio){
    console.log("El grupo " + grupo + " aprobo con un promedio de:" + promedio)
}

let aprobado = fnAprobado

function fnReprobado(grupo, promedio){
    console.log("El grupo " + grupo + " reprobo con un promedio de:" + promedio)
}

let reprobado = fnReprobado

function getPromedio(cals){
    sum = 0
    cals.forEach(element => {
        sum += element
    });
    return sum / 5
}

let promedio = getPromedio

function getCalificaciones(calificaciones, aprobado , reprobado, promedio){
    calificaciones.forEach(e => {
        avg = promedio(e)
        if(avg >= 6){
            aprobado(e, avg)
        }else{
            reprobado(e, avg)
        }
    })
    console.log("Calificaciones calculadas")
}

getCalificaciones(calificaciones, aprobado, reprobado, promedio)