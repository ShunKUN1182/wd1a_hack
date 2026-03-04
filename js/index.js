const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const backBtn = document.querySelector("#backBtn");
const radioIcon = document.querySelectorAll("label");
const codeName = document.querySelector("#codeName");

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

codeName.addEventListener("change", () => {
    // console.log(codeName.value);
    localStorage.setItem("codeName", codeName.value);
});
