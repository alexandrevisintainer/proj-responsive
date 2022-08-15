import styles from './hero.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png'
import image4 from '../../public/image4.jpg'

function Hero () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <aside className={styles.content}>
                    <Image src={logo} alt="home logo" width="70" height="70"/>
                    <h1>OTIMIZE <br/>SUA MARCA</h1>
                    <h4>Olivia Lopes <br/> Consultora de Comunicação e Marca</h4>
                    <button>Trabalhe Comigo</button>
                </aside>
                <aside className={styles.image}>
                    <Image className={styles.image1} src={image4} alt="people image" layout='fill' objectFit='cover'/>
                </aside>
            </div>
        </div>
    )
}
export default Hero;