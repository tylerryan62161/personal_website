function validate() {
    var first_name=document.myForm.first_name.value;
    var last_name=document.myForm.last_name.value;
    var email=document.myForm.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var subject=document.myForm.subject.value;
    var message=document.myForm.message.value;
    if(first_name==""){
        alert("First name must be filled out");
        return false;
    }if(last_name==""){
        alert("Last name must be filled out");
        return false;
    }if(subject==""){
        alert("Subject must be filled out");
        return false;
    }if(message==""){
        alert("Message must be filled out");
        return false;
    }if(email==""){
        alert("Email must be filled out");
        return false;
    }if(atpos<1||(dotpos-atpos<2)){
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
}