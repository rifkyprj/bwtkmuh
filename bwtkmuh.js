const secretCode = "FANTASH";

function start() {
    document.getElementById("welcomePopup").style.display = "none";

    document
    .getElementById("verify")
    .classList.remove("hidden");
}

function checkCode() {

    const input =
    document.getElementById("codeInput").value;

    if(input === secretCode){

        document
        .getElementById("verify")
        .classList.add("hidden");

        document
        .getElementById("surprise")
        .classList.remove("hidden");

        document
        .getElementById("bgMusic")
        .play();

        typeMessage();

        startCountdown();

    }else{

        alert(
        "Kode salah, anda tidak fantashhh 😔"
        );

    }
}

const message =
`Hai.

Kita baru beberapa hari ini saling kenal dan jujur itu perkenalan yang kocak
sekaligus menyenangkan, ga banyak yang aku mau sampaikan.....

Makasih banyak udah hadir di hidup aku RAJWA FITRIANI


Ayo pacaran ❤️`;

function typeMessage(){

    let i = 0;

    const text =
    document.getElementById("typingText");

    function typing(){

        if(i < message.length){

            text.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,40);

        }else{

            document
            .getElementById("extraContent")
            .classList.remove("hidden");

        }
    }

    typing();
}

const photos = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
];

let index = 0;

setInterval(()=>{

    const img =
    document.getElementById("photo");

    if(img){

        index++;

        if(index >= photos.length){
            index = 0;
        }

        img.src = photos[index];
    }

},3000);

function startCountdown(){

    const startDate =
    new Date("2026-05-20");

    setInterval(()=>{

        const now = new Date();

        const diff =
        now - startDate;

        const days =
        Math.floor(diff /
        (1000*60*60*24));

        document
        .getElementById("timer")
        .innerText =
        days + " hari";

    },1000);

}

function showFinalMessage(){

    alert(
    "❤️ I LOVE YOU SENGGG ❤️"
    );

}