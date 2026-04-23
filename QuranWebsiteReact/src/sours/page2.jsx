   import './pageStyle.css'


   export function GetPage2({setSelectedSurah, onPlay, isSelectReacter,numberOfPage,searchText}){
const surahsPage2 = [
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبإ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الأحقاف",
  "محمد",
  "الفتح"
];

 return numberOfPage !== 2 ? null : (
    <div className="surah-page" id="page2">
      <div className="surah-grid">

        {surahsPage2
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