import { Botao, TIPO_BOTAO } from "../../Botao";
import styles from "./ListaTarefasitem.module.css";
import { useAppContext } from "../../../hooks";
import { useState } from "react";
import { CampoTexto } from "../../CampoTexto";
import { Loading } from "../../loading/index.js";

const ListaTarefasitem = ({ id, nome }) => {
    const { removerTarefa, editarTarefa, loadingEditar, loadingDeletar } = useAppContext();
    const [estadoEditando, setEstadoEditando] = useState(false);

    const handleBlur = (e) => {
        const nomeTarefa = e.currentTarget.value;
        editarTarefa(id, nomeTarefa);
        setEstadoEditando(false);
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className={styles.listaTarefasitem}>
            {loadingEstaEditando || estadoEditando ? (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={() => setEstadoEditando(true)}>{nome}</span>
            )}

            {loadingEstaEditando && <Loading />}

            <Botao
                texto={loadingEstaDeletando ? <Loading /> : '-'}
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />
        </li>
    );
};

export { ListaTarefasitem };
