

function toggleMode(x) {
  // x.classList.toggle("light_mode");
  var element = document.body;
  element.classList.toggle("light-mode");
  x.style.background= "none";
  x.style.border= "none";
  x.style.transition= "2s";
  x.style.transform= "scale(0.9)";
     
  if (x.innerHTML === "dark_mode") {
    x.innerHTML = "light_mode";
  } else {
    x.innerHTML = "dark_mode";
  }
}

window.addEventListener("mousewheel", function () {
        let home = document.getElementById('head')
        if (window.scrollY > 100) {
            home.style.background = "var(--color-s-m-300)"
            home.style.transition = "0.5s"

        } else {
            home.style.background = "none"
        }

})


let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')
let nav = document.getElementById('nav')
let navItems = nav.children;
let items;
  

let toggleActive = () => {
  nav.classList.toggle('toggle')
};

openBtn.addEventListener('click', toggleActive)
closeBtn.addEventListener('click', toggleActive)


for (let i = 0; i <= navItems.length; i++) {
    items = navItems[i];
    items.addEventListener('click', toggleActive)
  }















