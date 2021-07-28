
//getc();

function addc(){
	let input = document.querySelector("#input").value;
	if(input !=""){
		var cookie_date = new Date();
		cookie_date.setMonth(cookie_date.getMonth() + 1);
		document.cookie = "notes="+input+";expires=" + cookie_date.toUTCString();

	} else {alert("It\'s empty. Try to input something in \"Text input\"");}
}

function clearc(){
	let quest = confirm("Are you sure?");
	if(quest) {

	}
	else return;
}

function getc() {
	let arr = document.cookie.split(';');
	let output = document.querySelector("#data");
	if (arr.length > 0 ) {
		arr.forEach( elm => { output.innerHTML = data; })
		 
	}
	else {output.innerHTML = "[Empty]";}
	
}
