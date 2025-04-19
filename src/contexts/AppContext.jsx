import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [criador] = useState("Thiago");

    const [tarefas, setTarefas] = useState([]);
    const [loadingCarregar, setLoadingCarregar] = useState(false);
    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(null);
    const [loadingDeletar, setLoadingDeletar] = useState(null);

    // Carregar todas as tarefas na montagem
    useEffect(() => {
        carregarTarefas();
    }, []);

    const carregarTarefas = async () => {
        setLoadingCarregar(true);
        try {
            const { data = [] } = await api.get("/tarefas");
            setTarefas(data);
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        } finally {
            setLoadingCarregar(false);
        }
    };

    const adicionarTarefa = async (nomeTarefa) => {
        setLoadingCriar(true);
        try {
            const { data: tarefa } = await api.post("/tarefas", {
                nome: nomeTarefa,
            });
            setTarefas((estadoAtual) => [...estadoAtual, tarefa]);
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        } finally {
            setLoadingCriar(false);
        }
    };

    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa);
        try {
            await api.delete(`/tarefas/${idTarefa}`);
            setTarefas((estadoAtual) =>
                estadoAtual.filter((tarefa) => tarefa.id !== idTarefa)
            );
        } catch (error) {
            console.error("Erro ao remover tarefa:", error);
        } finally {
            setLoadingDeletar(null);
        }
    };

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa);
        try {
            const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
                nome: nomeTarefa,
            });
            setTarefas((estadoAtual) =>
                estadoAtual.map((tarefa) =>
                    tarefa.id === idTarefa
                        ? { ...tarefa, nome: tarefaAtualizada.nome }
                        : tarefa
                )
            );
        } catch (error) {
            console.error("Erro ao editar tarefa:", error);
        } finally {
            setLoadingEditar(null);
        }
    };

    return (
        <AppContext.Provider
            value={{
                criador,
                tarefas,
                adicionarTarefa,
                removerTarefa,
                editarTarefa,
                loadingCarregar,
                loadingCriar,
                loadingEditar,
                loadingDeletar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
