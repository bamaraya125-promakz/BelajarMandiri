const PASSWORD = "belajar";

function checkPassword(){
  const input = document.getElementById("passwordInput").value;

  if(input === PASSWORD){
    localStorage.setItem("auth","true");
    document.getElementById("loginPage").style.display = "none";
  } else {
    document.getElementById("loginError").innerText = "Password salah!";
  }
}

window.onload = function(){
  if(localStorage.getItem("auth") === "true"){
    document.getElementById("loginPage").style.display = "none";
  }
};

/* =========================
FILE: script.js
========================= */

/*
=========================================
CONFIG
=========================================
*/

const CONFIG = {
  participantName: "Ridwan Saputra",

  durationMinutes: 100,

  randomQuestion: false,

  passingGrade: {
    twk: 65,
    tiu: 80,
    tkp: 166
  }
};

/*
=========================================
SOAL TWK
=========================================
*/

const twkQuestions = [
{
  question: "Pancasila disahkan pada tanggal?",
  options: [
    "1 Juni 1945",
    "18 Agustus 1945",
    "17 Agustus 1945",
    "22 Juni 1945",
    "20 Mei 1908"
  ],
  answer: 1
},

{
  question: "Pancasila sebagai dasar negara secara yuridis konstitusional disahkan oleh PPKI pada tanggal 18 Agustus 1945. Hal ini termuat dalam...",
  options: [
    "Batang Tubuh UUD 1945",
    "Piagam Jakarta",
    "Penjelasan UUD 1945",
    "Pembukaan UUD 1945 Alinea IV",
    "Dekrit Presiden 5 Juli 1959"
  ],
  answer: 3
},

{
  question: "Semboyan 'Bhinneka Tunggal Ika' diambil dari Kitab Sutasoma karya Mpu Tantular. Makna kata 'Bhinneka' secara etimologi adalah...",
  options: [
    "Berbeda-beda",
    "Tetap satu jua",
    "Keberagaman bangsa",
    "Satu tujuan",
    "Satu kesatuan"
  ],
  answer: 0
},

{
  question: "Tokoh yang menjabat sebagai ketua BPUPKI adalah...",
  options: [
    "Dr. Radjiman Wedyodiningrat",
    "Mr. Soepomo",
    "Ir. Soekarno",
    "RP Soeroso",
    "Drs. Moh. Hatta"
  ],
  answer: 0
},

{
  question: "Sikap menghormati hak orang lain dan suka memberi pertolongan kepada orang lain merupakan butir pengamalan Pancasila sila ke...",
  options: [
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima"
  ],
  answer: 1
},

{
  question: "Berdasarkan UUD 1945, kekuasaan kehakiman di Indonesia dilakukan oleh sebuah Mahkamah Agung dan...",
  options: [
    "Kementerian Hukum dan HAM",
    "Kejaksaan Agung",
    "Komisi Yudisial",
    "Mahkamah Konstitusi",
    "Dewan Perwakilan Rakyat"
  ],
  answer: 3
},

{
  question: "Tata urutan peraturan perundang-undangan di Indonesia menempatkan posisi tertinggi pada...",
  options: [
    "Ketetapan MPR",
    "Peraturan Pemerintah",
    "Undang-Undang",
    "Pancasila",
    "UUD 1945"
  ],
  answer: 4
},

{
  question: "Hak DPR untuk melakukan penyelidikan terhadap pelaksanaan suatu undang-undang atau kebijakan pemerintah disebut hak...",
  options: [
    "Budget",
    "Interpelasi",
    "Imunitas",
    "Angket",
    "Menyatakan Pendapat"
  ],
  answer: 3
},

{
  question: "Semboyan bangsa Indonesia adalah?",
  options: [
    "Tut Wuri Handayani",
    "Bhinneka Tunggal Ika",
    "Merdeka atau Mati",
    "NKRI Harga Mati",
    "Garuda Pancasila"
  ],
  answer: 1
}
];

/*
=========================================
SOAL TIU
=========================================
*/

