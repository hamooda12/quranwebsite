import {SelectReader}  from './SelectedReader'
import {GetPage1} from '../sours/page1'
import {GetPage2} from '../sours/page2'
import {GetPage3} from '../sours/page3'
import {GetPage4} from '../sours/page4'
import {LeftPanel} from './LeftPanel'
import '../Common/commonstyle.css'
import './main.css'
export function Main(){
    return    <div className='main'>
          <LeftPanel />
            <div className="right-panel">
              
                <div className="surah-grid-container" id="hi">
                    <h2 className="section-title"><i>🌙</i> السور</h2>
           <GetPage1 />
           <GetPage2 />
           <GetPage3 />
           <GetPage4 />
        
        
           
            <div className="surah-navigation">
    <button id="prevPage" disabled>السابق</button>
    <span id="pageNumber">1</span>
    <button id="nextPage">التالي</button>
</div>
</div>
</div>
</div>     
}