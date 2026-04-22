import './leftpanel.css'
import '../Common/commonstyle.css'
import { SelectReader } from './SelectedReader'
export function LeftPanel() {
    return   <div className="left-panel">
                <div className="reciter-selection">
                    <h2 className="section-title"><i>📖</i> اختر قارئًا</h2>
                    <div className="select-wrapper">
                    < SelectReader/>
                    </div>
                </div>
                
               
                <div className="audio-player-card" id="audioPlayer">
                    <div className="card-header">
                        <h2>مشغل التلاوة</h2>
                        <div className="player-icon">🎵</div>
                    </div>
                    
                    <div className="player-info">
                        <div className="info-row">
                            <div className="info-item">
                                <div>
                                    <div className="info-label">القارئ</div>
                                    <div className="info-value" id="selectedReciter">لم يتم الاختيار</div>
                                </div>
                            </div>
                            <div className="info-item center">
                                <div className="center">
                                    <div className="info-label">السورة</div>
                                    <div className="info-value" id="selectedSurah">لم يتم الاختيار</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="player-controls">
                         <button className="control-btn repet" id="repeatBtn" title="تكرار السورة">
        🔁
    </button>
                        <button className="control-btn secondary" id="muteBtn">
                        🔊
                        </button>
                        <button className="control-btn" id="playBtn">
                            ▶
                        </button>
                    </div>
                    
                    <div className="card-footer">
                        <p className="islamic-quote">"وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ وَنَزَّلْنَاهُ تَنْزِيلًا"</p>
                    </div>
                </div>
            </div>
            }