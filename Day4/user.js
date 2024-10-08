function validate(){
    let username = document.getElementById("un").value;
    let password = document.getElementById("pass").value;
    if(username=='' || username.length<10 || password==''){
        return false;
    }
    else{
        return true;
    }
}