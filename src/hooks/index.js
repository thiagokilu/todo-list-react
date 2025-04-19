import {AppContext} from "../contexts";
import {useContext} from "react";

const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}

export { useAppContext };