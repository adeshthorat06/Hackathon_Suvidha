document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    alert("Demo action – backend not connected");
  });
});
function goDashboard(){
  window.location.href = "dashboard/index.html";
}