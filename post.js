document.getElementById("submitPost").addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const writer = "작성자"; // 로그인 시스템 연동 시 변경
    const date = new Date().toLocaleDateString();

    if (!title || !content) {
        alert("제목과 내용을 입력하세요!");
        return;
    }

    // 기존 게시물 데이터 가져오기
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // 새로운 게시물 ID 설정
    //post에 게시물번호만 추가하여 그 중 가장 큰 값을 찾음 게시물이 1개라도 있으면 그 게시물 번호 + 1 아니면 작성한 게시물이 1
    const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;

    // 새로운 게시물 추가
    posts.push({
        id: newId,
        title,
        content,
        writer,
        date,
    });

    // 로컬 스토리지 저장
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("게시물이 추가되었습니다.");

    // 게시판 페이지로 이동
    window.location.href = "bulletin.html";
});
