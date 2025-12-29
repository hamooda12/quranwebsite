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
 let isRepeat = false;
let isPlaying = false;
function getSelectedReciterName() {
  return reacterSelect.options[reacterSelect.selectedIndex].text;
}

const surahContainer = document.getElementById("surahGrid");

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
    switch(surahName) {
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
        default: return "000";
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
    console.log(getSelectedReciterName())
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

