const mine_box = document.querySelectorAll(".mine_box");

mine_box.forEach((get)=> {
    const icon = get.querySelector(".icon");
    const answer = get.querySelector(".answer");

    get.addEventListener("click", ()=> {
        if (icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        } else {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
});