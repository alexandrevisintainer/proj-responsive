import styles from './about.module.css'
import Image from 'next/image'
import image6 from '../../public/image6.jpg'

function About () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <aside className={styles.image}>
                    <Image className={styles.image1} src={image6} alt="people image" layout='fill' objectFit='cover'/>
                </aside>
                <div className={styles.content}>
                    <h1>Sobre nós</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, qui. Molestiae alias, expedita molestias facere atque ea voluptas eos reprehenderit.</h4>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, qui. Molestiae alias, expedita molestias facere atque ea voluptas eos reprehenderit.</h4>
                    <button>Trabalhe comigo</button>
                </div>
            </div>
        </div>
    )
}
export default About;