const tiuQuestions = [
{
  question: "Berapakah angka selanjutnya dari deret berikut: 2, 6, 18, 54, ...",
  options: ["124","162","108","150","216"],
  answer: 1
},

{
  question: "Sinonim dari CERMAT adalah?",
  options: [
    "Ceroboh",
    "Hati-hati",
    "Malas",
    "Lemah",
    "Marah"
  ],
  answer: 1
},

{
  question: "Seorang pedagang membeli barang seharga Rp200.000 dan ingin mendapatkan untung 15%. Berapa harga jual barang tersebut?",
  options: [
    "Rp225.000",
    "Rp210.000",
    "Rp230.000",
    "Rp215.000",
    "Rp245.000"
  ],
  answer: 0
},

{
  question: "Semua mahasiswa adalah orang yang rajin. Sebagian orang yang rajin adalah atlet. Kesimpulan yang tepat adalah...",
  options: [
    "Orang yang rajin pasti mahasiswa",
    "Sebagian mahasiswa adalah atlet",
    "Semua mahasiswa adalah atlet",
    "Tidak dapat ditarik kesimpulan",
    "Semua atlet adalah mahasiswa"
  ],
  answer: 3
},

{
  question: "Sebuah persegi panjang memiliki panjang 10 cm dan lebar 5 cm. Jika panjangnya ditambah 20% dan lebarnya dikurang 20%, maka luasnya menjadi...",
  options: [
    "50 cm²",
    "60 cm²",
    "48 cm²",
    "52 cm²",
    "45 cm²"
  ],
  answer: 2
},

{
  question: "Lanjutkan deret angka berikut: 3, 7, 15, 31, ...",
  options: [
    "45",
    "62",
    "60",
    "63",
    "55"
  ],
  answer: 3
},

{
  question: "Hasil dari 0,75 + 1/2 × 4 adalah...",
  options: [
    "3,25",
    "1,25",
    "2,25",
    "5,00",
    "2,75"
  ],
  answer: 2
},

{
  question: "Semua hewan berparuh bertelur. Bebek adalah hewan yang berparuh. Kesimpulan yang sah adalah...",
  options: [
    "Bebek adalah unggas",
    "Semua yang bertelur adalah bebek",
    "Bebek mungkin bertelur",
    "Bebek tidak bertelur",
    "Bebek bertelur"
  ],
  answer: 4
},

{
  question: "Umur Andi 5 tahun lebih tua dari Budi. Jika jumlah umur mereka adalah 25 tahun, berapakah umur Budi?",
  options: [
    "12 Tahun",
    "10 Tahun",
    "15 Tahun",
    "20 Tahun",
    "8 Tahun"
  ],
  answer: 1
},

{
  question: "Sebuah mobil menempuh jarak 120 km dengan kecepatan 60 km/jam. Jika kecepatan mobil ditambah 20 km/jam, berapa lama waktu yang diperlukan?",
  options: [
    "1,5 Jam",
    "3 Jam",
    "1,25 Jam",
    "1 Jam",
    "2 Jam"
  ],
  answer: 0
}
];

/*
=========================================
SOAL TKP
=========================================
*/

const tkpQuestions = [
{
  question: "Saat rekan kerja kesulitan, apa yang Anda lakukan?",
  options: [
    { text:"Membantu semampunya", score:5 },
    { text:"Membiarkan", score:1 },
    { text:"Menunggu perintah", score:2 },
    { text:"Menghindar", score:1 },
    { text:"Menyuruh orang lain", score:2 }
  ]
},

{
  question: "Saat Anda sedang sibuk melayani warga, ada seorang warga yang marah-marah karena merasa terlalu lama menunggu. Sikap Anda adalah...",
  options: [
    { text:"Menasihati warga tersebut agar bersabar", score:4 },
    { text:"Mengabaikannya", score:1 },
    { text:"Meminta rekan kerja lain menangani", score:4 },
    { text:"Menyuruhnya keluar", score:2 },
    { text:"Tetap tenang dan menjelaskan dengan sopan", score:5 }
  ]
},

{
  question: "Anda baru dipindahkan ke divisi baru dan cara kerja tim sangat lambat. Apa yang Anda lakukan?",
  options: [
    { text:"Bekerja sendiri tanpa peduli", score:2 },
    { text:"Mengkritik mereka di depan atasan", score:1 },
    { text:"Mengamati lalu mengusulkan perbaikan", score:5 },
    { text:"Mengikuti saja", score:3 },
    { text:"Meminta pindah divisi", score:1 }
  ]
},

{
  question: "Rekan kantor sering membagikan video meragukan ideologi negara di grup. Sikap Anda adalah...",
  options: [
    { text:"Keluar dari grup", score:1 },
    { text:"Membiarkannya", score:2 },
    { text:"Mendebat keras di grup", score:4 },
    { text:"Melaporkan secara rahasia", score:5 },
    { text:"Ikut membagikan", score:1 }
  ]
},

{
  question: "Sila ke-4 Pancasila mengajarkan bahwa...",
  options: [
    { text:"Musyawarah mufakat", score:5 },
    { text:"Mencintai produk dalam negeri", score:4 },
    { text:"Beribadah", score:3 },
    { text:"Membantu korban bencana", score:2 },
    { text:"Menghargai karya orang lain", score:1 }
  ]
}
];

