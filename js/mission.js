const missionListWrap = document.querySelector(".mission_list_wrapper");

const missionLists = [
    {
        contents: "お題AAAAAAAA",
        pt: 5,
    },
    {
        contents: "お題BBBBBBBB",
        pt: 1,
    },
    {
        contents: "お題CCCCCCCCC",
        pt: 3,
    },
    {
        contents: "お題DDDDDDDDD",
        pt: 1,
    },
    {
        contents: "お題EEEEEEEEEE",
        pt: 3,
    },
    {
        contents: "お題FFFFFFFFF",
        pt: 1,
    },
    {
        contents: "お題HHHHHHHHHH",
        pt: 3,
    },
    {
        contents: "お題IIIIIIIIII",
        pt: 5,
    },
    {
        contents: "お題JJJJJJJJJJ",
        pt: 3,
    },
    {
        contents: "お題KKKKKKKKK",
        pt: 1,
    },
];

function startMissionList() {
    let randomNums = [];
    for (let i = 0; i < 5; i++) {
        randomNums.push(Math.floor(Math.random() * missionLists.length));
    }
    missionListWrap.insertAdjacentHTML(
        "beforeend",
        `
        <li class="mission_list_wrap">
            <div class="mission_list">
                <p>${missionLists[randomNums[0]].pt}pt</p>
                <p>${missionLists[randomNums[0]].contents}</p>
            </div>
            <div class="change_btn">
                <img src="img/arrow_icon.svg" alt="" />
            </div>
        </li>
        <li class="mission_list_wrap">
            <div class="mission_list">
                <p>${missionLists[randomNums[1]].pt}pt</p>
                <p>${missionLists[randomNums[1]].contents}</p>
            </div>
            <div class="change_btn">
                <img src="img/arrow_icon.svg" alt="" />
            </div>
        </li>
        <li class="mission_list_wrap">
            <div class="mission_list">
                <p>${missionLists[randomNums[2]].pt}pt</p>
                <p>${missionLists[randomNums[2]].contents}</p>
            </div>
            <div class="change_btn">
                <img src="img/arrow_icon.svg" alt="" />
            </div>
        </li>
        <li class="mission_list_wrap">
            <div class="mission_list">
                <p>${missionLists[randomNums[3]].pt}pt</p>
                <p>${missionLists[randomNums[3]].contents}</p>
            </div>
            <div class="change_btn">
                <img src="img/arrow_icon.svg" alt="" />
            </div>
        </li>
        <li class="mission_list_wrap">
            <div class="mission_list">
                <p>${missionLists[randomNums[4]].pt}pt</p>
                <p>${missionLists[randomNums[4]].contents}</p>
            </div>
            <div class="change_btn">
                <img src="img/arrow_icon.svg" alt="" />
            </div>
        </li>
    `,
    );
}

function missionChange(e) {
    const randomNum = Math.floor(Math.random() * missionLists.length);
    e.innerHTML = `
            <p>${missionLists[randomNum].pt}pt</p>
            <p>${missionLists[randomNum].contents}</p>
        `;
}

startMissionList();
const changeBtn = document.querySelectorAll(".change_btn");
const missionListBtn = document.querySelectorAll(".mission_list");
const myPoint = document.querySelector("#myPoint");
const maxScoreInput = document.querySelector("#maxScoreInput");
const maxScore = 20;
let pointCounter = 0;
console.log(changeBtn);

maxScoreInput.textContent = maxScore;


missionListBtn.forEach((e) => {
    let count = 0;
    e.addEventListener("click", (ele) => {
        if (count == 1) {
            return;
        }
        count = 1;
        let pointNum = e.querySelector("p").textContent;
        pointNum = pointNum.split("p");
        pointNum = Number(pointNum[0]);
        pointCounter += pointNum;
        console.log(pointCounter);
        myPoint.textContent = pointCounter;
        if (pointCounter >= maxScore) {
            // alert("ゲーム終了だよ！");
            const overlay =document.querySelector(".overlay");
            const body = document.body;
            overlay.classList.add("active");

            setTimeout(()=>{
            window.location.href = "index.html";
            } ,2000);
            
        }
        e.classList.add("mission_complete");
        setTimeout(() => {
            e.classList.remove("mission_complete");
            missionChange(e);
            count = 0;
        }, 1000);
    });
});

changeBtn.forEach((e) => {
    e.addEventListener("click", () => {
        const childEle = e.parentElement.querySelector("div");
        missionChange(childEle);
    });
});
