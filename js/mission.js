const missionListWrap = document.querySelector(".mission_list_wrapper");

const missionLists = [
    { contents: "ドン引きさせろ！", pt: 5 },
    { contents: "相手を笑わせろ！", pt: 3 },
    { contents: "3回しりとりで返事を返せ！", pt: 1 },
    { contents: "相手がスマホゲームをする", pt: 3 },
    { contents: "手を繋ぐ", pt: 3 },
    { contents: "靴紐を結ばせる", pt: 5 },
    { contents: "赤色の商品を手に取らせろ", pt: 3 },
    { contents: "オレンジ色の商品を手に取らせろ", pt: 5 },
    { contents: "黄色の商品を手に取らせろ", pt: 1 },
    { contents: "黄緑色の商品を手に取らせろ", pt: 3 },
    { contents: "緑色の商品を手に取らせろ", pt: 1 },
    { contents: "水色の商品を手に取らせろ", pt: 3 },
    { contents: "青色の商品を手に取らせろ", pt: 1 },
    { contents: "紫色の商品を手に取らせろ", pt: 3 },
    { contents: "苗字で呼ばれろ", pt: 1 },
    { contents: "相手に髪の毛を触らせろ！", pt: 3 },
    { contents: "試食を食べろ！", pt: 5 },
    { contents: "ゲームセンターに行け！", pt: 3 },
    { contents: "サングラスを試着させろ！", pt: 5 },
    { contents: "黄色の商品を手に取らせろ", pt: 1 },
    { contents: "相手に〇〇よんと言わせる", pt: 5 },
    { contents: "相手に変顔をさせろ！", pt: 3 },
    { contents: "ポケモンカードを見つけろ！", pt: 3 },
    { contents: "相手に店員さんと話させろ！", pt: 3 },
    { contents: "相手に1万円以上の商品を言わせろ", pt: 1 },
    { contents: "相手にこれ欲しいと言わせろ！", pt: 1 },
    { contents: "セール品を見つけろ！", pt: 1 },
    { contents: "相手にこれ高そうと言わせろ", pt: 3 },
    { contents: "相手に英語を喋らせろ", pt: 1 },
    { contents: "100円以下の商品を見つけろ", pt: 1 },
    { contents: "相手に商品を買わせろ！", pt: 5 },
    { contents: "5000円ぴったりの物を見つけろ", pt: 3 },
    { contents: "ポケモンカードを見つけろ！", pt: 3 },
    { contents: "エレベーターに乗れ", pt: 1 },
    { contents: "階段を使え！！！", pt: 5 },
    { contents: "不良品を見つけろ", pt: 3 },
    { contents: "割引シール貼っているところを見る", pt: 5 },
    { contents: "二人で写真を撮る", pt: 1 },
    { contents: "店員が接客してるところを見る", pt: 1 },
    { contents: "品出ししているところを見る", pt: 1 },
    { contents: "相手のものを一口もらう", pt: 3 },
    { contents: "バイト募集の紙を見つける", pt: 1 },
    { contents: "閉店予定のお店を見つける", pt: 1 },
    { contents: "お店のチラシを相手に貰わせる", pt: 5 },
    { contents: "エスカレーターに反対側に乗る人を見る", pt: 3 },
    { contents: "最上階に行かせる", pt: 3 },
    { contents: "相手に謝らせる", pt: 3 },
    { contents: "カゴを持たせる", pt: 3 },
    { contents: "試着させる", pt: 5 },
    { contents: "落とし物見つける", pt: 5 },
    { contents: "迷子の子を見つける", pt: 5 },
    { contents: "丸が3つ入った写真を撮る", pt: 1 },
    { contents: "赤青緑が入った写真を撮る", pt: 3 },
    { contents: "398円の値札を見つけろ！", pt: 1 },
    { contents: "下一桁が税抜1のものを見つけろ！", pt: 3 },
    { contents: "売り切れを見つける", pt: 1 },
    { contents: "特売品と書いた紙を見つける", pt: 3 },
    { contents: "何か買ってあげる", pt: 1 },
    { contents: "賞味期限が今日までのものを見つける", pt: 1 },
    { contents: "トレーを持つ", pt: 3 },
    { contents: "ゴミを捨てる", pt: 1 },
    { contents: "下一桁が税抜1のものを見つけろ！", pt: 3 },
    { contents: "手を洗わせる", pt: 1 },
    { contents: "セルフレジの休止中", pt: 1 },
    { contents: "期間限定のアイスを見つける", pt: 1 },
    { contents: "パッケージに7色以上あるものを見つける", pt: 1 },
    { contents: "落ちてるお金かメダルを見つけろ", pt: 5 },
    { contents: "両替してる人を見ろ", pt: 3 },
    { contents: "体験で遊べるおもちゃで遊べ！", pt: 3 },
    { contents: "顔ハメパネルで写真を撮る", pt: 5 },
    { contents: "ペットを見る", pt: 1 },
    { contents: "映画のパンフレットをゲット", pt: 1 },
    { contents: "相手の好きなキャラクターを見つける", pt: 1 },
    { contents: "相手に飲み物を飲ませろ", pt: 1 },
    { contents: "泣いてる人を見つける", pt: 3 },
    { contents: "大喜びしている人を見つけろ", pt: 1 },
    { contents: "ダジャレを言わせろ", pt: 3 },
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
const inputCodeName = document.querySelector("#inputCodeName");
const charaImg = document.querySelector(".character_img");
const maxScore = localStorage.getItem("maxScore");
const sound = new Audio("../sound/Stamp_se.mp3");
let pointCounter = 0;
console.log(changeBtn);

maxScoreInput.textContent = maxScore;
inputCodeName.textContent = localStorage.getItem("codeName");
charaImg.innerHTML = `
    <img src="${localStorage.getItem("imgPass")}" alt="" />
`;

missionListBtn.forEach((e) => {
    let count = 0;
    e.addEventListener("click", () => {
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
        localStorage.setItem("getPoint", pointCounter);
        console.log(localStorage.getItem("getPoint", pointCounter));

        if (pointCounter >= maxScore) {
            const overlay = document.querySelector(".overlay");
            overlay.classList.add("active");
            sound.play();
            setTimeout(() => {
                window.location.href = "result.html";
            }, 2000);
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
