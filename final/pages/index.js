const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const btn = document.getElementById("btn");
const listButton = document.getElementById("listButton");


menuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");

    if (dropdownMenu.classList.contains("hidden")) {
        menuButton.innerHTML = "☰";
    } else {
        menuButton.innerHTML = "❌";
    }
});
window.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });

  btn.addEventListener("click", () => {
    listButton.classList.toggle("hidden");
  });
  window.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !listButton.contains(e.target)) {
      listButton.classList.add('hidden');
    }
  });
