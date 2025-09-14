import styles from './admin.module.css'
import Heder from '../../components/heder/Heder'
import { useTranslation } from 'react-i18next'
function Admin() {
  const {t,i18n}=useTranslation()
  return (
    <div>
<Heder></Heder>
   <main>
    <div className={styles.container}>
      <h1>{t("text1h")}</h1>
      <div className={styles.text}>
        <img src="12.png" alt="df" />
<div className="">
     <h2>{t("text2h")}</h2>
        <p>У центрі міста з’явився загадковий кіт, що викликає більше запитань, ніж відповідей. Чорно-білий, із розумним поглядом і медальйоном на шиї, він щодня приходить до кав’ярні на розі вулиці Шевченка й уважно слухає відвідувачів.
Але найбільше здивування викликала фраза, яку, за словами очевидців, він нібито "вимуркав" минулого вечора: «Мяу... ти маму мав?» – свідчить бариста Оля, яка вже третій день приносить котові миску з водою і трохи тунця.
Місцеві жителі гадають, що кіт шукає когось із минулого. Хтось навіть припускає, що він — реінкарнація якогось філософа, що повернувся на землю з місією нагадати про сімейні цінності.
Хто ця істота з глибокими очима та трагічним поглядом? І головне – де його мама?
Розслідування триває.</p>
</div>
     
      </div>

          <div className={styles.ota}>
                  <div className={styles.card}>
                    <img src="5.png" alt="cv" />
                    <h2>12 254</h2>
                    <p>{t("textP")}</p>
                  </div>
                  <div className={styles.card}>
                    <img src="4.png" alt="cv" />
                    <h2>125 987$</h2>
                    <p>{t("textP2")}</p>
                  </div>
                  <div className={styles.card}>
                    <img src="6.png" alt="cv" />
                    <h2>48</h2>
                    <p> {t("textP")}</p>
                  </div>
                </div>
    </div>
   </main>
    </div>
  )
}

export default Admin