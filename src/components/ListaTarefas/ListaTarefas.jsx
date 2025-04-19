import {Botao, TIPO_BOTAO} from "../Botao/index.js";
import { Loading } from "../loading";
import {ListaTarefasitem} from "../ListaTarefas/ListaTarefasitem";
import styles from "./ListaTarefas.module.css";
import {useAppContext} from "../../hooks/index.js";

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext();

    return (
        <ul className={styles.listaTarefas}>
            {loadingCarregar && (
                <p>Carregando... <Loading /></p>
            )}
            {!loadingCarregar && !tarefas.length && (
                <p>Não há Tarefas cadastradas</p>
            )}
            {!loadingCarregar && tarefas.map(item => (
                <ListaTarefasitem key={item.id} id={item.id} nome={item.nome} />
            ))}
        </ul>
    );
};


export {ListaTarefas}