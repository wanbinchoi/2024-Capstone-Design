// 자취용품 데이터 정리
const householdItems = {
    "생활 필수 용품": [
        { name: "디베아 D18 무선 청소기", 특징: "가볍고 흡입력이 강하며, 좁은 공간에서 사용하기 적합", 가격: "약 10만 원대", 구매처: ["쿠팡", "11번가"] },
        { name: "샤오미 드리미 V9 무선 청소기", 특징: "디베아와 유사한 성능으로 흡입력이 뛰어남", 가격: "약 15~20만 원", 구매처: ["샤오미 공식 스토어", "쿠팡"] },
        { name: "이염 방지 세탁티슈", 특징: "세탁 시 옷 색상 물드는 것을 방지", 가격: "약 1만 원대", 구매처: ["쿠팡", "티몬"] },
        { name: "물먹는 하마 (제습제)", 특징: "습기 제거와 곰팡이 방지에 필수", 가격: "2,000~3,000원", 구매처: ["다이소", "이마트"] },
    ],
    "주방 용품": [
        { name: "쿠쿠 2L 소형 에어프라이어", 특징: "작은 크기로 공간 절약 가능하며 간편하게 요리 가능", 가격: "약 4~6만 원", 구매처: ["쿠팡", "11번가"] },
        { name: "테팔 키친 나이프 세트", 특징: "자취생에게 적합한 기본 칼 세트", 가격: "약 2~3만 원", 구매처: ["쿠팡", "G마켓"] },
        { name: "샤오미 미니멀 전기포트", 특징: "물 끓이는 시간이 빠르고 디자인이 심플함", 가격: "약 3~5만 원", 구매처: ["샤오미 공식 스토어", "오늘의집"] },
    ],
    "자취 용품": [
        {name : "카일 40CM 수납 오픈 선반장", 특징 : "주방, 거실 수납공간으로 적합", 가격 : "약 3~5만 원", 구매처 : ["오늘의 집", "이케아"] },
        {name : "어반 아치형 전신 거울", 특징 : "원룸을 넓어 보이게 하는 디자인", 가격 : "약 2~3만 원", 구매처 : ["오늘의 집", "마켓컬리"] },
        {name : "전자레인지대(3단형)", 특징 : "전자레인지, 소형 주방 가전 정리에 유용", 가격 : "약 3~5만 원대", 구매처 : ["쿠팡, 11번가"] },
    ],
    "편의 용품" : [
        {name : "스탠드형 실내 빨래건조대", 특징 : "공간 절약형으로, 좁은 방에서 사용 가능", 가격: "약 3~5만 원", 구매처 : ["쿠팡", "G마켓"] },
        {name : "필립스 핸디 스티머 GC350", 특징 : "옷을 걸어둔 채로 빠르게 다름질 가능", 가격 : "약 3~5만 원", 구매처 : ["쿠팡", "G마켓"] },
        {name : "싱크대 언더 선반", 특징 : "주방 하부 공간 활용 극대화", 가격 : "약 1~2만 원", 구매처 : ["다이소", "이케아"] },
        {name : "오리코 멀티탭 6구(USB포트 포함)", 특징 : "전기 플러그와 USB 기기를 동시에 충전 가능", 가격 : "약 1~2만 원", 구매처 : ["쿠팡", "11번가"]},
    ],
    "인테리어 용품" : [
        {name: "이케아 스탠드 조명(FORSA)", 특징 : "원룸 분위기를 감성적으로 연출", 가격 : "약 2만 원대", 구매처 : ["이케아"] },
        {name : "도어형 옷걸이(행거)", 특징 : "벽걸이로 설치해 공간 절약 가능", 가격 : "약 1만 원 이하", 구매처 : ["G마켓", "마켓컬리"] },
        {name : "라온 무소음 벽시계", 특징 : "원룸에서 조용한 환경 유지 가능", 가격 : "약 1만 원대", 구매처 : ["G마켓", "오늘의 집"] },
        {name : "한샘 미니 러그", 특징 : "방 분위기를 따듯하고 아늑하게 만들어 줌", 가격 : "약 2만 원대", 구매처 : ["한샘몰", "오늘의 집"] },
        {name : "우드톤 캔들 워머", 특징 : "향초를 안전하게 사용하면서 방 안의 향기 개선", 가격 : "약 2만 원대", 구매처 : ["마켓컬리", "오늘의 집"] }, 
    ]
};

// 카테고리별 아이템 표시 함수
function showHouseholdList(category) {
    const householdBox = document.getElementById("household-box");
    const householdList = document.getElementById("household-list");
    const householdTitle = householdBox.querySelector("h3");

    // 기존 리스트 초기화
    householdList.textContent = "";

    // 제목 업데이트
    householdTitle.textContent = category;

    // 리스트 항목 생성
    householdItems[category].forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.name}</strong><br>
            특징: ${item.특징}<br>
            가격: ${item.가격}<br>
            구매처: ${item.구매처.join(", ")}
        `;
        householdList.appendChild(li);

        const br = document.createElement("br");
        householdList.appendChild(br);
    });

    // 상자 표시
    householdBox.style.display = "block";
}
const categories = Object.keys(householdItems);
document.querySelectorAll(".household-item").forEach((button, index) => {
    button.onclick = () => showHouseholdList(categories[index]);
});

// 상자 닫기 이벤트
document.getElementById("close").onclick = function () {
    document.getElementById("household-box").style.display = "none";
};
