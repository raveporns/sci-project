// ฟังก์ชันตรวจสอบรหัส
function check() {
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;
    let modalBody = document.querySelector('.modal-body');
    let modalTitle = document.querySelector('.modal-title');

    if (password === "universe") {
        modalBody.innerHTML = "ขอแสดงยินดีด้วยรหัสของคุณถูกต้อง🎉 ถ้าหากหาโค้ดลับครบทั้ง 4 ฐานแล้วลองนำมารวมกันเพื่อปลดรหัสลับขั้นสุดท้ายแลกของรางวัลสุดพิเศษ";
    } else {
        modalBody.innerHTML = "ขอแสดงความเสียใจด้วยรหัสของคุณไม่ถูกต้อง กรุณาลองใหม่!";
    }

    modalTitle.innerHTML = "ผลการตรวจสอบ";

    const myModal = new bootstrap.Modal(document.getElementById('checkPassword'));
    myModal.show();

    passwordInput.value = '';

    document.getElementById('checkPassword').addEventListener('shown.bs.modal', function () {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                myModal.hide();
            }
        }, { once: true });
    });
}

document.getElementById('checkPassword').addEventListener('hidden.bs.modal', function () {
    location.reload();
});

document.getElementById('check-btn').addEventListener('click', function () {
    check();
});

document.getElementById('password').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        check();
    }
});


