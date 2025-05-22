window.addEventListener('DOMContentLoaded', () => {
const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const result = document.getElementById('result');

    uploadBtn.addEventListener('click', () => {
      const file = fileInput.files[0];
      if (!file) {
        alert('파일을 선택해주세요!');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:8080/api/files/upload', {
        method: 'POST',
        body: formData
      })
      .then(res => res.text())
      .then(data => {
        result.textContent = '업로드 결과: ' + data;
      })
      .catch(err => {
        result.textContent = '업로드 실패: ' + err.message;
      });
    });

  })