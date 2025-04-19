import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Outlet } from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../contexts";
import {useAppContext} from "../../hooks/index.js";

const LayoutPadrao = () => {
    const {criador} = useAppContext()
    return (
        <div>
            <Cabecalho nomeUsario='Thiago'/>
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador} />
        </div>
    );
}

export { LayoutPadrao };
