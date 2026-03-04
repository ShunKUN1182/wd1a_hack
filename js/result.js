const modal = document.querySelector(".modal");
const btns = document.querySelectorAll(".data_wrap");

btns.forEach((e) => {
    e.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

console.log(btns);
