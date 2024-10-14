function showAlert(message) {
    const alertBox = document.getElementById('alert-box');
    const alertmessage = document.getElementById('alert-message');
    alertmessage.textContent = message;
    alertBox.style.display = 'block';
}

function hideAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none'; // 알림 박스 숨기기
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.join-btn').addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const userid = document.getElementById('userid').value.trim();
        const userpw = document.getElementById('userpw').value.trim();
        const userpwconfirm = document.getElementById('userpw-confirm').value.trim();
        const phonenumber = document.getElementById('userphone').value.trim();
        const address = document.getElementById('useradress').value.trim();
        
        hideAlert(); // 이전 알림 박스 숨기기

        if (!username || !userid || !userpw || !userpwconfirm || !phonenumber || !address) {
            showAlert("모든 항목을 입력하세요.");
            return;
        }
        if (userpw !== userpwconfirm) {
            showAlert("비밀번호가 일치하지 않습니다.");
            return;
        }
        showAlert("회원가입이 완료되었습니다.");
    });

    document.getElementById("close").addEventListener("click", function() {
        hideAlert();
    });
});
