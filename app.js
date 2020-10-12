let menu = document.querySelector(".menu-btn");
let menu_close = document.querySelector(".menu-btn-close");

menu.addEventListener("click", ()=>{
	document.querySelector(".nav-list").classList.add("open");
	document.querySelector(".menu-btn-close").classList.add("open");
})

menu_close.addEventListener("click", ()=>{
	document.querySelector(".nav-list").classList.remove("open");
	document.querySelector(".menu-btn-close").classList.remove("open");
})


let header = document.querySelector("header");

window.addEventListener("scroll", (event) => {
	if (window.scrollY > 0){
		header.classList.add("opacity");
	}
	else {
		header.classList.remove("opacity");
	}
})

document.querySelectorAll(".nav-link").forEach((element) => {
	element.addEventListener("click", ()=>{
		document.querySelector(".nav-list").classList.remove("open");
		document.querySelector(".menu-btn-close").classList.remove("open");
	})
});