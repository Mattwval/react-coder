import './MainPage.css';
import {Link} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import styles from './MainPage.css'

function MainPage() {
    return (
        <Container className="imagesContainer">
            <img className={styles.img} src={require('../images/pexels-phil-nguyen-1070603.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-alesia-kozik-7796750.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-dominika-roseclay-1021816.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-candy-flipping-12495666.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-isaw-company-945688.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-lumn-167703.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-truman-rexti-10551606.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-julio-lopez-12894379.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ron-lach-8311896.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ron-lach-8705779.jpg')}/>
            <Link to='/catalogo'>
                <Button style={{width: "200px"}} variant={"outline-danger"}>Catálogo</Button>
            </Link>
            <img className={styles.img} src={require('../images/pexels-valeriia-miller-3183746.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-alesia-kozik-7796750.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-misolo-cosmetic-4841234.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ovan-545580.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ann-h-1878399.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ayşe-bolat-10224325.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-terje-sollie-298863.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-julio-lopez-12894379.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-nadine-elephant-11635432.jpg')}/>
            <img className={styles.img} src={require('../images/pexels-ray-piedra-1502219.jpg')}/>

        </Container>
    );
}

export default MainPage;