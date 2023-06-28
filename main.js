


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
          if (window.scrollY > 550) {
              home.style.background = "var(--color-s-m-300)"
              home.style.transition = "0.5s"
  
          } else {
              home.style.background = "none"
          }
  
  })
  
  
  
  