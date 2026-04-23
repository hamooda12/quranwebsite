import './header.css'
import '../Common/commonstyle.css'
import { useEffect, useState } from 'react'
export function Header(){
 const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(theme + "-mode");
  }, [theme]);
    return   <div className="header">
            <h1><i>﷽</i> تلاوات القرآن الكريم</h1>
            <p className="subtitle">استمع إلى تلاوات جزء عم بأصوات أشهر القراء</p>
            
            <div className="pattern-divider"></div>
            
           
            <div className="theme-switcher">
                <span className="theme-label">وضع العرض:</span>
                <div className="theme-toggle" id="themeToggle">
                    <div className="theme-slider" id="active-theme"></div>
                    <div className="theme-option active" id="dark" onClick={()=>{
                        setTheme("dark");
                    }}>الوضع الداكن</div>
                    <div className="theme-option" id="light" onClick={()=>{
                        setTheme("light");
                    }}>الوضع الفاتح</div>
                </div>
            </div>
        </div>
}