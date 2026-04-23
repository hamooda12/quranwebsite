
import './pageStyle.css'
export function GetPage3({setSelectedSurah, onPlay, isSelectReacter,numberOfPage}){
    return  numberOfPage !== 3 ? null: (
        <div className="surah-page " id="page3">
            <div className="surah-grid" id="surahGrid">
    <button className="surah-btn" data-surah="الحجرات" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الحجرات")
                onPlay("الحجرات")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الحجرات")}}>الحجرات</button>
    <button className="surah-btn" data-surah="ق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("ق")
                onPlay("ق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("ق")}}>ق</button>
    <button className="surah-btn" data-surah="الذاريات" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الذاريات")
                onPlay("الذاريات")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الذاريات")}}>الذاريات</button>
    <button className="surah-btn" data-surah="الطور" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الطور")
                onPlay("الطور")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الطور")}}>الطور</button>
    <button className="surah-btn" data-surah="النجم" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("النجم")
                onPlay("النجم")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("النجم")}}>النجم</button>
    <button className="surah-btn" data-surah="القمر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("القمر")
                onPlay("القمر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("القمر")}}>القمر</button>
    <button className="surah-btn" data-surah="الرحمن" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الرحمن")
                onPlay("الرحمن")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الرحمن")}}>الرحمن</button>
    <button className="surah-btn" data-surah="الواقعة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الواقعة")
                onPlay("الواقعة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الواقعة")}}>الواقعة</button>
    <button className="surah-btn" data-surah="الحديد" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الحديد")
                onPlay("الحديد")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الحديد")}}>الحديد</button>
    <button className="surah-btn" data-surah="المجادلة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المجادلة")
                onPlay("المجادلة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المجادلة")}}>المجادلة</button>
    <button className="surah-btn" data-surah="الحشر" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الحشر")
                onPlay("الحشر")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الحشر")}}>الحشر</button>
    <button className="surah-btn" data-surah="الممتحنة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الممتحنة")
                onPlay("الممتحنة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الممتحنة")}}>الممتحنة</button>
    <button className="surah-btn" data-surah="الصف" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الصف")
                onPlay("الصف")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الصف")}}>الصف</button>
    <button className="surah-btn" data-surah="الجمعة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الجمعة")
                onPlay("الجمعة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الجمعة")}}>الجمعة</button>
    <button className="surah-btn" data-surah="المنافقون" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المنافقون")
                onPlay("المنافقون")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المنافقون")}}>المنافقون</button>
    <button className="surah-btn" data-surah="التغابن" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("التغابن")
                onPlay("التغابن")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("التغابن")}}>التغابن</button>
    <button className="surah-btn" data-surah="الطلاق" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الطلاق")
                onPlay("الطلاق")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الطلاق")}}>الطلاق</button>
    <button className="surah-btn" data-surah="التحريم" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("التحريم")
                onPlay("التحريم")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("التحريم")}}>التحريم</button>
    <button className="surah-btn" data-surah="الملك" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الملك")
                onPlay("الملك")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الملك")}}>الملك</button>
    <button className="surah-btn" data-surah="القلم" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("القلم")
                onPlay("القلم")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("القلم")}}>القلم</button>
    <button className="surah-btn" data-surah="الحاقة" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الحاقة")
                onPlay("الحاقة")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الحاقة")}}>الحاقة</button>
    <button className="surah-btn" data-surah="المعارج" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("المعارج")
                onPlay("المعارج")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("المعارج")}}>المعارج</button>
    <button className="surah-btn" data-surah="نوح" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("نوح")
                onPlay("نوح")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("نوح")}}>نوح</button>
    <button className="surah-btn" data-surah="الجن" onClick={() => {
        if(isSelectReacter()) {
                setSelectedSurah("الجن")
                onPlay("الجن")
                alert("اختر قارئ");
                return;
        }
        setSelectedSurah("الجن")}}>الجن</button>
            </div>
            </div>)
}