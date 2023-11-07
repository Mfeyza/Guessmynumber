
const topscore = document.querySelector(".top-score");
const message = document.querySelector(".msg");
const body = document.querySelector("body");
const checkbutton = document.querySelector(".check");
const guess = document.querySelector(".guess");
const numberdiv = document.querySelector(".number");
const endscore = document.querySelector(".score");
const again = document.querySelector(".again");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const h1 = document.querySelector("h1");
const firstpage = document.querySelector(".firstpage");
const secondpage = document.querySelector(".secondpage");
const start = document.getElementById("start");
const secret = document.querySelector(".secret");
const nameplayer = document.querySelector(".nameplayer");
const nameplayer2 = document.querySelector(".nameplayer2");
const guessmynumberbtn=document.querySelector(".navbar-brand")
let RandomN;
let skor=10;


guessmynumberbtn.addEventListener("click",()=>{
  firstpage.style.display="flex"
  secondpage.style.display="none"
})


  checkbutton.addEventListener("click", () => {
    
    console.log(RandomN);
    

    if (!guess.value) {
      message.textContent = "Boş Geçme!";
    } else if (guess.value == RandomN) {
      secret.textContent = "Helal Sana🤘🏻";
      numberdiv.textContent = RandomN;
      checkbutton.disabled = true;
      body.style.backgroundImage = "url('kazandın.gif')";
      body.style.backgroundSize = "cover";
      easy.disabled=true;
      medium.disabled=true;
      hard.disabled=true;

   if (skor > enYuksekSkor) {
        localStorage.setItem("top-score", skor);
        enYuksekSkor = skor;
        topscore.textContent = skor;
      }
    } else if (skor > 1) {
      skor--;
      endscore.textContent = skor;
      guess.value < RandomN
        ? (message.textContent = "Arttır👆")
        : (message.textContent = "Azalt 👇");
    } else {
     secret.textContent = "Ağlayarak günlüğüne yaz👻";
     endscore.textContent = 0;
     body.style.backgroundColor = "red";
     checkbutton.disabled = true;
     body.style.backgroundImage = "url('loser.gif')";
     body.style.backgroundRepeat = "repeat";
     easy.disabled=true;
     medium.disabled=true;
     hard.disabled=true;
    }
  });



  again.onclick = () => {
  RandomN = Math.ceil(Math.random() * 20);
  skor = 10;
  endscore.textContent = skor;
  numberdiv.textContent = "?";
  guess.value = "";
  checkbutton.disabled = false
  firstpage.style.display = "none";
  secondpage.style.display = "";
  body.style.backgroundImage = "url('playgame.gif')";
  message.textContent = "";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  secret.textContent="Önce seviyeni seç sonra oynayalım 😈"
};

let enYuksekSkor = localStorage.getItem("top-score") || 0;
window.addEventListener("load", function () {
  firstpage.style.display = "flex";
  firstpage.style.backgroundRepeat = "no-repeat";
  firstpage.style.backgroundSize = "cover";
  secondpage.style.display = "none";
});

start.addEventListener("click", () => {
  firstpage.style.display = "none";
  secondpage.style.display = "";
  body.style.backgroundImage = "url('playgame.gif')";
  message.textContent = "";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  secret.textContent="Önce seviyeni seç sonra oynayalım 😈"
});
nameplayer.addEventListener("input", () => {
  nameplayer2.textContent = nameplayer.value;
});



easy.addEventListener("click", () => {
  RandomN = Math.ceil(Math.random() * 20);
  skor = 10;
  console.log(RandomN);
  // everything(RandomN);
  secret.textContent = "Senin için 1 ile 20 arasında bir sayı sakladım";
  endscore.textContent = skor;
  numberdiv.textContent = "?";
  guess.value = "";
  checkbutton.disabled = false;
  body.style.backgroundImage = "url('playgame.gif')";
  message.textContent = "";
  
});
medium.addEventListener("click", () => {
  RandomN = Math.ceil(Math.random() * 30);
  skor = 10;
  // everything(RandomN);
  console.log(RandomN);
  secret.textContent = "Senin için 1 ile 30 arasında bir sayı sakladım";
  endscore.textContent = skor;
  numberdiv.textContent = "?";
  guess.value = "";
  checkbutton.disabled = false;
  body.style.backgroundImage = "url('playgame.gif')";
  message.textContent = "";
});
hard.addEventListener("click", () => {
  RandomN = Math.ceil(Math.random() * 50);
  skor = 10;
  console.log(RandomN);
  // everything(RandomN);
  secret.textContent = "Senin için 1 ile 50 arasında bir sayı sakladım";
  endscore.textContent = skor;
  numberdiv.textContent = "?";
  guess.value = "";
  checkbutton.disabled = false;
  body.style.backgroundImage = "url('playgame.gif')";
  message.textContent = "";
});

function limitToTwoDigits(input) {
  const value = input.value;
  if (value.length > 2) {
    input.value = value.slice(0, 2);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Game Loading..",
    html: '<div class="progress"><div class="color"></div></div></div>',
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: function (modalElement) {
      var colorElement = modalElement.querySelector(".color");
      colorElement.style.animationPlayState = "running";
    },
  });

  setTimeout(function () {
    Swal.close();
  }, 4000);
});
