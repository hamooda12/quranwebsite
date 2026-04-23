
import './pageStyle.css'
export function GetPage3({setSelectedSurah, onPlay, isSelectReacter,numberOfPage,searchText}){
    const surahsPage3 = [
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعة",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن"
];
 return numberOfPage !== 3 ? null : (
    <div className="surah-page" id="page3">
      <div className="surah-grid">

        {surahsPage3
          .filter(name => name.includes(searchText || ""))
          .map((name) => (
            <button
              key={name}
              className="surah-btn"
              data-surah={name}
              onClick={() => {
                if (isSelectReacter()) {
                  alert("اختر قارئ");
                  setSelectedSurah(name);
                  onPlay(name);
                  return;
                }

                setSelectedSurah(name);
                onPlay(name);
              }}
            >
              {name}
            </button>
          ))}

      </div>
    </div>
  );
}