const cleaningInfo = {
    거실: {
        items: ["먼지 제거", "바닥 청소", "창문 청소"],
        caution: "화학 세제를 사용하지 마세요. 창문 청소는 안전하게 작업하세요.",
        tips: [
            {
                title: "창문 청소 꿀팁",
                content: `
                    <ul>
                        <li><strong>유리 얼룩</strong>: 신문지나 커피필터로 닦으면 깨끗하게 닦을 수 있습니다.</li>
                        <li><strong>창문 틈새 먼지</strong>: 칫솔이나 면봉으로 청소하거나 베이킹소다와 식초를 활용하세요.</li>
                    </ul>
                `
            },
            {
                title: "카펫 얼룩 제거 꿀팁",
                content: `
                    <ul>
                        <li>베이킹소다와 물, 식초를 활용해 얼룩을 제거하세요.</li>
                    </ul>
                `
            }
        ],
        detailed: `
            <h4>1. 정리</h4>
            <p>먼저 어지럽혀진 물건들을 제자리에 돌려놓습니다.</p>
            <h4>2. 먼지 제거</h4>
            <ul>
                <li>천장부터 바닥으로 순서를 정합니다.</li>
                <li>먼지떨이로 천장, 조명, 선반 위를 청소한 뒤, 가구를 닦습니다.</li>
            </ul>
            <h4>3. 바닥 청소</h4>
            <ul>
                <li>진공청소기를 사용해 카펫이나 바닥 먼지를 제거합니다.</li>
                <li>필요하면 물걸레로 마무리합니다.</li>
            </ul>
            <h4>4. 창문 및 커튼</h4>
            <ul>
                <li>창문은 유리 세정제로 닦고, 커튼은 세탁하거나 먼지를 털어냅니다.</li>
            </ul>
        `
    },
    주방: {
        items: ["싱크대 청소", "가스레인지 닦기", "바닥 닦기"],
        caution: "뜨거운 물로 작업 시 화상을 주의하세요. 전자기기 주변은 물기가 닿지 않게 하세요.",
        tips: [
            {
                title: "싱크대 배수구 냄새 제거 꿀팁",
                content: `
                    <ul>
                        <li>배수구에 베이킹소다를 뿌리고 식초를 부은 후 10분 후 뜨거운 물로 헹구세요.</li>
                    </ul>
                `
            },
            {
                title: "기름때 제거 꿀팁",
                content: `
                    <ul>
                        <li>주방 세제와 베이킹소다를 섞어 사용하면 효과적입니다.</li>
                    </ul>
                `
            }
        ],
        detailed: `
            <h4>1. 싱크대 청소</h4>
            <ul>
                <li>배수구 필터를 분리해 세척하고, 베이킹소다와 식초를 사용해 배수관을 소독합니다.</li>
                <li>싱크대는 중성세제로 닦고, 헹군 후 마른 천으로 닦아줍니다.</li>
            </ul>
            <h4>2. 가스레인지</h4>
            <ul>
                <li>분리 가능한 부품은 따뜻한 물에 불려 세척합니다.</li>
                <li>가스레인지 표면은 전용 세제를 사용해 닦아줍니다.</li>
            </ul>
            <h4>3. 바닥 청소</h4>
            <ul>
                <li>걸레질 전 음식물 찌꺼기를 먼저 제거합니다.</li>
                <li>물걸레를 사용해 바닥을 닦아줍니다.</li>
            </ul>
        `
    },
    화장실: {
        items: ["세면대 청소", "변기 청소", "거울 닦기"],
        caution: "화학 세정제를 사용 시 환기를 충분히 하세요.",
        tips: [
            {
                title: "물때 제거 꿀팁",
                content: `
                    <ul>
                        <li>레몬즙을 뿌린 뒤 10분 후 닦아내면 효과적입니다.</li>
                    </ul>
                `
            },
            {
                title: "변기 냄새 제거 꿀팁",
                content: `
                    <ul>
                        <li>변기 주변에 베이킹소다를 뿌린 후 닦아냅니다.</li>
                    </ul>
                `
            }
        ],
        detailed: `
            <h4>1. 세면대</h4>
            <ul>
                <li>물때가 많은 부위는 세정제를 사용해 닦아냅니다.</li>
            </ul>
            <h4>2. 변기</h4>
            <ul>
                <li>변기용 세제를 사용하고 솔로 구석구석 닦아줍니다.</li>
            </ul>
            <h4>3. 거울</h4>
            <ul>
                <li>유리 세정제로 닦은 후 마른 천으로 마무리합니다.</li>
            </ul>
        `
    },
    침실: {
        items: ["침대 정리", "바닥 청소", "옷장 정리"],
        caution: "침대 프레임을 청소할 때 손이 끼지 않도록 주의하세요.",
        tips: [
            {
                title: "침대 프레임 청소 꿀팁",
                content: `
                    <ul>
                        <li>프레임에 먼지가 쌓인 경우 젖은 천으로 닦아내세요.</li>
                    </ul>
                `
            },
            {
                title: "옷장 냄새 제거 꿀팁",
                content: `
                    <ul>
                        <li>숯이나 방습제를 옷장 안에 두면 냄새를 제거할 수 있습니다.</li>
                    </ul>
                `
            }
        ],
        detailed: `
            <h4>1. 침대 정리</h4>
            <ul>
                <li>침대 시트와 베개 커버를 세탁합니다.</li>
            </ul>
            <h4>2. 바닥 청소</h4>
            <ul>
                <li>진공청소기로 먼지를 제거하고 물걸레질로 마무리합니다.</li>
            </ul>
            <h4>3. 옷장 정리</h4>
            <ul>
                <li>입지 않는 옷은 따로 분류해 보관합니다.</li>
            </ul>
        `
    },
    작은공간들: {
        items: ["현관","발코니"],
        caution: "화학 세정제를 사용 시 환기를 충분히 하세요.",
        detailed: `
            <h4>1. 현관</h4>
            <ul>
                <li>신발을 정리하고 바닥을 닦습니다.</li>
                <li>도어매트를 털거나 세탁합니다.</li>
            </ul>
            <h4>2. 발코니</h4>
            <ul>
                <li>바닥 먼지와 낙엽 등을 쓸어내고. 필요하면 물청소를 합니다.</li>
                <li>화분이나 기타 물건은 정리합니다.</li>
            <ul>
        `
    }
};