/*
=========================================
CUSTOM QUESTION
=========================================
*/

function saveCustomQuestion(data){

  let customQuestions =
  JSON.parse(localStorage.getItem("customQuestions")) || [];

  customQuestions.push(data);

  localStorage.setItem(
    "customQuestions",
    JSON.stringify(customQuestions)
  );

}

function loadCustomQuestions(){

  let customQuestions =
  JSON.parse(localStorage.getItem("customQuestions")) || [];

  customQuestions.forEach(q=>{

    if(q.category === "TWK"){
      twkQuestions.push(q);
    }
    else if(q.category === "TIU"){
      tiuQuestions.push(q);
    }
    else if(q.category === "TKP"){
      tkpQuestions.push(q);
    }

  });

}

/*
=========================================
GABUNG SOAL
=========================================
*/

let questions = [];

function prepareQuestions(){

  questions = [];

  loadCustomQuestions();

  twkQuestions.forEach(q=>{
    questions.push({
      ...q,
      category:"TWK",
      type:"normal"
    });
  });

  tiuQuestions.forEach(q=>{
    questions.push({
      ...q,
      category:"TIU",
      type:"normal"
    });
  });

  tkpQuestions.forEach(q=>{
    questions.push({
      ...q,
      category:"TKP",
      type:"tkp"
    });
  });

  if(CONFIG.randomQuestion){
    questions.sort(()=>Math.random()-0.5);
  }

}

prepareQuestions();

/*
=========================================
ELEMENT
=========================================
*/

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const questionNumber = document.getElementById("questionNumber");
const questionCategory = document.getElementById("questionCategory");
const questionNav = document.getElementById("questionNav");

const timerElement = document.getElementById("timer");
const totalQuestionsElement = document.getElementById("totalQuestions");
const progressText = document.getElementById("progressText");

document.getElementById("participantName").innerText =
"Peserta: " + CONFIG.participantName;

totalQuestionsElement.innerText = questions.length;

/*
=========================================
STATE
=========================================
*/

let currentQuestion = 0;

let answers =
JSON.parse(localStorage.getItem("answers")) || [];

let markedQuestions =
JSON.parse(localStorage.getItem("marked")) || [];

/*
=========================================
RENDER NAV
=========================================
*/

function renderNav(){

  questionNav.innerHTML = "";

  questions.forEach((q,index)=>{

    const btn = document.createElement("button");

    btn.innerText = index + 1;

    btn.classList.add("nav-btn");

    if(markedQuestions.includes(index)){
      btn.classList.add("marked");
    }
    else if(answers[index] !== undefined){
      btn.classList.add("answered");
    }
    else{
      btn.classList.add("unanswered");
    }

    btn.onclick = ()=>{
      currentQuestion = index;
      renderQuestion();
    };

    questionNav.appendChild(btn);

  });

}

/*
=========================================
RENDER QUESTION
=========================================
*/

function renderQuestion(){

  const q = questions[currentQuestion];

  questionNumber.innerText =
  "Soal " + (currentQuestion+1);

  questionCategory.innerText = q.category;

  questionText.innerText = q.question;

  optionsContainer.innerHTML = "";

  q.options.forEach((opt,index)=>{

    const div = document.createElement("div");

    div.className = "option";

    if(answers[currentQuestion] === index){
      div.classList.add("selected");
    }

    let text =
    q.type === "tkp"
    ? opt.text
    : opt;

    div.innerHTML =
    `<strong>${String.fromCharCode(65+index)}.</strong> ${text}`;

    div.onclick = ()=>{

      answers[currentQuestion] = index;

      saveData();

      renderQuestion();

      renderNav();

      updateProgress();

    };

    optionsContainer.appendChild(div);

  });

}

/*
=========================================
SAVE
=========================================
*/

function saveData(){

  localStorage.setItem(
    "answers",
    JSON.stringify(answers)
  );

  localStorage.setItem(
    "marked",
    JSON.stringify(markedQuestions)
  );

}

