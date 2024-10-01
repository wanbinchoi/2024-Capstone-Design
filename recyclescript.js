// 각 종류별 분리수거 정보 및 주의사항
const recyclingInfo = {
    종이류: {
        items: ["종이컵", "신문지", "종이팩", "비닐 코팅 종이"],
        method: "종이는 물에 젖지 않게 분리하여 배출합니다. 비닐 코팅 종이의 경우, 비닐을 분리 후 배출하세요.",
        caution: "비닐 코팅된 종이, 택배 운송장, 이물질이 묻은 종이류는 일반 쓰레기로 배출합니다."
    },
    플라스틱류: {
        items: ["일반 플라스틱", "패트병", "플라스틱 뚜껑", "오염된 플라스틱"],
        method: "플라스틱은 물로 세척한 후 압창하여 배출합니다. 라벨이 있는 경우 제거하고 배출하세요.",
        caution: "오염된 플라스틱은 일반 쓰레기로 배출라고 작은 플라스틱 뚜껑은 별도로 모아 배출합니다. 음식물, 기름 등이 묻은 플라스틱은 재활용 불가."
    },
    유리류: {
        items: ["유리병", "텀블러", "머그컵"],
        method: "유리류는 이물질을 제거하고 분리수거합니다. 깨진 유리는 위험하니 주의해서 배출하세요.",
        caution: "깨진 유리는 신문지 등에 싸서 일반 쓰레기로 배출합니다."
    },
    금속류: {
        items: ["알루미늄 호일", "고철류", "캔류", "부탄가스", "우산"],
        method: "캔류는 물로 세척 후 배출합니다. 부탄가스는 구멍을 내어 배출하세요.",
        caution: "부탄가스는 반드시 구멍을 내어 안전하게 배출합니다."
    },
    기타류: {
        items: ["의류", "비닐류", "스티로폼", "전자제품", "형광등", "테트라팩", "깨진 도자기"],
        method: "형광등과 전자제품은 지정된 장소에 배출합니다.",
        caution: "깨진 도자기는 일반 쓰레기로 배출하며, 테트라팩은 내용물을 비운 후 배출합니다."
    }
};

// 증상 클릭 시 정보 박스를 보여주는 함수
function showMedicineList(type) {
    const medicineBox = document.getElementById("medicine-box");
    const medicineList = document.getElementById("medicine-list");
    const methodInfo = document.createElement('p');
    const cautionInfo = document.createElement('p');

    // 기존 리스트 초기화
    medicineList.textContent = '';
    methodInfo.textContent = '';
    cautionInfo.textContent = '';

    // 약 리스트 생성
    recyclingInfo[type].items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        medicineList.appendChild(li);
    });

    // 분리수거 방법 및 주의사항 추가
    methodInfo.textContent = `분리수거 방법: ${recyclingInfo[type].method}`;
    cautionInfo.textContent = `주의사항: ${recyclingInfo[type].caution}`;
    methodInfo.classList.add('method-info');
    cautionInfo.classList.add('caution-info');

    medicineList.appendChild(methodInfo);
    medicineList.appendChild(cautionInfo);

    // 약 상자 표시
    medicineBox.style.display = 'block';
}

// 상자 닫기 버튼 이벤트 리스너
document.getElementById("close").addEventListener("click", function() {
    document.getElementById("medicine-box").style.display = 'none';
});
