function logout(){
    window.location.href="login.html";
}
function mart(){
    window.location.href="choose.html";
}

window.onload=function(){
    let bg=localStorage.getItem("bg");
    if(bg){
   document.body.style.backgroundColor = bg;
    }
}