/*
=========================================
PROGRESS
=========================================
*/

function updateProgress(){

  let answered =
  answers.filter(a=>a !== undefined).length;

  let percent =
  Math.floor((answered/questions.length)*100);

  progressText.innerText =
  percent + "%";

}

/*
=========================================
BUTTON
=========================================
*/

document.getElementById("nextBtn")
.onclick = ()=>{

  if(currentQuestion < questions.length-1){
    currentQuestion++;
    renderQuestion();
  }

};

document.getElementById("prevBtn")
.onclick = ()=>{

  if(currentQuestion > 0){
    currentQuestion--;
    renderQuestion();
  }

};

document.getElementById("markBtn")
.onclick = ()=>{

  if(markedQuestions.includes(currentQuestion)){

    markedQuestions =
    markedQuestions.filter(
      q=>q !== currentQuestion
    );

  } else {

    markedQuestions.push(currentQuestion);

  }

  saveData();

  renderNav();

};

document.getElementById("finishBtn")
.onclick = finishExam;

/*
=========================================
TIMER
=========================================
*/

let totalTime =
CONFIG.durationMinutes * 60;

function startTimer(){

  const timer = setInterval(()=>{

    totalTime--;

    let h =
    Math.floor(totalTime/3600);

    let m =
    Math.floor((totalTime%3600)/60);

    let s =
    totalTime%60;

    timerElement.innerText =
    `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    if(totalTime <= 0){

      clearInterval(timer);

      finishExam();

    }

  },1000);

}

timerElement.innerText =
`${String(Math.floor(totalTime/3600)).padStart(2,"0")}:${String(Math.floor((totalTime%3600)/60)).padStart(2,"0")}:${String(totalTime%60).padStart(2,"0")}`;

startTimer();

/*
=========================================
HASIL
=========================================
*/

function finishExam(){

  let twkScore = 0;
  let tiuScore = 0;
  let tkpScore = 0;

  questions.forEach((q,index)=>{

    const ans = answers[index];

    if(ans === undefined) return;

    if(q.category === "TWK"){

      if(ans === q.answer){
        twkScore += 5;
      }

    }

    else if(q.category === "TIU"){

      if(ans === q.answer){
        tiuScore += 5;
      }

    }

    else if(q.category === "TKP"){

      tkpScore +=
      q.options[ans].score;

    }

  });

  const total =
  twkScore + tiuScore + tkpScore;

  document.getElementById("twkScore")
  .innerText = twkScore;

  document.getElementById("tiuScore")
  .innerText = tiuScore;

  document.getElementById("tkpScore")
  .innerText = tkpScore;

  document.getElementById("totalScore")
  .innerText = total;

  let pass =
  twkScore >= CONFIG.passingGrade.twk &&
  tiuScore >= CONFIG.passingGrade.tiu &&
  tkpScore >= CONFIG.passingGrade.tkp;

  document.getElementById("statusResult")
  .innerText =
  pass ? "LULUS" : "TIDAK LULUS";

  document.getElementById("passingInfo")
  .innerHTML = `
  PG TWK: ${CONFIG.passingGrade.twk}<br>
  PG TIU: ${CONFIG.passingGrade.tiu}<br>
  PG TKP: ${CONFIG.passingGrade.tkp}
  `;

  document.getElementById("resultModal")
  .classList.remove("hidden");

}

/*
=========================================
RESET
=========================================
*/

document.getElementById("resetBtn")
.onclick = ()=>{

  if(confirm("Reset ujian?")){

    /*
    =========================================
    HANYA RESET JAWABAN
    =========================================
    */

    localStorage.removeItem("answers");
    localStorage.removeItem("marked");

    location.reload();

  }

};

/*
=========================================
DARK MODE
=========================================
*/

document.getElementById("darkBtn")
.onclick = ()=>{

  document.body.classList.toggle("dark");

};

/*
=========================================
FULLSCREEN
=========================================
*/

document.getElementById("fullscreenBtn")
.onclick = ()=>{

  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }

};

/*
=========================================
ANTI REFRESH
=========================================
*/

window.onbeforeunload = function(){
  return "Jawaban akan tetap tersimpan.";
};

/*
=========================================
INIT
=========================================
*/

renderQuestion();

renderNav();

updateProgress();

/*
=========================================
FITUR TAMBAH SOAL
=========================================
*/

const openAdminBtn = document.getElementById("openAdminBtn");
const closeAdminBtn = document.getElementById("closeAdminBtn");
const adminModal = document.getElementById("adminModal");

if(openAdminBtn){
  openAdminBtn.onclick = ()=>{
    adminModal.classList.remove("hidden");
  };
}

if(closeAdminBtn){
  closeAdminBtn.onclick = ()=>{
    adminModal.classList.add("hidden");
  };
}

/*
=========================================
SIMPAN SOAL BARU
=========================================
*/

document.getElementById("saveQuestionBtn")
.onclick = ()=>{

  const category =
  document.getElementById("newCategory").value;

  const question =
  document.getElementById("newQuestion").value.trim();

  const options = [
    document.getElementById("opt1").value,
    document.getElementById("opt2").value,
    document.getElementById("opt3").value,
    document.getElementById("opt4").value,
    document.getElementById("opt5").value
  ];

  const answer = parseInt(
    document.getElementById("correctAnswer").value
  );

  if(question === ""){
    alert("Soal wajib diisi");
    return;
  }

  if(options.some(o=>o.trim() === "")){
    alert("Semua opsi wajib diisi");
    return;
  }

  /*
  =========================================
  ANTI SOAL DUPLIKAT
  =========================================
  */

  const allQuestions = [
    ...twkQuestions,
    ...tiuQuestions,
    ...tkpQuestions
  ];

  const isDuplicate = allQuestions.some(q =>
    q.question.trim().toLowerCase() ===
    question.toLowerCase()
  );

  if(isDuplicate){
    alert("Soal sudah ada / duplikat");
    return;
  }

  let newQuestionData;

  if(category === "TKP"){

    newQuestionData = {
      category,
      question,
      options:[
        {text:options[0],score:1},
        {text:options[1],score:2},
        {text:options[2],score:3},
        {text:options[3],score:4},
        {text:options[4],score:5}
      ]
    };

  } else {

    newQuestionData = {
      category,
      question,
      options,
      answer
    };

  }

  saveCustomQuestion(newQuestionData);

  alert("Soal berhasil ditambahkan");

  prepareQuestions();

  totalQuestionsElement.innerText = questions.length;

  renderNav();

  renderQuestion();

  updateProgress();

  adminModal.classList.add("hidden");

};

/*
=========================================
FITUR HAPUS SOAL
=========================================
*/

const deleteQuestionBtn =
document.getElementById("deleteQuestionBtn");

if(deleteQuestionBtn){

  deleteQuestionBtn.onclick = ()=>{

    const number = prompt(
      "Masukkan nomor soal yang ingin dihapus"
    );

    if(number === null) return;

    const index = parseInt(number) - 1;

    if(isNaN(index)){
      alert("Nomor soal tidak valid");
      return;
    }

    if(index < 0 || index >= questions.length){
      alert("Nomor soal tidak ditemukan");
      return;
    }

    const q = questions[index];

    if(!confirm(
      `Hapus soal:\n\n${q.question}`
    )){
      return;
    }

    /*
    =========================================
    HAPUS DARI ARRAY ASLI
    =========================================
    */

    if(q.category === "TWK"){

      const realIndex =
      twkQuestions.findIndex(
        item => item.question === q.question
      );

      if(realIndex !== -1){
        twkQuestions.splice(realIndex,1);
      }

    }

    else if(q.category === "TIU"){

      const realIndex =
      tiuQuestions.findIndex(
        item => item.question === q.question
      );

      if(realIndex !== -1){
        tiuQuestions.splice(realIndex,1);
      }

    }

    else if(q.category === "TKP"){

      const realIndex =
      tkpQuestions.findIndex(
        item => item.question === q.question
      );

      if(realIndex !== -1){
        tkpQuestions.splice(realIndex,1);
      }

    }

    /*
    =========================================
    HAPUS DARI LOCAL STORAGE CUSTOM
    =========================================
    */

    let customQuestions =
    JSON.parse(
      localStorage.getItem("customQuestions")
    ) || [];

    customQuestions =
    customQuestions.filter(
      item => item.question !== q.question
    );

    localStorage.setItem(
      "customQuestions",
      JSON.stringify(customQuestions)
    );

    /*
    =========================================
    REFRESH SOAL
    =========================================
    */

    prepareQuestions();

    if(currentQuestion >= questions.length){
      currentQuestion = questions.length - 1;
    }

    totalQuestionsElement.innerText =
    questions.length;

    renderQuestion();

    renderNav();

    updateProgress();

    alert("Soal berhasil dihapus");

  };

}
