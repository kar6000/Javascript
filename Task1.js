Take input from user as password and it should be alphanumeric
if valid allow access or deny

var password = prompt("Please enter a password")
if(password.match("^([a-zA-Z]+)([0-9]+)$")){
	console.log("Valid Password")
	}else{
		console.log("Invalid Password")
	}