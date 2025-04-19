import {Botao, CampoTexto, Loading, TIPO_BOTAO} from "../../components";
import styles from "./FormCriarTarefa.module.css";
import {useState} from "react";
import {useAppContext} from "../../hooks/index.js";

const FormCriarTarefa = () => {
    const {adicionarTarefa, loadingCriar} = useAppContext();
    const [nomeTarefa, setNomeTarefa] = useState('valor Padrão')

    const onChangeNomeTarefa = (e) => {
        setNomeTarefa(e.currentTarget.value)
    }

    const submeterFormulario = (e) => {
        e.preventDefault();

        if (!nomeTarefa.trim()) {
            return;
        }

        adicionarTarefa(nomeTarefa)

        setNomeTarefa('')
    }
    return (
        <form className={styles.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
            <Botao texto={loadingCriar ? <Loading/>: "+"} tipo={TIPO_BOTAO.PRIMARIO}/>
        </form>
    );
};

export { FormCriarTarefa };
