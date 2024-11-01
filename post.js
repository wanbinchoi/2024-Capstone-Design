document.getElementById('addPostBtn').addEventListener('click', function() {
    const titleInput = document.getElementById('title').value.trim();
    const contentInput = document.getElementById('content').value.trim();
    
    // 빈 값 검증
    if (!titleInput || !contentInput) {
        alert("제목과 내용을 모두 입력해야 합니다.");
        return; // 빈 값이 있을 경우 함수를 종료
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        title: titleInput,
        content: contentInput,
        author: '작성자', // 예시로 고정된 작성자
        date: new Date().toISOString().split('T')[0]
    };

    // 새 게시물 추가
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    // 게시물 목록에 추가
    addPostToList(newPost);

    // 입력 필드 초기화
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // 게시물 추가 후 bulletin.html로 이동
    window.location.href = 'bulletin.html'; // 게시물 추가 후 게시판으로 이동
});

// 게시물을 목록에 추가하는 함수
function addPostToList(post) {
    const postList = document.getElementById('postList');
    const listItem = document.createElement('li');
    listItem.textContent = `${post.title} - ${post.author} (${post.date})`;
    listItem.onclick = () => alert(post.content); // 클릭 시 내용 보여주기
    postList.appendChild(listItem);
}
