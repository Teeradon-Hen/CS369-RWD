function Selected(evt, className) {
     var box = document.getElementsByClassName(className);
     for (i = 0; i < box.length; i++) {
          box[i].className = box[i].className.replace(" active", "");
     }
     evt.currentTarget.className += " active";
}

//===== MENU SHOW =====
function toggle() {
     const toggle = document.getElementById('nav-toggle'),
          nav = document.getElementById('nav-menu')
     nav.classList.toggle('show');
}


const heart = document.getElementById('heart');
heart.addEventListener('click', function () {
     heart.classList.toggle('red');
});

function select_Category(evt, Category) {
     var i, tabContent, tabLinks;
     tabContent = document.getElementsByClassName("tabContent");
     for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
     }
     tabLinks = document.getElementsByClassName("tabLinks");
     for (i = 0; i < tabLinks.length; i++) {
          tabLinks[i].className = tabLinks[i].className.replace(" active", "");
     }
     document.getElementById(Category).style.display = "block";
     evt.currentTarget.className += " active";
}

