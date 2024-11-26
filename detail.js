// URL에서 id 파라미터 가져오기
const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get("id"));

// localStorage에서 게시물 데이터 가져오기
const posts = JSON.parse(localStorage.getItem("posts")) || [];
const post = posts.find(p => p.id === postId);

// 게시물 표시
if (!post) {
    alert("해당 게시물을 찾을 수 없습니다.");
    window.location.href = "bulletin.html";
} else {
    document.getElementById("postTitle").textContent = post.title;
    document.getElementById("postWriter").textContent = post.writer;
    document.getElementById("postDate").textContent = post.date;
    document.getElementById("postContent").textContent = post.content;
}
