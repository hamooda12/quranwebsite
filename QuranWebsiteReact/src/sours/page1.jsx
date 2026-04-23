import './pageStyle.css'

export function GetPage1({ setSelectedSurah, onPlay, isSelectReacter }) {





    return <div className="surah-page" id="page1">
        <div className="surah-grid" id="surahGrid">

            <button className="surah-btn" data-surah="البقرة" onClick={() => {
                if (isSelectReacter()) {
                     setSelectedSurah("البقرة")
                       onPlay("البقرة")
                    alert("اختر قارئ");
                    return;
                }

                setSelectedSurah("البقرة")

              

            }}>البقرة</button>
            <button className="surah-btn" data-surah="آل عمران" onClick={() => {
                    if (isSelectReacter()) {
                            setSelectedSurah("آل عمران")
                            onPlay("آل عمران")
                        alert("اختر قارئ");
                        return;
                    }
                setSelectedSurah("آل عمران")

            }}>آل عمران</button>
            <button className="surah-btn" data-surah="النساء" onClick={() => {
                    if (isSelectReacter()) {
                            setSelectedSurah("النساء")
                            onPlay("النساء")   
                        alert("اختر قارئ");
                        return;
                    } 
                setSelectedSurah("النساء")

               
            }}>النساء</button>
            <button className="surah-btn" data-surah="المائدة" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("المائدة")
                    onPlay("المائدة")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("المائدة")

               
            }}>المائدة</button>
            <button className="surah-btn" data-surah="الأنعام" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("الأنعام")
                    onPlay("الأنعام")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الأنعام")

            }}>الأنعام</button>
            <button className="surah-btn" data-surah="الأعراف" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("الأعراف")
                    onPlay("الأعراف")
                    alert("اختر قارئ");
                    return;
                }
              setSelectedSurah("الأعراف")
               
            }}>الأعراف</button>
            <button className="surah-btn" data-surah="الأنفال" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("الأنفال")
                    onPlay("الأنفال")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الأنفال")
            }}>الأنفال</button>
            <button className="surah-btn" data-surah="التوبة" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("التوبة")
                    onPlay("التوبة")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("التوبة")

              
            }}>التوبة</button>
            <button className="surah-btn" data-surah="يونس" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("يونس")
                    onPlay("يونس")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("يونس")

            }}>يونس</button>
            <button className="surah-btn" data-surah="هود" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("هود")
                    onPlay("هود")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("هود")

            }}>هود</button>
            <button className="surah-btn" data-surah="يوسف" onClick={() => {
                if (isSelectReacter()) {
                    setSelectedSurah("يوسف")
                    onPlay("يوسف")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("يوسف")

            }}>يوسف</button>
            <button className="surah-btn" data-surah="الرعد" onClick={() => {
               if(isSelectReacter()) {
                setSelectedSurah("الرعد")
                onPlay("الرعد")
                alert("اختر قارئ");
                return;
                }
               setSelectedSurah("الرعد")

                
            }}>الرعد</button>
            <button className="surah-btn" data-surah="إبراهيم" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("إبراهيم")
                    onPlay("إبراهيم")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("إبراهيم")

            }}>إبراهيم</button>
            <button className="surah-btn" data-surah="الحجر" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("الحجر")
                    onPlay("الحجر")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الحجر")

            }}>الحجر</button>
            <button className="surah-btn" data-surah="النحل" onClick={() => {
               if(isSelectReacter()) {
                setSelectedSurah("النحل")
                onPlay("النحل")
                alert("اختر قارئ");
                return;
                }
               setSelectedSurah("النحل")

            }}>النحل</button>
            <button className="surah-btn" data-surah="الإسراء" onClick={() => {
                if(isSelectReacter()) {
setSelectedSurah("الإسراء")
onPlay("الإسراء")
                    alert("اختر قارئ");
                    return;
                }





                setSelectedSurah("الإسراء")

               
            }}>الإسراء</button>
            <button className="surah-btn" data-surah="الكهف" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("الكهف")
                    onPlay("الكهف")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الكهف")

            
            }}>الكهف</button>
            <button className="surah-btn" data-surah="مريم" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("مريم")
                    onPlay("مريم")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("مريم")

               
            }}>مريم</button>
            <button className="surah-btn" data-surah="طه" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("طه")
                    onPlay("طه")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("طه")

                
            }}>طه</button>
            <button className="surah-btn" data-surah="الأنبياء" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("الأنبياء")
                    onPlay("الأنبياء")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الأنبياء")

                
            }}>الأنبياء</button>
            <button className="surah-btn" data-surah="الحج" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("الحج")
                    onPlay("الحج")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("الحج")

                
            }}>الحج</button>
            <button className="surah-btn" data-surah="المؤمنون" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("المؤمنون")
                    onPlay("المؤمنون")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("المؤمنون")

            
            }}>المؤمنون</button>
            <button className="surah-btn" data-surah="النور" onClick={() => {
                if(isSelectReacter()) {
                    setSelectedSurah("النور")
                    onPlay("النور")
                    alert("اختر قارئ");
                    return;
                }
                setSelectedSurah("النور")

            }}>النور</button>
        </div>
    </div>
}