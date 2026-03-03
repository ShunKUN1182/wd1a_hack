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

startMissionList();
