const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const backBtn = document.querySelector("#backBtn");

console.log(btns);

btns.forEach((e) => {
    e.addEventListener("click", (event) => {
        // console.log("foo");
        event.preventDefault();
        modal.style.display = "flex";
    });
});

backBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