function showCleanList(type) {
    const cleanBox = document.getElementById("clean-box");
    const cleanList = document.getElementById("clean-list");

    // 초기화
    cleanList.innerHTML = '';

    const info = cleaningInfo[type];

    // 청소 항목 리스트
    // info.items.forEach(item => {
    //     const li = document.createElement("li");
    //     li.textContent = item;
    //     cleanList.appendChild(li);
    // });

    // // 청소 방법 추가
    // const pMethod = document.createElement("p");
    // pMethod.textContent = `청소 방법: ${info.method}`;
    // pMethod.classList.add('method-info');

    const pCaution = document.createElement("p");
    pCaution.textContent = `주의사항: ${info.caution}`;
    pCaution.classList.add('caution-info');

    const pDetail = document.createElement("p");
    pDetail.innerHTML = `${info.detailed}`;
    pDetail.classList.add('detailed-info');

    cleanList.appendChild(pDetail);

    if (info.tips) {
    info.tips.forEach(tip => {
        const tipDiv = document.createElement("div");
        tipDiv.classList.add("tip-info");
        tipDiv.innerHTML = `
            <h4>${tip.title}</h4>
            ${tip.content}
        `;
        cleanList.appendChild(tipDiv);
    });
}

    cleanList.appendChild(pCaution);

    // 청소 박스 보이기
    cleanBox.style.display = "block";
}

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("clean-box").style.display = "none";
});
