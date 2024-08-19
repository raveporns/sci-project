function check() {
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;
    let modalBody = document.querySelector('.modal-body');

    if (password === "universe") {
        modalBody.innerHTML = "ขอแสดงยินดีด้วยรหัสของคุณถูกต้อง🎉 ถ้าหากหาโค้ดลับครบทั้ง 4 ฐานแล้วลองนำมารวมกันเพื่อปลดรหัสลับขั้นสุดท้ายแลกของรางวัลสุดพิเศษ";
    } else {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วยรหัสของคุณไม่ถูกต้อง กรุณาลองใหม่!";
    }

    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerHTML = "ผลการตรวจสอบ";

    const myModal = new bootstrap.Modal(document.getElementById('checkPassword'));
    myModal.show();

    passwordInput.value = '';

    document.getElementById('checkPassword').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            myModal.hide(); 
        }
    });
}

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        check(); 
    }
});
