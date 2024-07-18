 function showTabs() {
  if (window.innerWidth <= 910){
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}

const changeTheme = document.querySelector('#change-theme')

function darkMode() {
  document.body.classList.toggle('dark')
}

function load(){
  const darkTh = localStorage.getItem('dark')
  if (darkTh){
    darkMode()
  }
}
load()

changeTheme.addEventListener('change', function(){
  darkMode()
  localStorage.removeItem('dark')

    if (document.body.classList.contains('dark')){
      localStorage.setItem('dark',1)
    }
})