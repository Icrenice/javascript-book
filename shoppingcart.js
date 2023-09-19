
//FUNCTION: bestellen
//PARAMETERS: Form object
//RETURNs: Cookie met bestelling info...
//PURPOSE: Cookie maken met info bestelde item
function bestellen(thisForm){
	
	var bedrag = thisForm.aantal.value  * thisForm.prijs.value ;
	
	productInfo = 
		thisForm.id.value + '|' + 
		thisForm.merk.value + '|' +
		thisForm.model.value + '|' + 
		thisForm.prijs.value + '|' +
		thisForm.aantal.value + '|' +
		thisForm.geheugen.value + '|' +
		bedrag ;
		
	maakCookie (thisForm.id.value, productInfo, 1);
	
	notice = thisForm.aantal.value + ' ' + 
			thisForm.merk.value + 
			' in winkelwagen.';
	alert(notice);
}

//FUCTION: cartWeergeven
//PARAMETERS: NULL
//RETURNS: Geeft Producttabel weer in HTML
//format
function cartWeergeven(){
	var tabelrij = '';
	for(var i = 0; i <= 6; i++){
		var dezeCookie = leesCookie(i);
		
		if(dezeCookie == null || dezeCookie == 'niet-gevonden')
			{continue;}
		
		var velden = dezeCookie.split('|');
		 tabelrij += '<tr>'+
        '<td>' + velden[0] + '</td>' +
        '<td>' + velden[1] + '</td>' +
        '<td>' + velden[2] + '</td>' +
        '<td>' + velden[3] + '</td>' +
        '<td>' + velden[4] + '</td>' +
        '<td>' + velden[5] + '</td>' +
        '<td>' + velden[6] + '</td>' +
        '<td>' + '<img onclick="verwijderAlleCookies1();window.location.reload();"src="images/delete.png" width="20"> ' + '</td>' +
         '</tr>';
	}
	
	document.write(tabelrij);
}

function verwijderCookie1(){
			maakCookie("1", "", -1);
			maakCookie("2", "", -1);
			maakCookie("3", "", -1);
			maakCookie("4", "", -1);
			maakCookie("5", "", -1);
			maakCookie("6", "", -1);
			maakCookie("7", "", -1);			
}

//FUNCTION: verwijderAllecookies
//PARAMETERS: NULL
//RETURNS: NULL
//PURPOSE: Alle cookies verwijderen
function verwijderAlleCookies(){
	for(i = 1; i <=6; i++)
	{
		verwijderCookie1(i);
	}
}	
	