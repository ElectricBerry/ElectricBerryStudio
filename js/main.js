
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navPanel");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
  btn.textContent = nav.classList.contains("show") ? "✕" : "☰";
});
