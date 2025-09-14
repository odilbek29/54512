import Footer from '../../components/footer/Footer'
import Heder from '../../components/heder/Heder'
import styles from './home.module.css'
import { useTranslation } from 'react-i18next'
function Home() {
    const {t,i18n}=useTranslation()
  return (
    <div>
      <Heder></Heder>
      <main>
        <div className={styles.container}>
          <div className={styles.kab}>
          <div className={styles.j}> 
            <h1 style={{marginLeft:"-150px"}}>{t("texth1")} </h1>
            <button className={styles.btn2}>Узнать больше</button>
          </div>
          <img src="3.png" alt="sdf" />
          </div>


          <div className={styles.ota}>
            <div className={styles.card}>
              <img src="5.png" alt="cv" />
              <h2>12 254</h2>
              <p>{t("textP")} </p>
            </div>
            <div className={styles.card}>
              <img src="4.png" alt="cv" />
              <h2>125 987$</h2>
              <p>{t("textP2")}</p>
            </div>
            <div className={styles.card}>
              <img src="6.png" alt="cv" />
              <h2>48</h2>
              <p>{t("textP3")}</p>
            </div>
          </div>
          <section className={styles.hero}>
            <h2>{t("textH2")}</h2>
            <div className={styles.ota}>
              <div className={styles.card1}>
                <h3>Кіт, ти маму мав</h3>
                <img src="7.png" alt="sd" />
                <p>02.02.2024 <br />Студенти групи ПЗ-12 вирішили створити новий сайт для кафедри програмного забезпечення.</p>
                <h5>Дізнатися більше</h5>
              </div>
              <div className={styles.card1}>
                <h3>Кіт Васьок гадає на картах Таро</h3>
                <img src="8.png" alt="sd" />
                <p>30 листопада, 2023 <br />Студенти групи ПЗ-12 вирішили створити новий сайт для кафедри програмного забезпечення.</p>
                <h5>Дізнатися більше</h5>
              </div>
              <div className={styles.card1}>
                <h3>Виставка людей. Запрошуємо </h3>
                <img src="9.png" alt="sd" />
                <p>2 лютого, 2024 <br />Студенти групи ПЗ-12 вирішили створити новий сайт для кафедри програмного забезпечення.</p>
                <h5>Дізнатися більше</h5>
              </div>
            </div>
          </section>
                <section className={styles.hero1}>
                  <h1>{t("textH1")}</h1>
                  <div className={styles.ga}>
                  <img src="1.1.png" alt="d" />

                  </div>
                      <div className={styles.ota7}>
                        <h2>{t("texth1")}</h2>
                        <img src="10.png" alt="sdf" />
                        <p>{t("texp")}</p>
                        <input type="text" name="" id="" placeholder='Сума внеску' /><br />
                        <button className={styles.btn3}>{t("texbtn")}</button>
                      </div>
                </section>
        </div>
      </main>
               
      <Footer></Footer>
    </div>
  )
}

export default Home
