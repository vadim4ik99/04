
//getc();

function addc(){
	let input = document.querySelector("#input").value;
	if(input !=""){
		var cookie_date = new Date();
		cookie_date.setMonth(cookie_date.getMonth() + 1);
		document.cookie = "name=user;expires=" + cookie_date.toUTCString();

	} else {alert("It\'s empty. Try to input something in \"Text input\"");}
}

function clearc(){
	
}

function getc() {
	let arr = document.cookie.split(';');
	let output = document.querySelector("#data");
	if (arr.length > 0 !) {
		arr.forEach( elm => { output.innerHTML = data; })
		 
	}
	else {output.innerHTML = "[Empty]";}
	
}
