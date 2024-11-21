let typingText = new Typed("#text", {
    strings: ["A Java Developer", "A Backend Programmer"],
    loop: true,
    typeSpeed: 100,  
    backSpeed: 60,  
    backDelay: 1200, 
    startDelay: 500, 
    showCursor: true, 
    cursorChar: "|",

})

let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top>= offset && top < offset+height){
            navLink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
            })
        }
    })
}

let menuIcon = document.querySelector("#menu_icon");
let navBar = document.querySelector("navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("fa-x");
    navBar.classList.toggle("active");
}