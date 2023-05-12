




let bio = JSON.parse(localStorage.getItem("user_list"));
let activeuser=JSON.parse(localStorage.getItem("active_user"));
for (let i = 0; i < bio.length; i++) {
  if(activeuser["emailid"]==bio[i]["emailid"]){

  document.getElementById("first_name").value = bio[i]["firstname"];
  document.getElementById("last_name").value = bio[i]["lastname"];
  document.getElementById("email").value = bio[i]["emailid"];
  document.getElementById("date_of_birth").value=bio[i]["date_of_birth"]
  document.getElementById("phone_number").value=bio[i]["Phone_number"]
  document.getElementById("address").value=bio[i]["address"]
   document.getElementById("city").value = bio[i]["city"]
  document.getElementById("state").value =  bio[i]["state"]
   document.getElementById("pincode").value =  bio[i]["pincode"]
  }
}


let profilepage = document.getElementById("profilepage")
profilepage.addEventListener("submit", function(){

  let bio = JSON.parse(localStorage.getItem("user_list"));
  for (let i = 0; i < bio.length; i++) {
    if (document.getElementById("email").value == bio[i]["emailid"]) {
      bio[i].firstname = document.getElementById("first_name").value;
      bio[i].date_of_birth = document.getElementById("date_of_birth").value;
      bio[i].Phone_number = document.getElementById("phone_number").value;
      bio[i].address = document.getElementById("address").value;
      bio[i].city = document.getElementById("city").value;
      bio[i].state = document.getElementById("state").value;
      bio[i].pincode = document.getElementById("pincode").value;
    }
    localStorage.setItem("user_list", JSON.stringify(bio));
  }

})


function delete_profile(){
let bio = JSON.parse(localStorage.getItem("user_list"));
      confirm("Are you sure want to delete your account?")
      for (let i = 0; i <  bio.length; i++) {
      if(document.getElementById("email").value == bio[i]["emailid"]){
          bio.splice(i,1)
          localStorage.setItem("user_list", JSON.stringify(bio));
      }
      window.location.href = "../pages/Home.html"
      }
  }

  function logout(){
    let log_out = JSON.parse(localStorage.getItem("active_user"));
    console.log(log_out);
    
    let deletelogout= delete log_out
    

    localStorage.setItem("active_user",deletelogout)  
    window.location.href = "../pages/login.html"


  }
  



