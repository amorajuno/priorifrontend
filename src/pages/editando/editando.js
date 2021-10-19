import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import moment from 'moment';


const Editando = (props) => {
    const _id = props.match.params.id;
    const history = props.history;
    const [tarefa, setTarefa] = useState({});

    useEffect(() => {
        getTarefaById();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getTarefaById = async () => {
        const response = await Api.fetchById(_id);
        const result = await response.json();
        setTarefa(result);
    };

    const handleUpdate = (event) => {
        const fields = { ...tarefa };
        //atualizando os inputs com o valor do objeto
        fields[event.target.name] = event.target.value;

        setTarefa(fields);
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const tarefaObj = { ...tarefa };

        try {
            const response = await Api.fetchAndPut(tarefaObj, _id);
            const result = await response.json();
            alert(result.message);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const transformDate = (prazo) => {
        return moment(prazo).utc().format('YYYY-MM-DD');


    }

    return (
        <div className="container cadastro">
            <div className="card mt-4">
                <div className="card-title">
                    <div className="row">
                        <div className="col">
                            <h3>Editar a Tarefa</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="titulo"
                                        value={tarefa.titulo}
                                        id="floatingInput"
                                        onChange={handleUpdate}
                                    />
                                    <label htmlFor="floatingInput">Titulo</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={tarefa.detalhes}
                                        name="detalhes"
                                        id="floatingdetalhes"
                                        onChange={handleUpdate}
                                    />
                                    <label htmlFor="floatingdetalhes">Detalhes</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="date"
                                        value={transformDate(tarefa.prazo)}
                                        className="form-control" name="prazo" id="floatingprazo"
                                        onChange={handleUpdate} />

                                    <label htmlFor="floatingprazo">Prazo</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select className="form-control"
                                        name="prioridade"
                                        id="floatingprioridade"
                                        onChange={handleUpdate}
                                    >
                                        <option value="alta">Alta</option>
                                        <option value="media">Média</option>
                                        <option value="baixa">Baixa</option>
                                    </select>
                                    <label htmlFor="floatingprioridade">Prioridade</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select
                                        className="form-control"
                                        name="status"
                                        id="floatingstatus"
                                        onChange={handleUpdate}
                                    >
                                        <option value="fazer">Fazer</option>
                                        <option value="fazendo">Fazendo</option>
                                        <option value="concluido">Concluído</option>
                                    </select>
                                    <label htmlFor="floatingstatus">Status</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-dark" onClick={handleSubmit} type="submit">
                                    Enviar
                                </button>
                                <button className="btn btn-outline-default" href="/">Voltar</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Editando;