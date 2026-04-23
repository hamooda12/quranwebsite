import './SelctedReaderStyle.css'
import '../Common/commonstyle.css'
export function SelectReader( {setReacterSelect,setReacter,onPlayReader,selctedSurah}) {
    return <>
        <select className="reciter-select" id="reciterSelect" onChange={(e) => {setReacterSelect(e.target.value)

         setReacter(e.target.value)
            onPlayReader(selctedSurah)
        }}>
                            <option value="-- اختر قارئًا --">-- اختر قارئًا --</option>
                            <option value="Mishary Alafasi" >مشاري العفاسي</option>
                            <option value="Saad Al-Ghamdi">سعد الغامدي</option>
                            <option value="Ahmad Al-Ajmy">أحمد العجمي</option>
                            <option value="Maher Al Meaqli">ماهر المعيقلي</option>
                            <option value="Khalid Al-Jileel">خالد الجليل</option>
                            <option value="Yasser Al-Dosari">ياسر الدوسري</option>
                            <option value="Fares Abbad">فارس عباد</option>
                            <option value="Abdulbasit Abdulsamad">عبد الباسط عبد الصمد</option>
                            <option value="Mahmoud Khalil Al-Hussary">محمود خليل الحصري</option>
                            <option value="Mohammed Siddiq Al-Minshawi">محمد صديق المنشاوي</option>
                            <option value="Abdulrahman Alsudaes">عبد الرحمن السديس</option>
                            <option value="Mustafa raad Alazawy"> مصطفى العزوي
                            </option>
                            <option value="Abdullah Al-Johany">عبد الله عواد الجهني</option>
                            <option value="Ibrahim Kshidan">إبراهيم الشيدان</option>
                            <option value="Nasser Alqatami">ناصر القطامي</option>
                            <option value="Mohammed Ayyub">محمد أيوب</option>
                            <option value="Abdullah Basfer">عبد الله بصفر</option>
                            <option value="Ali Jaber">علي جابر</option>
                            <option value="Idrees Abkr">إدريس أبكر</option>
                            <option value="Bandar Balilah">بندر بليلة</option>
                            <option value="Hani Arrifai">هاني الرفاعي</option>
                            <option value="Abdulrasheed Soufi">عبد الرشيد صوفي</option>
                            <option value="Mohammad Al-Tablaway">محمد الطبلاوي</option>
                            <option value="Jamaan Alosaimi">جمال العصيني</option>
                            <option value="Abdullah Al-Mattrod">عبد الله المطرود</option>
                            <option value="Nathier Almalki">ناثر المالكي</option>
                            <option value="Abdulmohsen Al-Qasim">عبد المحسن القاسم</option>
                            <option value="28">محمد اللحيدان</option>
                            <option value="Ibrahim Al-Akdar">إبراهيم الخضر</option>
                            <option value="Ahmad Al Nufais">أحمد النفيس</option>
                        </select>
    
    </>
}