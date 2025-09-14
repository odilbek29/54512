import styles from './footer.module.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.container}>
          <div className={styles.ka}>
            <p>Navigation</p>
          <div className={styles.text}>
            <div className={styles.l}>
              <h5>Блог</h5>
              <h5>Допомогти</h5>

            </div>
              <div className={styles.k}>
                 <h5>Новини</h5>
              <h5>Знайти тваринку</h5>
              </div>
              <div className={styles.p}>
                <h6>Copyright</h6>
                <h6>Privacy</h6>
                <h6>All rights reserved</h6>
              </div>
          </div>

          </div>
<div className={styles.la}>
          <div className={styles.text1}>
           <div className={styles.d}>
           <p>Слідкуйте за нами</p> 
           <img src="1.png" alt="df" />
           </div><br />

           <div className={styles.c}>
           <p>Слідкуйте за нами</p> 
              <h4>Пані Олена: <br />  
                +380 (67) 843 2730</h4>
           </div><br />

</div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer