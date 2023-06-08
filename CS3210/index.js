function validation(){
    if(document.FormFill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.FormFill.Username.value.length<6)
    {
        document.getElementById("result").innerHTML="At least 6 letters";
        return false;
    }
    else if(document.FormFill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter Email*";
        return false;
    }
    else if(document.FormFill.Password.value=="")
    {
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false;
    }
    else if(document.FormFill.Password.value!==document.FormFill.Cpassword.value)
    {
        document.getElementById("result").innerHTML="Password does not matched*";
        return false;
    }
    else if(document.FormFill.CPassword.value=="")
    {
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.FormFill.Password.value.length<8)
    {
        document.getElementById("result").innerHTML="Password must contain 8-digits*";
        return false;
    }
    else if(document.FormFill.Password.value==document.FormFill.Cpassword.value)
    {
        document.classList.add(".open-slide");
        return false;
    }    
}
var popup=document.getElementsById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide");
}