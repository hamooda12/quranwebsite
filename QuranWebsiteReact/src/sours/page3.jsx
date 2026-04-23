
import './pageStyle.css'
export function GetPage3({setSelectedSurah}){
    return  <div className="surah-page notactive" id="page3">
            <div className="surah-grid" id="surahGrid">
    <button className="surah-btn" data-surah="الحجرات" onClick={() => setSelectedSurah("الحجرات")}>الحجرات</button>
    <button className="surah-btn" data-surah="ق" onClick={() => setSelectedSurah("ق")}>ق</button>
    <button className="surah-btn" data-surah="الذاريات" onClick={() => setSelectedSurah("الذاريات")}>الذاريات</button>
    <button className="surah-btn" data-surah="الطور" onClick={() => setSelectedSurah("الطور")}>الطور</button>
    <button className="surah-btn" data-surah="النجم" onClick={() => setSelectedSurah("النجم")}>النجم</button>
    <button className="surah-btn" data-surah="القمر" onClick={() => setSelectedSurah("القمر")}>القمر</button>
    <button className="surah-btn" data-surah="الرحمن" onClick={() => setSelectedSurah("الرحمن")}>الرحمن</button>
    <button className="surah-btn" data-surah="الواقعة" onClick={() => setSelectedSurah("الواقعة")}>الواقعة</button>
    <button className="surah-btn" data-surah="الحديد" onClick={() => setSelectedSurah("الحديد")}>الحديد</button>
    <button className="surah-btn" data-surah="المجادلة" onClick={() => setSelectedSurah("المجادلة")}>المجادلة</button>
    <button className="surah-btn" data-surah="الحشر" onClick={() => setSelectedSurah("الحشر")}>الحشر</button>
    <button className="surah-btn" data-surah="الممتحنة" onClick={() => setSelectedSurah("الممتحنة")}>الممتحنة</button>
    <button className="surah-btn" data-surah="الصف" onClick={() => setSelectedSurah("الصف")}>الصف</button>
    <button className="surah-btn" data-surah="الجمعة" onClick={() => setSelectedSurah("الجمعة")}>الجمعة</button>
    <button className="surah-btn" data-surah="المنافقون" onClick={() => setSelectedSurah("المنافقون")}>المنافقون</button>
    <button className="surah-btn" data-surah="التغابن" onClick={() => setSelectedSurah("التغابن")}>التغابن</button>
    <button className="surah-btn" data-surah="الطلاق" onClick={() => setSelectedSurah("الطلاق")}>الطلاق</button>
    <button className="surah-btn" data-surah="التحريم" onClick={() => setSelectedSurah("التحريم")}>التحريم</button>
    <button className="surah-btn" data-surah="الملك" onClick={() => setSelectedSurah("الملك")}>الملك</button>
    <button className="surah-btn" data-surah="القلم" onClick={() => setSelectedSurah("القلم")}>القلم</button>
    <button className="surah-btn" data-surah="الحاقة" onClick={() => setSelectedSurah("الحاقة")}>الحاقة</button>
    <button className="surah-btn" data-surah="المعارج" onClick={() => setSelectedSurah("المعارج")}>المعارج</button>
    <button className="surah-btn" data-surah="نوح" onClick={() => setSelectedSurah("نوح")}>نوح</button>
    <button className="surah-btn" data-surah="الجن" onClick={() => setSelectedSurah("الجن")}>الجن</button>
            </div>
            </div>
}