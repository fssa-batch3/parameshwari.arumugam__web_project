
let bio = JSON.parse(localStorage.getItem("user_list"));
for (let i = 0; i < bio.length; i++) {
  document.getElementById("first_name").value = bio[i]["firstname"];
  document.getElementById("last_name").value = bio[i]["lastname"];
  document.getElementById("email").value = bio[i]["emailid"];
  document.getElementById("date_of_birth").value=bio[i]["date_of_birth"]
  document.getElementById("phone_number").value=bio[i]["Phone_number"]
  document.getElementById("address").value=bio[i]["address"]
}

function update() {
  event.preventDefault();

  let bio = JSON.parse(localStorage.getItem("user_list"));
  for (let i = 0; i < bio.length; i++) {
    if (document.getElementById("email").value == bio[i]["emailid"]) {
      bio[i].firstname = document.getElementById("first_name").value;
      bio[i].lastname = document.getElementById("last_name").value;
      bio[i].date_of_birth = document.getElementById("date_of_birth").value;
      bio[i].Phone_number = document.getElementById("phone_number").value;
      bio[i].address = document.getElementById("address").value;
      // username[i].number= document.getElementById(number).value
    }
    localStorage.setItem("user_list", JSON.stringify(bio));
  }
}

function delete_profile(){
let bio = JSON.parse(localStorage.getItem("user_list"));
      // confirm("Are you sure want to delete your account?")
      for (let i = 0; i <  bio.length; i++) {
      if(document.getElementById("email").value == bio[i]["emailid"]){
          bio.splice(i,1)
          localStorage.setItem("user_list", JSON.stringify(bio));
      }
      }
  }



