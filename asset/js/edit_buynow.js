
const url = window.location.search;
const urlparams = new URLSearchParams(url);
const urlserached_value = urlparams.get("id");
console.log(urlserached_value);


// if (activeuser["emailid"] == bio[i]["emailid"]);
const firstname = document.getElementById("ntext");
const number = document.getElementById("pnumber");
const address = document.getElementById("aname");
const city = document.getElementById("text");
const state = document.getElementById("stext");
const pincode = document.getElementById("cnumber");

// }

const bio = JSON.parse(localStorage.getItem("user_list"));
const activeuser = JSON.parse(localStorage.getItem("active_user"));
for (let i = 0; i < bio.length; i++) {
  if (activeuser.emailid == bio[i].emailid) {
    document.getElementById("ntext").value = bio[i].firstname;
    document.getElementById("pnumber").value = bio[i].Phone_number;
    document.getElementById("aname").value = bio[i].address;
    document.getElementById("text").value = bio[i].city;
    document.getElementById("stext").value = bio[i].state;
    document.getElementById("cnumber").value = bio[i].pincode;
  }
};



const form = document.getElementById("buynow");
form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  bio.find((el => {
    if (activeuser.emailid === el.emailid) {
      el.firstname= document.getElementById("ntext").value;
      el.Phone_number=document.getElementById("pnumber").value;
      el.address=document.getElementById("aname").value;
      el.city= document.getElementById("text").value;
      el.state=document.getElementById("stext").value;
      el.pincode=document.getElementById("cnumber").value;
  
      localStorage.setItem("user_list", JSON.stringify(bio));
      localStorage.setItem("active_user",JSON.stringify(el))
  
    }

  }))

  window.location.href=`../../pages/order/Buy Now.html?id=${urlserached_value}`;
 
});

const bouquets = JSON.parse(localStorage.getItem("bouquet"));

// let sumbit = document.getElementById("sumbit_btn");

// sumbit.addEventListener("click", (e) => {
//   window.location.href=`../../pages/order/Buy Now.html?id=${urlserached_value}`;
// });
