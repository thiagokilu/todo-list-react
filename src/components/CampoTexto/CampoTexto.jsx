import styles from './CampoTexto.module.css'
const CampoTexto = (props) => {
    return (
            <input type='text' {...props} className={styles.CampoTexto}/>
    )
}


export {CampoTexto}