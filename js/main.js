const icon = document.querySelector(".hamburger");
const links = document.querySelector("#links")


icon.addEventListener("click", ()=>{
    links.classList.toggle("open")
})

