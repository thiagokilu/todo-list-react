import {FormCriarTarefa, ListaTarefas} from "../../components";
import styles from './Inicial.module.css';
import {useState} from "react";
import {useAppContext} from "../../hooks/index.js";

const Inicial = () => {

    return (
        <div className={styles.inicial}>
            <FormCriarTarefa />
            <ListaTarefas/>
        </div>
    )
}

export { Inicial };