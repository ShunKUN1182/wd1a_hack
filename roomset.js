const startBtn = document.querySelector(".start_trigger");
const overlay = document.querySelector(".overlay");
const returnBtn = document.querySelector(".room_text_wrap");
const body = document.body;

startBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();

    overlay.classList.add("active");

    // setTimeout(()=>{
    //     body.classList.add("fade_out");
    // } ,1800);

    setTimeout(()=>{
    window.location.href = "mission.html";
    } ,2000);
})

returnBtn.addEventListener("click",()=>{
    window.location.href = "index.html";
})