import Home from '../../pages/home/Home.jsx'
import styles from './header.module.css'
import '../../i18n.js'
import { useTranslation } from 'react-i18next'
function Heder() {
  const {t,i18n}=useTranslation()
  return (
    <div>
       <header>
        <div className={styles.container}>
          <img src="2.png" alt="sdc"  style={{widows:"150px", height:"150px"}}/>
         
          <nav>
            <ul>
              <li><a href="/">{t("menu1")}</a></li>
              <li> <a href="/login">{t("menu2")}</a></li>
              <li><a href="/admin">{t("menu3")}</a> </li>
            <select  onChange={(e)=>i18n.changeLanguage(e.target.value)} value={i18n.language}>
              <option value="uz">UZ</option>
              <option value="ru">RUS</option>
              <option value="en">EN</option>
            </select>
            <div className={styles.b}>

            <button className={styles.btn}>{t("btn")}</button>
            <button className={styles.btn1}>{t("btn2")}</button>
            </div>
            </ul>
          </nav>
     

        </div>
       </header>
    </div>
  )
}

export default Heder