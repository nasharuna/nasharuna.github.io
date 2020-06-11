function formValidation(){
	var fname = document.registration.firstname;
	var lname = document.registration.lastname;
	var uemail = document.registration.email;
	var passid1 = document.registration.passid1;
	var passid2 = document.registration.passid2;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex;
	var ustate = document.registration.state;
	 

	if(firstname_validation(fname,5,12)){
		if(firstname_letter(fname)){
			if(lastname_validation(lname,5,12)){
				if(lastname_letter(lname)){
					if(ValidateEmail(uemail)){
						if(passid1_validation(passid1,6)){
							if(passid2_validation(passid2,6)){
								if(validsex(umsex,ufsex)){
									if(confirm_pass(passid2)){																															
										if(stateselect(ustate)){
										}										
									}
								}
							}
						}
					}
				}
			}
		}

	return false;
	}
}

function firstname_validation(fname,mx,my){
	var fname_len = fname.value.length;
	if(fname_len == 0 || fname_len >= my || fname_len < mx){
		alert("First name should not be empty / length be between "+mx+" to "+my);
		fname.focus();
		return false;
	}
	return true;
}

function firstname_letter(fname){ 
	var letter1 = /^[A-Za-z]+$/;
	if(fname.value.match(letter1)){
		return true;
	}
	else{
		alert("First name must have alphabet characters only");
		fname.focus();
		return false;
	}
}

function lastname_validation(lname,mx,my){
	var lname_len = lname.value.length;
	if(lname_len == 0 || lname_len >= my || lname_len < mx){
		alert("Last name should not be empty / length be between "+mx+" to "+my);
		lname.focus();
		return false;
	}
	return true;
}

function lastname_letter(lname){ 
	var letter2 = /^[A-Za-z]+$/;
	if(lname.value.match(letter2)){
		return true;
	}
	else{
		alert("Last name must have alphabet characters only");
		lname.focus();
		return false;
	}
}

function ValidateEmail(uemail){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat)){
		return true;
	}
	else{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function passid1_validation(passid1,my){
	var passid1_len = passid1.value.length;
	if(passid1_len == 0 || passid1_len < my){
		alert("Password should not be empty / length more than "+my);
		passid1.focus();
		return false;
	}
	return true;
}

function passid2_validation(passid2,my){
	var passid2_len = passid2.value.length;
	if(passid2_len == 0 || passid2_len < my){
		alert("Password should not be empty / length more than "+my);
		passid2.focus();
		return false;
	}
	return true;
}

function showPass1(){
	var x = document.getElementById("myPass1");
	if (x.type === "password"){
		x.type = "text";
	} 
	else{
		x.type = "password";
	}
}

function showPass2(){
	var x = document.getElementById("myPass2");
	if (x.type === "password") {
		x.type = "text";
	} 
	else{
		x.type = "password";
	}
}

function validsex(umsex,ufsex){
	x=0;
	if(umsex.checked){
		x++;
	} 
	if(ufsex.checked){
		x++; 
	}
	if(x==0){
		alert('Select Male/Female');
		umsex.focus();
		return false;
	}
	return true;
}

function confirm_pass(passid2){
    var password1 = document.getElementById("myPass1").value;
    var password2 = document.getElementById("myPass2").value;
		if (password1 != password2){
            alert("Passwords do not match.");
            return false;
        }
        return true;
}

function alphanumeric(){ 
	var TCode = document.getElementById('myPass1').value;
	for(var i=0; i<TCode.length; i++){
		var char1 = TCode.charAt(i);
		var cc = char1.charCodeAt(0);

		if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123)){
		}
		else{
			alert('Input is not alphanumeric');
			return false;
		}
	}
    return true; 	 
} 

function stateselect(ustate){
	if(ustate.value == "Default"){
		alert('Select your state from the list');
		ustate.focus();
		return false;
	}
	else{
		alert('Form Succesfully Submitted');
		window.location.reload()
		return true;
	}
}