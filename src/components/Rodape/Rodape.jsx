import styles from './Rodape.module.css'
const Rodape = ({criador}) => {
    const anoAtual = new Date().getFullYear()
    return(
        <footer className={styles.Rodape}>
            <ul>
                <li>React-Basíco</li>
                <li>{anoAtual}</li>
                <li>@{criador}</li>
            </ul>
        </footer>
    )
}

export { Rodape }