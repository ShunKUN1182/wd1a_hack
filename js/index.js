const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const backBtn = document.querySelector("#backBtn");
const radioIcon = document.querySelectorAll("label");

console.log(radioIcon);

console.log(btns);

btns.forEach((e) => {
    e.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex";
    });
});

backBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

radioIcon.forEach((e) => {
    e.addEventListener("click", () => {
        const iconImgPass = e.querySelector("img").getAttribute("src");
        localStorage.setItem("imgPass", iconImgPass);
    });
});
