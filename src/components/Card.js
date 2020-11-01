import React from 'react'
import styles from '../../styles/Card.module.css'

const Card = ({cards}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_logo}>
              <img src={cards.image} alt="recognition"/>
            </div>
            <h3>{cards.title}</h3>
            <p>{cards.description}</p>
        </div>
    )
}

export default Card;