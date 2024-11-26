// 증상별 약 리스트
const medicines = {
    감기: {
        items: ["판콜에이", "부루펜", "타이레놀", "종합감기약(콜대원, 테라플루)"],
        caution: "졸음을 유발할 수 있으니 운전 복용 주의. 감기약은 증상 완화제이므로 심할 시 병원 방문 필요."
    },
    복통: {
        items: ["부스코판", "애드빌 소프트젤", "노스파", "훼스탈"],
        caution: "복통이 심하거나 지속되면 복용 중단 후 병원 방문. 위장 장애가 있는 경우 사용을 피하는 것이 좋습니다."
    },
    두통: {
        items: ["타이레놀", "이부프로펜", "게보린", "아스피린"],
        caution: "공복에 복용하지 말고, 권장 용량을 초과하지 않도록 주의. 과다 복용시 위장 장애나 간 손상 위험이 있습니다."
    },
    배탈: { 
        items: ["스멕타", "정로환", "노루모"],
        caution: "설사나 복통이 심할 때는 복용을 중단하고 의료 상담을 받으세요. 수분 보충이 중요합니다."
    },
    소화불량: {
        items: ["훼스탈", "베아제", "까스활명수"],
        caution: "증상이 자주 반복되면 식습관 개선이 필요합니다. 장기 복용 시 위장 기능 저하 가능성. 소화제 남용을 피하세요."
    },
    변비: {
        items: ["둘코락스", "마그밀", "코락스"],
        caution: "변비약의 장기 복용은 장기능 장애를 유발할 수 있으니 증상이 반복되면 생활습관 개선을 고려하세요. 수분 섭취를 충분히 해야합니다."
    },
    생리통: {
        items: ["이브(Aleve)", "미드올(Midol)", "애드빌"],
        caution: "위장 장애가 있을 수 있으므로 공복에 복용하지 말고, 권장 복용량을 초과하지 마세요. 증상이 지속되면 병원 방문을 권장합니다." 
    },
    근육통: {
        items: ["근육이완제(마이폴, 케노펜)", "파스", "이부프로펜"],
        caution: "사용 부위에 발진이 생길 수 있으니 민감성 피부는 주의, 경미한 통증 완화에 적합하며, 지속되면 병원에서 진료를 받는 것이 좋습니다."    
    },
    편의점: {
        items: [
            {name: "타이레놀 500mg/160mg", symptom: "몸살, 열, 통증 완화", caution: "과량 복용시 간 손상 위험이 있으므로 권장 복용량을 초과하지 않도록 합니다. 1일 최대 4g 이하 복용하세요." },
            { name: "어린이 타이레놀/부루펜 시럽", symptom: "어린이 발열, 통증 완화", caution: "사용 전 체중에 맞는 용량을 확인하고, 권장된 복용 간격을 지켜야 합니다. 만 12세 이하 어린이용으로만 사용하세요." },
            { name: "베아제/ 훼스탈 플러스정", symptom: "소화불량, 속쓰림, 체기", caution: "만성 질환이 있거나 다른 약을 복용 중일 경우 의사와 상의하세요. 과다 복용 시 소화장애가 약화될 수 있습니다." },
            { name: "판콜에이내복액/판피린티정", symptom: "감기 증상(콧물, 기침, 인후통)", caution: "알코올과 함께 복용하지 않으면, 졸음 유발 가능성이 있으니 운전 전 복용을 피하세요. 증상이 심하면 약국 약을 사용하세요." },
            { name: "제일쿨파프/신선파스아렉스", symptom: "근육통, 관절통, 타박상 완화", caution: "피부 자극이 있을 수 있으니 부착 부위를 자주 교체하세요. 상처가 있는 부위에는 사용하지 않으며, 장시간 부착 금지하세요." }
        ],
        caution: "편의점에서 판매되는 약은 일시적인 증상 완화를 위한 것이므로 증상이 지속되면 병원에 방문하세요."
    },
};

function showMedicineList(symptom) {
    const medicineBox = document.getElementById("medicine-box");
    const medicineList = document.getElementById("medicine-list");
    const cautionsText = document.getElementById("caution");

    // 기존 리스트 초기화
    medicineList.textContent = '';

    if (symptom === '편의점') {
        // "편의점"의 약 리스트
        medicines[symptom].items.forEach(medicine => {
            const li = document.createElement('li');

            // 각 항목에 <br> 태그 추가
            li.innerHTML = `
                ${medicine.name}<br>
                증상: ${medicine.symptom}<br>
                <span style="color: red;">주의사항: ${medicine.caution}</span><br><br>
            `;
            medicineList.appendChild(li);
        });
    } else {
        // 다른 증상에 대한 약 리스트
        medicines[symptom].items.forEach(medicine => {
            const li = document.createElement('li');
            li.textContent = medicine; // <br> 태그 없이 단순 텍스트
            medicineList.appendChild(li);
        });
    }

    // "주의사항" 표시
    cautionsText.textContent = medicines[symptom].caution;

    // 약 상자 표시
    medicineBox.style.display = 'block';
}


// 상자 닫기 버튼 이벤트 리스너
document.getElementById("close").addEventListener("click", function() {
    document.getElementById("medicine-box").style.display = 'none';
});

