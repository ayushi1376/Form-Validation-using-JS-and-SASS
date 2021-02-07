function validation(){
    var userfname=document.getElementById("first_name").value;
    if(userfname==""){
        document.getElementById("fn").innerHTML="*Please fill first name.*";
        return false;
    }
    if(userfname.length <=2 || userfname.length>=30){
        document.getElementById("fn").innerHTML="*Kindly fill approperiately*";
        return false;
    }
    if(!isNaN(userfname)){
        document.getElementById("fn").innerHTML="*Only characters are allowed*";
        return false;
    }

    var userlname=document.getElementById("last_name").value;
    if(userlname==""){
        document.getElementById("ln").innerHTML="*Please fill last name.*";
        return false;
    }
    if(userlname.length <=2 || userlname.length>=30){
        document.getElementById("ln").innerHTML="*Kindly fill approperiately*";
        return false;
    }
    if(!isNaN(userlname)){
        document.getElementById("ln").innerHTML="*Only characters are allowed*";
        return false;
    }

    var usernum=document.getElementById("number").value;
    if(usernum=="" || isNaN(usernum)==true){
        document.getElementById("num").innerHTML="*Please fill number.*";
        return false;
    }
    if(usernum.length!=10){
        document.getElementById("num").innerHTML="*Kindly fill approperiately*";
        return false;
    }
    if(isNaN(usernum)){
        document.getElementById("num").innerHTML="*Only numbers are allowed*";
        return false;
    }

    var useremail=document.getElementById("email").value;
    if(useremail==""){
        document.getElementById("em").innerHTML="*Please fill email.*";
        return false;
    }

    var userpass=document.getElementById("pass").value;
    if(userpass==""){
        document.getElementById("pas").innerHTML="*Please fill password.*";
        return false;
    }
    if(userpass.length <=5){
        document.getElementById("pas").innerHTML="*Please fill a strong password.*";
        return false;
    }

    var userconpass=document.getElementById("conpass").value;
    if(userconpass==""){
        document.getElementById("conpas").innerHTML="*Please fill same password.*";
        return false;
    }
    if(userconpass.length <=5){
        document.getElementById("conpas").innerHTML="*Please fill a strong password.*";
        return false;
    }
    if(userpass!=userconpass){
        document.getElementById("conpas").innerHTML="*Passwords do not match.*";
        return false;
    }

}