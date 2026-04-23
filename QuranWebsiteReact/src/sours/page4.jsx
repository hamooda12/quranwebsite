
import './pageStyle.css'
export function GetPage4({setSelectedSurah, onPlay, isSelectReacter,numberOfPage}){
    return numberOfPage !== 4 ? null: (
        <div className="surah-page " id="page4">
            <div className="surah-grid" id="surahGrid">
    <button className="surah-btn" data-surah="المزمل" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المزمل")
                onPlay("المزمل")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المزمل")}}>المزمل</button>
    <button className="surah-btn" data-surah="المدثر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المدثر")
                onPlay("المدثر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المدثر")}}>المدثر</button>
    <button className="surah-btn" data-surah="القيامة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("القيامة")
                onPlay("القيامة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("القيامة")}}>القيامة</button>
    <button className="surah-btn" data-surah="الإنسان" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الإنسان")
                onPlay("الإنسان")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الإنسان")}}>الإنسان</button>
    <button className="surah-btn" data-surah="المرسلات" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المرسلات")
                onPlay("المرسلات")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المرسلات")}}>المرسلات</button>
    <button className="surah-btn" data-surah="النبأ" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("النبأ")
                onPlay("النبأ")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("النبأ")}}>النبأ</button>
    <button className="surah-btn" data-surah="النازعات" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("النازعات")
                onPlay("النازعات")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("النازعات")}}>النازعات</button>
    <button className="surah-btn" data-surah="عبس" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("عبس")
                onPlay("عبس")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("عبس")}}>عبس</button>
    <button className="surah-btn" data-surah="التكوير" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("التكوير")
                onPlay("التكوير")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("التكوير")}}>التكوير</button>
    <button className="surah-btn" data-surah="الانفطار" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الانفطار")
                onPlay("الانفطار")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الانفطار")}}>الانفطار</button>
    <button className="surah-btn" data-surah="المطففين" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المطففين")
                onPlay("المطففين")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المطففين")}}>المطففين</button>
    <button className="surah-btn" data-surah="الإنشقاق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الإنشقاق")
                onPlay("الإنشقاق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الإنشقاق")}}>الإنشقاق</button>
    <button className="surah-btn" data-surah="البروج" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("البروج")
                onPlay("البروج")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("البروج")}}>البروج</button>
    <button className="surah-btn" data-surah="الطارق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الطارق")
                onPlay("الطارق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الطارق")}}>الطارق</button>
    <button className="surah-btn" data-surah="الأعلى" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الأعلى")
                onPlay("الأعلى")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الأعلى")}}>الأعلى</button>
    <button className="surah-btn" data-surah="الغاشية" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الغاشية")
                onPlay("الغاشية")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الغاشية")}}>al-Ghashiya</button>
    <button className="surah-btn" data-surah="الفجر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الفجر")
                onPlay("الفجر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الفجر")}}>الفجر</button>
    <button className="surah-btn" data-surah="البلد" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("البلد")
                onPlay("البلد")
                alert("اختر قارئ");
                return;
        }
        
        
        setSelectedSurah("البلد")}}>البلد</button>
    <button className="surah-btn" data-surah="الشمس" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الشمس")
                onPlay("الشمس")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الشمس")}}>الشمس</button>
    <button className="surah-btn" data-surah="الليل" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الليل")
                onPlay("الليل")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الليل")}}>الليل</button>
    <button className="surah-btn" data-surah="الضحى" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الضحى")
                onPlay("الضحى")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الضحى")}}>الضحى</button>
    <button className="surah-btn" data-surah="الشرح" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الشرح")
                onPlay("الشرح")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الشرح")}}>الشرح</button>
    <button className="surah-btn" data-surah="التين" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("التين")
                onPlay("التين")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("التين")}}>التين</button>
    <button className="surah-btn" data-surah="العلق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("العلق")
                onPlay("العلق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("العلق")}}>al-`Alaq</button>
    <button className="surah-btn" data-surah="القدر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("القدر")
                onPlay("القدر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("القدر")}}>القدر</button>
    <button className="surah-btn" data-surah="البينة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("البينة")
                onPlay("البينة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("البينة")}}>البينة</button>
    <button className="surah-btn" data-surah="الزلزلة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الزلزلة")
                onPlay("الزلزلة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الزلزلة")}}>الزلزلة</button>
    <button className="surah-btn" data-surah="العاديات" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("العاديات")
                onPlay("العاديات")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("العاديات")}}>العاديات</button>
    <button className="surah-btn" data-surah="القارعة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("القارعة")
                onPlay("القارعة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("القارعة")}}>القارعة</button>
    <button className="surah-btn" data-surah="التكاثر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("التكاثر")
                onPlay("التكاثر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("التكاثر")}}>التكاثر</button>
    <button className="surah-btn" data-surah="العصر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("العصر")
                onPlay("al-`Asr")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("al-`Asr")}}>العصر</button>
    <button className="surah-btn" data-surah="الهمزة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("al-Hamza")
                onPlay("al-Hamza")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("al-Hamza")}}>الهمزة</button>
    <button className="surah-btn" data-surah="الفيل" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("al-Fil")
                onPlay("al-Fil")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("al-Fil")}}>al-Fil</button>
    <button className="surah-btn" data-surah="قريش" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("قريش")
                onPlay("قريش")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("قريش")}}>قريش</button>
    <button className="surah-btn" data-surah="الماعون" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الماعون")
                onPlay("الماعون")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الماعون")}}>الماعون</button>
    <button className="surah-btn" data-surah="الكوثر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الكوثر")
                onPlay("الكوثر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الكوثر")}}>الكوثر</button>
    <button className="surah-btn" data-surah="الكافرون" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الكافرون")
                onPlay("الكافرون")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الكافرون")}}>الكافرون</button>
    <button className="surah-btn" data-surah="النصر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("النصر")
                onPlay("النصر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("النصر")}}>النصر</button>
    <button className="surah-btn" data-surah="المسد" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المسد")
                onPlay("المسد")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المسد")}}>المسد</button>
    <button className="surah-btn" data-surah="الإخلاص" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الإخلاص")
                onPlay("الإخلاص")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الإخلاص")}}>الإخلاص</button>
    <button className="surah-btn" data-surah="الفلق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الفلق")
                onPlay("الفلق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الفلق")}}>الفلق</button>
    <button className="surah-btn" data-surah="الناس" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الناس")
                onPlay("الناس")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الناس")}}>الناس</button>
     

                </div>
            </div>
    )
}