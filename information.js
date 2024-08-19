let clickCount = 1;

function handleButtonClick() {
    clickCount++; 

    if (clickCount === 1) {
        information()
    } else if (clickCount === 2) {
        doubt();
    } else if (clickCount === 3) {
        talk()
    } else if (clickCount === 4) {
        givecode()
    } else if (clickCount === 5) {
        goodluck()
        let button1 = document.getElementById("btn-1");
        button1.innerHTML = "กลับสู่หน้าหลัก";
        button1.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
        removeButton('btn-2');
        removeButton('btn-3');
    }
}


function information() {
    let msg = document.getElementById("msg-1")
    msg.innerHTML = "คุณมีอะไรจะสอบถามผม ?"

    let button1 = document.getElementById("btn-1");
    button1.innerHTML = "คุณได้เจอคนน่าสงสัยหรือไม่ ?";

    let button2 = document.getElementById("btn-2");
    button2.innerHTML = "คุณเห็นคนท่าทางแปลก ๆ หรือไม่ ?";

    let button3 = document.getElementById("btn-3");
    button3.innerHTML = "คุณได้พูดคุยกับเขาหรือไม่ ?";
}

function doubt() {
    let msg = document.getElementById("msg-1")
    msg.innerHTML = "ผมเจอคนน่าสงสัย เขาทำท่าทางแปลก ๆ แต่ผมไม่ได้พูดคุยกับเขา"

    let button1 = document.getElementById("btn-1");
    button1.innerHTML = "เขามีท่ายังไง ?";

    let button2 = document.getElementById("btn-2");
    button2.innerHTML = "เขาได้พูดอะไรแปลก ๆ หรือไม่ ?";

    let button3 = document.getElementById("btn-3");
    button3.innerHTML = "คุณได้พูดอะไรกับเขาหรือไม่ ?";
}

function talk() {
    let msg = document.getElementById("msg-1")
    msg.innerHTML = "ผมไม่ได้พูดอะไรกับเขาแต่เขาให้สิ่งนี้กับผมมา"

    let button1 = document.getElementById("btn-1");
    button1.innerHTML = "เขาให้อะไรคุณมาหรอ";

    let button2 = document.getElementById("btn-2");
    button2.innerHTML = "ขอดูหน่อยได้ไหม";

    let button3 = document.getElementById("btn-3");
    button3.innerHTML = "เขาลักษณะยังไง สูงไหม";
}


function givecode() {
    let msg = document.getElementById("msg-1")
    msg.innerHTML = "เขาให้สิ่งนี้กับผมมา [xqlyhuh] "

    let button1 = document.getElementById("btn-1");
    button1.innerHTML = "มันคืออะไร";

    let button2 = document.getElementById("btn-2");
    button2.innerHTML = "มันมีความหมายยังไง";

    let button3 = document.getElementById("btn-3");
    button3.innerHTML = "สิ่งที่คุณได้มามันไม่ผิดแน่ใช่ไหม";
}

function goodluck() {
    let msg = document.getElementById("msg-1")
    msg.innerHTML = "ผมก็ไม่รู้ว่ามันคืออะไร อาจจะเป็นรหัสลับที่คุณต้องแก้ คุณลองมองไปรอบ ๆ ตัวคุณอาจจะช่วยได้ คุณสามารถนำรหัสลับที่คุณแก้ได้มาให้ผมช่วยตรวจสอบได้ในภายหลัง ผมต้องไปแล้ว ขอให้คุณโชคดี "

    let button1 = document.getElementById("btn-1");
    button1.innerHTML = "มันคืออะไร";

    let button2 = document.getElementById("btn-2");
    button2.innerHTML = "มันมีความหมายยังไง";

    let button3 = document.getElementById("btn-3");
    button3.innerHTML = "สิ่งที่คุณได้มามันไม่ผิดแน่ใช่ไหม";

}

function removeButton(buttonId) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.remove();
    }
}
