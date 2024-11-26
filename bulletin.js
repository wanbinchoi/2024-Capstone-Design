// 로컬 스토리지에서 게시물 데이터 가져오기
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// 게시물 목록 요소 가져오기
const postList = document.getElementById("postList");

// 게시물 목록 렌더링 함수
function renderPosts() {
    postList.innerHTML = ""; // 기존 목록 초기화

    if (posts.length === 0) {
        postList.innerHTML = "<tr><td colspan='5'>게시물이 없습니다.</td></tr>";
        return;
    }

    posts.forEach((post) => {
        const row = document.createElement("tr");

        // 번호
        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);

        // 제목 (클릭 시 상세 페이지 이동)
        const titleCell = document.createElement("td");
        const titleLink = document.createElement("a");
        titleLink.href = `detail.html?id=${post.id}`;
        titleLink.textContent = post.title;
        titleCell.appendChild(titleLink);
        row.appendChild(titleCell);

        // 작성자
        const writerCell = document.createElement("td");
        writerCell.textContent = post.writer;
        row.appendChild(writerCell);

        // 날짜
        const dateCell = document.createElement("td");
        dateCell.textContent = post.date;
        row.appendChild(dateCell);

        // 삭제 버튼 (숨김 상태)
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("delete-btn");

        // 삭제 버튼 클릭 이벤트
        deleteButton.addEventListener("click", () => {
            if (confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
                posts = posts.filter((p) => p.id !== post.id); // 해당 게시물 제거
                localStorage.setItem("posts", JSON.stringify(posts)); // 업데이트된 데이터 저장
                renderPosts(); // 화면 갱신
            }
        });

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        // 행 추가
        postList.appendChild(row);
    });
}

// 초기 렌더링
renderPosts();
