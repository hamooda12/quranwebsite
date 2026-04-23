import { SelectReader } from './SelectedReader'
import { GetPage1 } from '../sours/page1'
import { GetPage2 } from '../sours/page2'
import { GetPage3 } from '../sours/page3'
import { GetPage4 } from '../sours/page4'
import { LeftPanel } from './LeftPanel'
import { SearchSurah } from './SearchSurah'
import '../Common/commonstyle.css'
import './main.css'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
export function Main() {
  const [selectedSurah, setSelectedSurah] = useState("لم يتم الاختيار");
  const [reacterSelect, setReacterForMain] = useState("لم يتم الاختيار");
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  let [audioUrl, setAudioUrl] = useState([])
  const [iSRepeating, setIsRepeating] = useState(false);
const [searchText, setSearchText] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  const audioRef = useRef(new Audio());
  function getSurahNumber(selectedSurah) {

    switch (selectedSurah) {
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
  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  function Muted() {
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {

      audioRef.current.muted = true;
      setIsMuted(true);
    }
  }
  function SelctedReactier() {

    return reacterSelect === "لم يتم الاختيار" || reacterSelect === "-- اختر قارئًا --"
  }






  function handleSurahSelection(surah) {
    setSelectedSurah(surah);


  }



  useEffect(() => {

    axios.get('http://mp3quran.net/api/_english.php')
      .then((response) => {
        setAudioUrl(response.data.reciters)
      })

  }, [])
  useEffect(() => {
    function getAudio(audioObject) {

      console.log(reacterSelect)
      console.log(audioObject.find(e => e.name === reacterSelect))
      return audioObject.find(e => e.name === reacterSelect);
    }

    if (
      reacterSelect !== "لم يتم الاختيار" &&
      reacterSelect !== "-- اختر قارئًا --" &&
      selectedSurah !== "لم يتم الاختيار" &&
      audioUrl.length
    ) {
      const reciter = getAudio(audioUrl);
      if (!reciter) return;

      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current.src = `${reciter.Server}/${getSurahNumber(selectedSurah)}.mp3`;
      audioRef.current.play();

      setIsPlaying(true);
      setShowPlayer(true);
    }

  }, [reacterSelect, selectedSurah, audioUrl]);
  function Repeted() {
    if (iSRepeating) {
      audioRef.current.loop = false;
      setIsRepeating(false);
    } else {
      audioRef.current.loop = true;
      setIsRepeating(true);


    }
  }
  useEffect(() => {
  const reciterChosen =
    reacterSelect !== "لم يتم الاختيار" &&
    reacterSelect !== "-- اختر قارئًا --";

  const surahNotChosen =
    selectedSurah === "لم يتم الاختيار";

  if (reciterChosen && surahNotChosen) {
    alert("⚠️ الرجاء اختيار سورة قبل التشغيل");
  }
}, [reacterSelect, selectedSurah]);
  const pages = [<GetPage1 setSelectedSurah={setSelectedSurah} onPlay={handleSurahSelection}
     isSelectReacter={SelctedReactier} numberOfPage={numberOfPage} searchText={searchText} />, 
  <GetPage2 setSelectedSurah={setSelectedSurah} onPlay={handleSurahSelection}
     isSelectReacter={SelctedReactier} numberOfPage={numberOfPage} searchText={searchText} />,
  <GetPage3 setSelectedSurah={setSelectedSurah} onPlay={handleSurahSelection}
     isSelectReacter={SelctedReactier} numberOfPage={numberOfPage} searchText={searchText }/>,
  <GetPage4 setSelectedSurah={setSelectedSurah} onPlay={handleSurahSelection}
     isSelectReacter={SelctedReactier} numberOfPage={numberOfPage} searchText={searchText }/>];


  return <div className='main'>
    <LeftPanel selectedSurah={selectedSurah} showPlayer={showPlayer} setReacterForMain={setReacterForMain} togglePlay={togglePlay} isPlaying={isPlaying} onPlayReader={handleSurahSelection} isMuted={isMuted} Muted={Muted} iSRepeating={iSRepeating} Repeted={Repeted} />
    <div className="right-panel">

      <div className="surah-grid-container" id="hi" >
        <h2 className="section-title"><i>🌙</i> السور</h2>
        <SearchSurah onSearch={setSearchText} />
        {pages[numberOfPage - 1]}





        <div className="surah-navigation">
          <button id="prevPage" onClick={() => setNumberOfPage(prev => prev - 1)}
            disabled={numberOfPage === 1}>السابق</button>
          <span id="pageNumber">{numberOfPage}</span>
          <button id="nextPage" onClick={() => {
            setNumberOfPage(prev => prev + 1)
          }} disabled={numberOfPage === pages.length}>
            ٍالتالي</button>
        </div>
      </div>
    </div>
  </div>
}