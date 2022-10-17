let tabla4= "";
let tabla5= "";

// membersdescm = senado.sort((a,b) =>{
//     return a.missed_votes - b.missed_votes
//   });
//   membersascm = senado.sort((a,b) =>{
//       return b.missed_votes - a.missed_votes
//     });

var tope=Math.round(0.1*totales);

membersa =senado.sort((a,b)=>b.missed_votes -a.missed_votes)
statistics.membersAscendent=membersa.slice(0,tope);
membersd= membersa.reverse();
statistics.membersDescendent=membersd.slice(0,tope);
function tablamostvotes(members){
    members.forEach(congresistas=>{
        tabla4+="<tr><td>"+congresistas.first_name+(congresistas.middle_name|| "")+congresistas.last_name+"</td>"+
        "<td>"+congresistas.missed_votes+"</td>"+
        "<td>"+congresistas.total_votes+"</td>"+
        "</tr>"
    })
return tabla4;
}
document.getElementById("tabla4").innerHTML =tablamostvotes(statistics.membersDescendent)

function tablaengagedvotes(members){
    members.forEach(congresistas=>{
        tabla5+="<tr><td>"+congresistas.first_name+(congresistas.middle_name|| "")+congresistas.last_name+"</td>"+
        "<td>"+congresistas.missed_votes+"</td>"+
        "<td>"+congresistas.total_votes+"</td>"+
        "</tr>"
    })
return tabla5;
}
document.getElementById("tabla5").innerHTML =tablaengagedvotes(statistics.membersAscendent)