import styles from './services.module.css'

function Services () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <h1>O que oferecemos</h1>
                <div className={styles.cards}>
                    <div className={styles.card1}>
                        <div className={styles.cardCenter}>
                            <h2>Visualização de dados</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic sequi quidem. Illo tenetur fugiat, quisquam officia eius nemo recusandae.</p>
                        </div>
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.cardCenter}>
                            <h2>Consultorias</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic sequi quidem. Illo tenetur fugiat, quisquam officia eius nemo recusandae.</p>
                        </div>
                    </div>
                    <div className={styles.card3}>
                        <div className={styles.cardCenter}>
                            <h2>Palestras</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic sequi quidem. Illo tenetur fugiat, quisquam officia eius nemo recusandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;