const startBtn = document.querySelector(".start_trigger");
const overlay = document.querySelector(".overlay");
const returnBtn = document.querySelector(".room_text_wrap");
const body = document.body;
const inputText = document.querySelectorAll(`input[type="text"]`);
const inputRadio = document.querySelectorAll(`input[type="radio"]`);

startBtn.addEventListener("click", (e) => {
    e.preventDefault();

    overlay.classList.add("active");

    // setTimeout(()=>{
    //     body.classList.add("fade_out");
    // } ,1800);
    inputRadio.forEach((e) => {
        if (e.checked) {
            const value = e.value;
            const newValue = value.split("p");
            localStorage.setItem("maxScore", newValue[0]);
        }
    });

    setTimeout(() => {
        window.location.href = "mission.html";
    }, 2000);
});

returnBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

inputText.forEach((e) => {
    const randomNums = [];
    for (let i = 0; i < inputText.length; i++) {
        randomNums.push(Math.floor(Math.random() * 10));
        e.value = randomNums[i];
    }
});
