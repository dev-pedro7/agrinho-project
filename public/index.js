// import { showTabs } from '../src/components/Menu.js';
// window.showTabs = showTabs;
 function showTabs() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }