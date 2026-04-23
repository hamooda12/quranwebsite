import './pageStyle.css'

export function GetPage1({ setSelectedSurah, onPlay, isSelectReacter,numberOfPage,searchText  }) {
const surahs = [
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "إبراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور"
];
const filteredSurahs = surahs.filter(name =>
  name.includes(searchText || "")
);



  return numberOfPage !== 1 ? null : (
  <div className="surah-page">
    <div className="surah-grid">

      {filteredSurahs.map((name) => (
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