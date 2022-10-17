/* mostrar senadores y house en las tablas*/
/* metodo de creacion de tabla con template string*/
 
var cuerpo=" ";
function Tabla(data){
    data.results[0].members.forEach(congresistas=>{
      cuerpo+= ` <tr><td><a href=  ${congresistas.url} target="blank"> 
 ${congresistas.first_name}  ${(congresistas.middle_name ||" ")}${congresistas.last_name}</a></td>
	   <td>  ${congresistas.party} </td> 
	   <td>  ${congresistas.state} </td> 
	   <td>  ${congresistas.seniority} </td>  
	   <td>  ${congresistas.votes_with_party_pct} "%" </td>
</tr> `
    })
    return cuerpo
}
document.getElementById("tabla").innerHTML= Tabla(data)
/*utilizando map en vez de forEach* es la misma mecanica funciona igual que el anterior, pero si se le agregan los dos return
imprime teniendo en cuenta las comas/ 
var cuerpo=" ";
function Tabla(data){
    return data.results[0].members.map(congresistas=>{
    return  cuerpo+= ` <tr><td><a href=  ${congresistas.url}> 
 ${congresistas.first_name}  ${(congresistas.middle_name ||" ")}${congresistas.last_name}</a></td>
	   <td>  ${congresistas.party} </td> 
	   <td>  ${congresistas.state} </td> 
	   <td>  ${congresistas.seniority} </td>  
	   <td>  ${congresistas.votes_with_party_pct} "%" </td>
</tr> `
    }).join("")
    
}
document.getElementById("tabla").innerHTML= Tabla(data)
/*otra forma sin template string*/
/*
var tabla=" ";
function tablaDinamica (data){
    data.results[0].members.forEach(congresistas =>{
tabla += "<tr>"+
    "<td>" + "<a href=" + congresistas.url + ">" +
    congresistas.first_name + " " + (congresistas.middle_name || " " )  + " " +  congresistas.last_name  + "</a>"  + "</td>" +
	   "<td>" + congresistas.party+ "</td>" + 
	   "<td>" + congresistas.state+ "</td>" + 
	   "<td>" + congresistas.seniority+ "</td>" + 
	   "<td>" + congresistas.votes_with_party_pct + "%" +  "</td>"+
        "</tr>"          
    });
    return tabla;
}
document.getElementById("tabla").innerHTML = tablaDinamica(data)
*/