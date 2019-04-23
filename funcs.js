function newQuote(){
	var text = "";
	var possible = "123456789abcdefghijklmnopqrstuvwxyz,.";
  
	for (var i = 0; i < (Math.floor((Math.random() * 20) + 1)); i++){
	  text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
	document.getElementById('Encrypted').innerHTML = text;
	document.getElementById('Encrypted').value = text;
}
		
function checkPass(input,check){
	
	//var string = input;
	var string = String(document.getElementById('Encrypted').value);
	var input = String(document.getElementById('input').value);
	var string_result="";

	var i = jQuery('.encrypt').text().length;
	
	while (i--) {
		if (string[i] === string[i].toLowerCase() && string[i].toUpperCase() != string[i].toLowerCase()){ //is a character
			if((parseInt(string[i].charCodeAt(0) + 3)) > 122){
				string_result = String.fromCharCode(((parseInt(string[i].charCodeAt(0) + 3)%122))+96).charAt(0).concat(string_result);
			}
			else{
				string_result = String.fromCharCode((parseInt(string[i].charCodeAt(0) + 3))).charAt(0).concat(string_result);
			}
		}
		else{
			if (!isNaN(parseInt(string[i], 10)) && string[i] != '0') {
				// Is a number
				string_result = String.fromCharCode(((parseInt(106 - string[i].charCodeAt(0)))%48)+48).charAt(0).concat(string_result);
			}
			else{
				string_result = string[i].concat(string_result);
			}
		}
	}
	
	var j = 0;
	var arr = string_result.split('');
	var flag = false;
	while (j < arr.length) {
		if(arr[j] === "," || arr[j] === "."){ //swap dots and commas
			var temp = arr[arr.length-j-1];
			arr[arr.length-j-1] = arr[j];
			arr[j] = temp;
		}
		j++;
	}

	
	string_result= arr.join('');
	alert(string_result);
	document.getElementById('checkPassword').innerHTML = string_result;
	if(input===string_result){
		alert("Decryption is successful, opening calculator...")
		window.open("calculator.html");
	}else if(input===""){
		document.getElementById('checkPassword').innerHTML = "";
	}
	else{
		document.getElementById('checkPassword').innerHTML = "FAIL";
	}
}

function checkAndConvert(){

	var Base = parseInt(document.getElementById('select').value);
	var userInput = document.getElementById('input').value;
	
	if ( !(/^\d+$/.test(userInput))){
		document.getElementById('checkConvertion').innerHTML = "Not a number!";
	}
	else{
		var number = parseInt(userInput);
		document.getElementById('checkConvertion').innerHTML = parseInt(number + '', 10).toString(Base);
	}
}