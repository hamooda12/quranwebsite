
import './pageStyle.css'
export function GetPage4({setSelectedSurah, onPlay, isSelectReacter,numberOfPage,searchText}){
   const surahsPage4 = [
  "المزمل",
  "المدثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الانفطار",
  "المطففين",
  "الإنشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس"
];
 return numberOfPage !== 4 ? null : (
    <div className="surah-page" id="page4">
      <div className="surah-grid">

        {surahsPage4
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