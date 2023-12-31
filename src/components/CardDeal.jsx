
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';


const CardDeal = () => (

    <section className={layout.section}>
      
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The banking revolution combining the experience of WEB2 with the ingenuity of WEB3.</p>
          <Button styles="mt-10" />

        </div>

        <div>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>  

    </section>

  );


export default CardDeal