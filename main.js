let activeTheme=document.getElementById("active-theme")
let body=document.querySelector("body")
let light=document.getElementById("light")
let dark=document.getElementById("dark")
let surahbtn=Array.from(document.getElementsByClassName("surah-btn"))
let audioplayer=document.getElementById("audioPlayer")
let reacter=document.getElementById("selectedReciter")
let selectedSurah=document.getElementById("selectedSurah")
let reacterSelect=document.getElementById("reciterSelect")
let playBtn=document.getElementById("playBtn")
const repeatBtn = document.getElementById('repeatBtn');
let muteBtn=document.getElementById("muteBtn")
const prevPage=document.getElementById("prevPage")
const nextPage=document.getElementById("nextPage")
const pageNumber=document.getElementById("pageNumber")
disabledstatus()
function disabledstatus(){
  pageNumber.textContent==="1"?prevPage.disabled = true:prevPage.disabled = false;
    pageNumber.textContent==="4"?nextPage.disabled = true:nextPage.disabled = false;
}
function pagestatus(next,prev){
  document.getElementById(`page${prev}`).style.display="none"
  document.getElementById(`page${next}`).style.display="block"
}
nextPage.addEventListener("click",()=>{
  
 pageNumber.textContent= String(parseInt(pageNumber.textContent)+1)
 pagestatus(parseInt(pageNumber.textContent),parseInt(pageNumber.textContent)-1)
 disabledstatus()
})
prevPage.addEventListener("click",()=>{
 pageNumber.textContent= String(parseInt(pageNumber.textContent)-1)
 pagestatus(parseInt(pageNumber.textContent),parseInt(pageNumber.textContent)+1)
 disabledstatus()
})
 let isRepeat = false;
let isPlaying = false;
function getSelectedReciterName() {
  return reacterSelect.options[reacterSelect.selectedIndex].text;
}

const surahContainer = document.getElementById("hi");

surahContainer.addEventListener("click", async (e) => {
  const btn = e.target.closest(".surah-btn");
  if (!btn) return;

  playBtn.textContent = "▶";
  audioplayer.style.display = "block";
  selectedSurah.textContent = btn.textContent;
  reacter.textContent = getSelectedReciterName() ;
isPlaying=false
  const reciters = await getAudio();
  const index = getIndex(reciters);
  audio.src = `${index.Server}/${getSurahNumber(btn.textContent)}.mp3`;
});

 
 repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
        
        // Visual feedback for repeat state
        if (isRepeat) {
            repeatBtn.classList.remove('repet');
            repeatBtn.title = 'إيقاف التكرار';
        } else {
            repeatBtn.classList.add('repet');
            repeatBtn.title = 'تكرار السورة';
        }
    });
reacterSelect.addEventListener("change",async()=>{
    playBtn.textContent = "▶" ;
      audioplayer.style.display = "block";
    reacter.textContent=getSelectedReciterName() ;
     let reciters = await getAudio();
    let index = getIndex(reciters);
    
   audio.src = `${index.Server}/${getSurahNumber(selectedSurah.textContent)}.mp3`;
   isPlaying=false;
 
})
light.addEventListener("click",()=>{
    body.className="light-mode";

 
})
dark.addEventListener("click",()=>{
    body.className="dark-mode";
   
})
let audio = new Audio();

