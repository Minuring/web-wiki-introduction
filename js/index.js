window.onload = function() {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener('click', function() {
    
    const newCommentText = document.getElementById('commentText').value; // 입력된 댓글 텍스트 가져오기
    if (newCommentText) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <div class="comment-item">
                <div class="comment-author">
                    <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
                    <span>방문자</span>
                </div>
                <div class="comment-content">
                    ${newCommentText}
                </div>
            </div>
        `;
        document.getElementById('comments').appendChild(newLi);
        document.getElementById('commentText').value = '';
        alert("댓글이 작성되었습니다.");
    } else {
        alert('댓글을 입력하세요!');
    }
    
  });
}