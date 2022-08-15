import styles from './clients.module.css'
import Image from 'next/image'
import image2 from '../../public/image2.jpg'

function Clients () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <aside className={styles.aside}>
                    <div className={styles.title}>
                        <h1>Depoimentos</h1>
                    </div>
                    <div className={styles.image}>
                        <Image src={image2} alt="clients" layout='fill' objectFit='cover'/>
                    </div>
                </aside>
                <article className={styles.article}>
                    <section className={styles.section}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti at blanditiis voluptatum ipsa temporibus maiores commodi, eius optio neque libero in, quisquam quibusdam nulla!</p>
                        <h4>First Client</h4>
                    </section>
                    <section className={styles.section}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.maiores doloremque. Minus reiciendis porro enim recusandae odit delectus eius autem exercitationem! Labore, doloremque!</p>
                        <h4>Second Client</h4>
                    </section>
                    <section className={styles.section}>
                        <p>Lorem, ipsum dolor sit. Molestiae inventore tempore nemo tenetur! Porro aut a in excepturi incidunt consequatur officiis sed, repellat optio ullam modi quod quae?</p>
                        <h4>Third Client</h4>
                    </section>
                </article> 
            </div>
        </div>
    )
}
export default Clients;