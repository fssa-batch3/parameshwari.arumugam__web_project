const checklogin= document.getElementById("loginform");

checklogin.onsubmit =function(e){

    e.preventDefault();

    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    const localdata = JSON.parse(localStorage.getItem("user_list"));

    let success;
    for(i=0; i<localdata.length; i++){

    
        if((localdata[i].emailid === email) && (localdata[i].password === password)){
            success=true;
            break;
        }
    }
    if(success){
        alert("login successful");
        window.location.href ="../pages/Home.html";
    }else{
        alert("login fail");
    }
}