const bot = document.querySelector(".bot")
const nav1 = document.querySelector(".nav1")

bot.addEventListener("click", () =>{
    nav1.classList.toggle("nav-menu-visible");

    if (nav1.classList.contains("nav-menu-visible")){
        bot.setAttribute("arial-label", "cerrar menu");
    }
    else{
        bot.setAttribute("arial-label", "cerrar menu");
    }
});
