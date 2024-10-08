

function validate(){
    let username = document.getElementById("un").value;
    let password = document.getElementById("pass").value;
    let pres = document.getElementById("result");
    if(username=='admin' ){
        if(password=='admin'){
            pres.innerText=("validated ^_^");
            // alert(username+" "+"validated ^_^");
        }
        else{
            pres.innerText=("incorrect password :(");
            //alert("incorrect password :(")
        }
    }
    else{
        pres.innerText=("not validated :(");
        //alert("not validated :(")
    }

}

