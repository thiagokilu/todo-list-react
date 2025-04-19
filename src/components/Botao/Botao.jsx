import { TIPO_BOTAO } from './constantes'
import style from './botao.module.css'

const Botao = ({ texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps }) => {
    return (
        <button
            className={style.Botao}
            tipo={tipo}
            {...outrasProps}
        >
            {texto}
        </button>
    )
}

export { Botao }
