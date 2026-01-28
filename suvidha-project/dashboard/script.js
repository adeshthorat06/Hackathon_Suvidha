document.querySelectorAll("button").forEach(btn=>{
  btn.onclick=()=>alert("Demo only – backend not connected");
});
document.querySelector("#complaintsTab").onclick = () => {
  window.location.href = "complaint.html";
};
function openPayment(amount, bill){
  document.getElementById("payAmount").innerText = amount;
  document.getElementById("billNo").innerText = bill;
  document.getElementById("paymentOverlay").classList.remove("hidden");
}

function closePayment(){
  document.getElementById("paymentOverlay").classList.add("hidden");
}

/* Attach to Pay Now buttons */
document.querySelectorAll(".pay").forEach(btn=>{
  btn.onclick = () => openPayment("2,450", "ELEC-2024-001234");
});
function openService(service){
  window.location.href = "../" + service + "/" + "index.html";
}