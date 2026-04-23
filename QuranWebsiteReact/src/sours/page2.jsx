   import './pageStyle.css'


   export function GetPage2({setSelectedSurah, onPlay, isSelectReacter,numberOfPage}){
console.log(numberOfPage)
   return numberOfPage !== 2 ? null : (
   <div className="surah-page " id="page2">
            <div className="surah-grid" id="surahGrid">
    <button className="surah-btn" data-surah="الفرقان" onClick={() => {
                if (isSelectReacter()) {
                     setSelectedSurah("الفرقان")
                       onPlay("الفرقان")
                    alert("اختر قارئ");
                    return;
                } 
                setSelectedSurah("الفرقان")}}>الفرقان</button>
    <button className="surah-btn" data-surah="الشعراء" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("الشعراء")
            onPlay("الشعراء")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الشعراء")}}>الشعراء</button>
    <button className="surah-btn" data-surah="النمل" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("النمل")
            onPlay("النمل")
                alert("اختر قارئ");
                return;
        }       
        
        
        setSelectedSurah("النمل")}}>النمل</button>
    <button className="surah-btn" data-surah="القصص" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("القصص")
            onPlay("القصص")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("القصص")}}>القصص</button>
    <button className="surah-btn" data-surah="العنكبوت" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("العنكبوت")
            onPlay("العنكبوت")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("العنكبوت")}}>العنكبوت</button>
    <button className="surah-btn" data-surah="الروم" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("الروم")
            onPlay("الروم")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الروم")}}>الروم</button>
    <button className="surah-btn" data-surah="لقمان" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("لقمان")
            onPlay("لقمان")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("لقمان")}}>لقمان</button>
    <button className="surah-btn" data-surah="السجدة" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("السجدة")
            onPlay("السجدة")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("السجدة")}}>السجدة</button>
    <button className="surah-btn" data-surah="الأحزاب" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("الأحزاب")
            onPlay("الأحزاب")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الأحزاب")}}>الأحزاب</button>
    <button className="surah-btn" data-surah="سبإ" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("سبإ")
            onPlay("سبإ")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("سبإ")}}>سبإ</button>
    <button className="surah-btn" data-surah="فاطر" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("فاطر")
            onPlay("فاطر")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("فاطر")}}>فاطر</button>
    <button className="surah-btn" data-surah="يس" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("يس")
            onPlay("يس")
                alert("اختر قارئ");
                return;
        }
                   setSelectedSurah("يس")}}>يس</button>   
    <button className="surah-btn" data-surah="الصافات" onClick={() => {
        if(isSelectReacter()) {
            setSelectedSurah("الصافات")
            onPlay("الصافات")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الصافات")}}>الصافات</button>
    <button className="surah-btn" data-surah="ص" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("ص")
                onPlay("ص")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("ص")}}>ص</button>
    <button className="surah-btn" data-surah="الزمر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الزمر")
                onPlay("الزمر")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الزمر")}}>الزمر</button>
    <button className="surah-btn" data-surah="غافر" onClick={() => {
        if(isSelectReacter()) {                setSelectedSurah("غافر")
                onPlay("غافر")
                alert("اختر قارئ");
                return;
        }
        
        
        
        setSelectedSurah("غافر")}}>غافر</button>
    <button className="surah-btn" data-surah="فصلت" onClick={() => {
        
        if(isSelectReacter()) { 
                setSelectedSurah("فصلت")
                onPlay("فصلت")
                alert("اختر قارئ");
                return;
        }
        
        
        setSelectedSurah("فصلت")}}>فصلت</button>
    <button className="surah-btn" data-surah="الشورى" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الشورى")
                onPlay("الشورى")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الشورى")}}>الشورى</button>
    <button className="surah-btn" data-surah="الزخرف" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الزخرف")
                onPlay("الزخرف")
                alert("اختر قارئ");
                return;
        }
        
        
        setSelectedSurah("الزخرف")}}>الزخرف</button>
    <button className="surah-btn" data-surah="الدخان" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الدخان")
                onPlay("الدخان")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الدخان")}}>الدخان</button>
    <button className="surah-btn" data-surah="الجاثية" onClick={() => {
        
        if(isSelectReacter()) {
                setSelectedSurah("الجاثية")
                onPlay("الجاثية")
                alert("اختر قارئ");
                return;
        }
        
        setSelectedSurah("الجاثية")}}>الجاثية</button>
    <button className="surah-btn" data-surah="الأحقاف" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الأحقاف")
                onPlay("الأحقاف")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الأحقاف")}}>الأحقاف</button>
    <button className="surah-btn" data-surah="محمد" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("محمد")
                onPlay("محمد")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("محمد")}}>محمد</button>
    <button className="surah-btn" data-surah="الفتح" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الفتح")
                onPlay("الفتح")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الفتح")}}>الفتح</button>
            </div>
        </div>)}