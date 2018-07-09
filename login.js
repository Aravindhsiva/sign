function validateform() {  
var name = document.login.name.value;  
var password = document.login.password.value;    
if(name == "aravindh" && password == "aravindh"){  
  alert("Login Successful");  
  return false;
  }
    else{
        alert("Incorrect Credentials");
    }
}