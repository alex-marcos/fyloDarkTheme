const btn = document.getElementById("botao1");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked)
})