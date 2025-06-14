const em = document.getElementById("usrname");
const ps = document.getElementById("passwrd");
const rm =document.getElementById("remberme")

function login() {

    if(rm.checked){
        console.log(em.value, ps.value);      
    }
    else{
        console.log("Please accept remember me");
    }
  
}
