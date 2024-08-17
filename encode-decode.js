function caesar(){
    let msg1 = document.getElementById("msg-1") ;
    msg1.innerHTML = "Caesar Cipher"

    let msg2 = document.getElementById("msg-2")
    msg2.innerHTML = "เป็นการเข้ารหัสที่เปลี่ยนตัวอักษรในข้อความโดยการเลื่อนตำแหน่งตามจำนวนที่กำหนด "
                    + " <br> ตัวอย่าง : เลื่อนตัวอักษรคำว่า silpakorn ไป 3 ตำแหน่งจะได้เป็น kurmncsolp"
}

function atbash(){
    let msg1 = document.getElementById("msg-1") ;
    msg1.innerHTML = "Atbash Cipher"

    let msg2 = document.getElementById("msg-2")
    msg2.innerHTML = "เป็นการเข้ารหัสที่ใช้การแทนที่ตัวอักษรด้วยตัวอักษรที่อยู่ตรงข้ามกันในตัวอักษรเช่น A = Z, B = Y, C = X "
                    + "<br> ตัวอย่าง : แปลงคำว่า silpakorn จะได้เป็น hrokzpilm"
}

function vigenere(){
    let msg1 = document.getElementById("msg-1") ;
    msg1.innerHTML = "Vigenere Cipher"

    let msg2 = document.getElementById("msg-2")
    msg2.innerHTML = "เป็นการเข้ารหัสที่ใช้คำหลักในการเข้ารหัสข้อความ"
                    + "<br> ตัวอย่าง : แปลงคำว่า silpakorn โดยใช้ keyword คือ  computing จะได้เป็น hrokzpilm"
}

function ascii(){
    let msg1 = document.getElementById("msg-1") ;
    msg1.innerHTML = "ASCII"

    let msg2 = document.getElementById("msg-2")
    msg2.innerHTML = "รหัสตัวเลขที่แสดงถึงแต่ละตัวอักษร"
                    + "<br> ตัวอย่าง : แปลงคำว่า silpakorn จะได้เป็น 115 105 108 112 97 107 111 114 110"
}