import React from 'react'
import styles from '../../styles/Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Shorten a link here..."/>
            <input type="submit" value="Shorten It!"/>
        </form>
    )
}

export default Form;