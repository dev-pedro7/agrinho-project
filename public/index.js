 function showTabs() {
  if (window.innerWidth <= 1023){
    var x = document.getElementById("links")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
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

document.addEventListener('DOMContentLoaded', function(){
  const scrollTop = document.getElementById('scroll-to-top')

  scrollTop.addEventListener('click', function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
})

var prevScroll = window.scrollY
window.onscroll = function() {
  var posScroll = window.scrollY
  var topnav = document.getElementsByClassName("topnav")[0]
  if (prevScroll > posScroll) {
    topnav.style.top = "0"
  } else {
    topnav.style.top = "-50px"
  }
  prevScroll = posScroll;
}

AOS.init()

new window.VLibras.Widget('https://vlibras.gov.br/app');

function openTab(tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
      content.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');
}

function openModal(){
  const modal = document.getElementById('modal-window')
  modal.classList.add('open')
  modal.addEventListener('click',(e)=>{
    if (e.target.id =='close' || e.target.id == 'modal-window'){
      modal.classList.remove('open')
    }
  })
}