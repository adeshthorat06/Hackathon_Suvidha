
function showTab(tab){
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));
  document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add("active");
  document.getElementById(tab).classList.add("active");
}