function getSurahNumber(surahName) {
   
    switch (surahName) {
        case "البقرة": return "002";
        case "آل عمران": return "003";
        case "النساء": return "004";
        case "المائدة": return "005";
        case "الأنعام": return "006";
        case "الأعراف": return "007";
        case "الأنفال": return "008";
        case "التوبة": return "009";
        case "يونس": return "010";
        case "هود": return "011";
        case "يوسف": return "012";
        case "الرعد": return "013";
        case "إبراهيم": return "014";
        case "الحجر": return "015";
        case "النحل": return "016";
        case "الإسراء": return "017";
        case "الكهف": return "018";
        case "مريم": return "019";
        case "طه": return "020";
        case "الأنبياء": return "021";
        case "الحج": return "022";
        case "المؤمنون": return "023";
        case "النور": return "024";
        case "الفرقان": return "025";
        case "الشعراء": return "026";
        case "النمل": return "027";
        case "القصص": return "028";
        case "العنكبوت": return "029";
        case "الروم": return "030";
        case "لقمان": return "031";
        case "السجدة": return "032";
        case "الأحزاب": return "033";
        case "سبإ": return "034";
        case "فاطر": return "035";
        case "يس": return "036";
        case "الصافات": return "037";
        case "ص": return "038";
        case "الزمر": return "039";
        case "غافر": return "040";
        case "فصلت": return "041";
        case "الشورى": return "042";
        case "الزخرف": return "043";
        case "الدخان": return "044";
        case "الجاثية": return "045";
        case "الأحقاف": return "046";
        case "محمد": return "047";
        case "الفتح": return "048";
        case "الحجرات": return "049";
        case "ق": return "050";
        case "الذاريات": return "051";
        case "الطور": return "052";
        case "النجم": return "053";
        case "القمر": return "054";
        case "الرحمن": return "055";
        case "الواقعة": return "056";
        case "الحديد": return "057";
        case "المجادلة": return "058";
        case "الحشر": return "059";
        case "الممتحنة": return "060";
        case "الصف": return "061";
        case "الجمعة": return "062";
        case "المنافقون": return "063";
        case "التغابن": return "064";
        case "الطلاق": return "065";
        case "التحريم": return "066";
        case "الملك": return "067";
        case "القلم": return "068";
        case "الحاقة": return "069";
        case "المعارج": return "070";
        case "نوح": return "071";
        case "الجن": return "072";
        case "المزمل": return "073";
        case "المدثر": return "074";
        case "القيامة": return "075";
        case "الإنسان": return "076";
        case "المرسلات": return "077";
        case "النبأ": return "078";
        case "النازعات": return "079";
        case "عبس": return "080";
        case "التكوير": return "081";
        case "الانفطار": return "082";
        case "المطففين": return "083";
        case "الإنشقاق": return "084";
        case "البروج": return "085";
        case "الطارق": return "086";
        case "الأعلى": return "087";
        case "الغاشية": return "088";
        case "الفجر": return "089";
        case "البلد": return "090";
        case "الشمس": return "091";
        case "الليل": return "092";
        case "الضحى": return "093";
        case "الشرح": return "094";
        case "التين": return "095";
        case "العلق": return "096";
        case "القدر": return "097";
        case "البينة": return "098";
        case "الزلزلة": return "099";
        case "العاديات": return "100";
        case "القارعة": return "101";
        case "التكاثر": return "102";
        case "العصر": return "103";
        case "الهمزة": return "104";
        case "الفيل": return "105";
        case "قريش": return "106";
        case "الماعون": return "107";
        case "الكوثر": return "108";
        case "الكافرون": return "109";
        case "النصر": return "110";
        case "المسد": return "111";
        case "الإخلاص": return "112";
        case "الفلق": return "113";
        case "الناس": return "114";
        default: return "001";
    }
}



playBtn.addEventListener("click", async () => {
    if(selectedSurah.textContent==="لم يتم الاختيار") {
  alert("اختر سورة");
  return;
    }
    
    else if(getSelectedReciterName()==="-- اختر قارئًا --"){
         alert("اختر قارئ");
  return;
    }
    console.log("reacterSelect")
    console.log(getSelectedReciterName(),audio.src)
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "⏸" : "▶";

  if (!audio.src) {
    let reciters = await getAudio();
    let index = getIndex(reciters);

    audio.src = `${index.Server}/${getSurahNumber(selectedSurah.textContent)}.mp3`;
   
  }

  isPlaying ? audio.play() : audio.pause();
  if(audio.ended||audio.currentTime==="0")
     playBtn.textContent="▶"
});
let isMuted = false;
muteBtn.addEventListener("click", ()=>{
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
        audio.muted=isMuted
});

function getIndex(obj){
let index=obj.find((e) =>e.name===reacterSelect.value);
console.log(reacterSelect.value,index)
return index?index:-1;
}

async function getAudio() {
    try{
    let data= await fetch("http://mp3quran.net/api/_english.php")
    let allaudio=await data.json()
    console.log(allaudio.reciters)
   return allaudio.reciters;
   
  
     
    }
    catch{
        console.log(Error("No sounds here"))
    }
}

