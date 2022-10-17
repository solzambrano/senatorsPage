


/*Numero de representantes para house y senate*/
/*declaracion de variables */
let senado= data.results[0].members; 
let tabla1 = "";
let tabla2 ="";
let tabla3 ="";
let congress=[];
let membersa= [];
let membersd =[];
let membersam= [];
let membersdm =[];
/*declaracion de objeto statistics */
let statistics= {
                "numberDemocrat": 0,
                "numberRepublican": 0,
                "numberIndependents": 0,
                "perDemocrat": 0,
                "perRepublican": 0,
                "perIndependents": 0,
                "membersAscendent":[],
                "membersDescendent":[],
}
/*calcular numero de congresistas*/

function contar(senado){
senado.forEach(congresistas => {
switch (congresistas.party){
    case "R" : 
    statistics.numberRepublican++;
    statistics.perRepublican = statistics.perRepublican+congresistas.votes_with_party_pct;
    break;
    case "D" :
        statistics.numberDemocrat++;
    statistics.perDemocrat = statistics.perDemocrat+congresistas.votes_with_party_pct;
    break;
    case "i" :
        statistics.numberIndependents++;
    statistics.perIndependents = statistics.perIndependents+congresistas.votes_with_party_pct;
break;
}
})};
contar(senado)
/*calculo del promedio */
function promedio(cantidad,suma){
        if(cantidad!== 0){
            suma=suma/cantidad;
        }
        else
            suma=0;   
        return suma;
}

 /*asignacion de las funciones */
 statistics.perDemocrat= Math.round(promedio(statistics.numberDemocrat , statistics.perDemocrat));
 statistics.perRepublican= Math.round(promedio(statistics.numberRepublican , statistics.perRepublican));
 statistics.perIndependents= Math.round(promedio(statistics.numberIndependents , statistics.perIndependents));
/*funcion para la primera tabla  */
 function tableStatistics (statistics) {
    tabla1 +=`<tr>
        <td>Democrats </td> <td>${statistics.numberDemocrat} </td> <td>${statistics.perDemocrat} </td><tr>
        <tr><td>Republicans</td><td>${statistics.numberRepublican} </td> <td>${statistics.perRepublican} </td></tr>
        <tr><td>Independents</td><td>${statistics.numberIndependents} </td> <td>${statistics.perIndependents} </td></tr>`
    return tabla1;
};
/*mostrando el resultado en las tablas*/
document.getElementById("tabla1").innerHTML =tableStatistics(statistics)

/*para la segunda tabla calculo los totales*/
var totales= statistics.numberDemocrat+statistics.numberIndependents+statistics.numberRepublican;
var tope=Math.round(0.1*totales);

membersa =senado.sort((a,b)=>b.votes_with_party_pct -a.votes_with_party_pct)
statistics.membersAscendent=membersa.slice(0,tope);
membersd= membersa.reverse();
statistics.membersDescendent=membersd.slice(0,tope);
    
    /*para la segunda tabla*/
function tablamostvotes(members){
        members.forEach(congresistas=>{
            tabla2+="<tr><td>"+congresistas.first_name+(congresistas.middle_name|| "")+congresistas.last_name+"</td>"+
            "<td>"+congresistas.votes_with_party_pct+"</td>"+
            "<td>"+congresistas.total_votes+"</td>"+
            "</tr>"
        })
return tabla2;
    }
    document.getElementById("tabla2").innerHTML =tablamostvotes(statistics.membersDescendent)

    function tablaengagedvotes(members){
        members.forEach(congresistas=>{
            tabla3+="<tr><td>"+congresistas.first_name+(congresistas.middle_name|| "")+congresistas.last_name+"</td>"+
            "<td>"+congresistas.votes_with_party_pct+"</td>"+
            "<td>"+congresistas.total_votes+"</td>"+
            "</tr>"
        })
return tabla3;
    }
    document.getElementById("tabla3").innerHTML =tablaengagedvotes(statistics.membersAscendent)
// revisar la funcion para ordenarel array se pisa ordenar(senado, "descendente")
// let baja=[];
// let sube=[];
// ordenar(senado, "sube");
//     function ordenar(senado, control){
//         switch (control) {
//         case "descendente": 
//             console.log("estoy mostrando descendente");
//         baja =senado.sort((a,b)=>a.votes_with_party_pct -b.votes_with_party_pct)
//     break;
//        case "sube": 
//        console.log("estoy mostrando ascendente");
//         sube =senado.sort((a,b)=>b.votes_with_party_pct -a.votes_with_party_pct)
//     break;
//     }
// }
$(window).load(function() {
    $(".loader").fadeOut("slow");
});