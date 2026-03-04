const missionListWrap = document.querySelector(".mission_list_wrapper");

const missionLists = [
    { contents: "相手に帽子を被らせろ", pt: 5 },
    { contents: "試着させろ", pt: 3 },
    { contents: "店員におすすめを聞かせろ", pt: 5 },
    { contents: "一番派手な服を選ばせろ", pt: 3 },
    { contents: "同じ色の商品を3つ見つけろ", pt: 1 },
    { contents: "値段を見ずに商品を選ばせろ", pt: 5 },
    { contents: "一番安い商品を探せ", pt: 1 },
    { contents: "全身コーデを10秒で決めさせろ", pt: 5 },
    { contents: "似合わなそうな服を選べ", pt: 1 },
    { contents: "一番高い商品を予想させろ", pt: 3 },
    { contents: "靴を1足試着させろ", pt: 3 },
    { contents: "サングラスをかけさせろ", pt: 3 },
    { contents: "店内で一番目立つ服を見つけろ", pt: 1 },
    { contents: "全身同じ色コーデを作れ", pt: 5 },
    { contents: "5秒以内に商品をカゴに入れろ", pt: 1 },
    { contents: "相手に似合う服を本気で選べ", pt: 3 },
    { contents: "お互いに服を選び合え", pt: 5 },
    { contents: "一番ダサい組み合わせを作れ", pt: 3 },
    { contents: "店内で一番可愛い小物を見つけろ", pt: 1 },
    { contents: "値段を見て驚け", pt: 1 },
    { contents: "テーマ『夏』でコーデを作れ", pt: 5 },
    { contents: "テーマ『デート』で選べ", pt: 5 },
    { contents: "テーマ『宇宙人』で選べ", pt: 5 },
    { contents: "相手に即決させろ", pt: 3 },
    { contents: "予算1000円で何か選べ", pt: 3 },
    { contents: "予算500円で何か選べ", pt: 1 },
    { contents: "一番軽い商品を見つけろ", pt: 1 },
    { contents: "同じ値段の商品を2つ見つけろ", pt: 3 },
    { contents: "店内で写真映えする場所を見つけろ", pt: 1 },
    { contents: "全身モノトーンにしろ", pt: 3 },
    { contents: "赤いアイテムだけでコーデしろ", pt: 3 },
    { contents: "緑のアイテムを身につけさせろ", pt: 1 },
    { contents: "一番売れてそうな商品を選べ", pt: 3 },
    { contents: "一番売れてなさそうな商品を選べ", pt: 3 },
    { contents: "相手を店員だと思って接客しろ", pt: 5 },
    { contents: "10秒間ファッションショーをしろ", pt: 5 },
    { contents: "お互いに変顔で写真を撮れ", pt: 1 },
    { contents: "一番派手な帽子を被れ", pt: 3 },
    { contents: "相手に似合うバッグを選べ", pt: 3 },
    { contents: "絶対買わなそうな物を選べ", pt: 1 },
    { contents: "今日の自分にぴったりな物を選べ", pt: 3 },
    { contents: "相手を芸能人風にコーデしろ", pt: 5 },
    { contents: "一番未来っぽい服を選べ", pt: 3 },
    { contents: "一番昭和っぽい服を選べ", pt: 3 },
    { contents: "相手をモデルのように歩かせろ", pt: 3 },
    { contents: "お互いの第一印象コーデを再現しろ", pt: 5 },
    { contents: "全身3色以内でまとめろ", pt: 3 },
    { contents: "一番触り心地の良い服を探せ", pt: 1 },
    { contents: "タグだけ見て商品を選べ", pt: 1 },
    { contents: "英語が書いてある服を選べ", pt: 1 },
    { contents: "ロゴが大きい服を探せ", pt: 1 },
    { contents: "一番重そうな服を選べ", pt: 1 },
    { contents: "今日の運勢で商品を選べ", pt: 5 },
    { contents: "目をつぶって商品を選べ", pt: 5 },
    { contents: "相手に全力で似合うと言わせろ", pt: 1 },
    { contents: "3つ組み合わせてコーデを作れ", pt: 3 },
    { contents: "一番テンションが上がる商品を選べ", pt: 3 },
    { contents: "全身1万円以内でまとめろ", pt: 5 },
    { contents: "相手に変なあだ名をつけろ", pt: 1 },
    { contents: "一番写真映えする服を選べ", pt: 3 },
    { contents: "一番派手な色を選べ", pt: 1 },
    { contents: "店内で一番静かな場所を見つけろ", pt: 1 },
    { contents: "一番高級感ある商品を選べ", pt: 3 },
    { contents: "一番子供っぽい商品を選べ", pt: 1 },
    { contents: "テーマ『初デート』で選べ", pt: 5 },
    { contents: "テーマ『体育祭』で選べ", pt: 3 },
    { contents: "テーマ『海外旅行』で選べ", pt: 5 },
    { contents: "相手を別人レベルで変身させろ", pt: 5 },
    { contents: "お互いに真逆のコーデを作れ", pt: 5 },
    { contents: "一番地味な服を選べ", pt: 1 },
    { contents: "今日の気分を服で表現しろ", pt: 3 },
    { contents: "全身白でまとめろ", pt: 3 },
    { contents: "全身黒でまとめろ", pt: 3 },
    { contents: "相手の嫌いそうな服を選べ", pt: 3 },
    { contents: "一番柔らかい素材を探せ", pt: 1 },
    { contents: "一番光っている商品を選べ", pt: 1 },
    { contents: "一番重ね着しやすい服を選べ", pt: 3 },
    { contents: "相手に即興キャラ設定を作れ", pt: 5 },
    { contents: "テーマ『アイドル』で選べ", pt: 5 },
    { contents: "テーマ『探偵』で選べ", pt: 5 },
    { contents: "テーマ『社長』で選べ", pt: 5 },
    { contents: "一番大人っぽい服を選べ", pt: 3 },
    { contents: "一番子供っぽい服を選べ", pt: 1 },
    { contents: "相手を全力で褒めろ", pt: 1 },
    { contents: "今日の自分とは真逆の服を選べ", pt: 3 },
    { contents: "10秒で全身コーデを決めろ", pt: 5 },
    { contents: "お互いに全力ポーズを決めろ", pt: 1 },
    { contents: "一番軽いバッグを選べ", pt: 1 },
    { contents: "一番重いバッグを選べ", pt: 3 },
    { contents: "テーマ『冬』で選べ", pt: 3 },
    { contents: "テーマ『夏』で選べ", pt: 3 },
    { contents: "相手をヒーロー風にコーデしろ", pt: 5 },
    { contents: "相手を悪役風にコーデしろ", pt: 5 },
    { contents: "今日の自分史上最高コーデを作れ", pt: 5 },
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
