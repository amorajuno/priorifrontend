import React from 'react'
import './Forminputs.css';
import Api from '../.././api/api';


const Forminputs = (props) => {
    const history = props.history;

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const titulo = evento.target.titulo.value;
        const detalhes = evento.target.detalhes.value;
        const prazo = evento.target.prazo.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;

        const tarefa = {
            titulo,
            detalhes,
            prazo,
            status,
            prioridade
        }

        try {
            const response = await Api.fetchToPost(tarefa)
            const result = await response.json();
            alert(result.message);
            console.log(result)
            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="container cadastro">
            <div className="card mt-4">
                <div className="card-title">
                    <div className="row align-items-center">
                        <div className="col ">
                            <h3>Cadastre uma prioridade</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" required={true} className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo" />
                                    <label htmlFor="floatingInput">Titulo</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="date" className="form-control" name="prazo" id="floatingprazo"  />
                                    <label htmlFor="floatingprazo">Prazo</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select 
                                        className="form-control"
                                        name="status"
                                        id="floatingstatus"
                                        
                                    >
                                        <option value="fazer" defaultValue>Fazer</option>
                                        <option value="fazendo">Fazendo</option>
                                        <option value="concluido">Concluído</option>
                                    </select>
                                    <label htmlFor="floatingstatus">Status</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="detalhes" id="floatingInput" placeholder="Detalhes" />
                                    <label htmlFor="floatingInput">Detalhes</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Defina a prioridade">
                                        <option value="alta" defaultValue>Alta</option>
                                        <option value="media">Média</option>
                                        <option value="baixa">Baixa</option>
                                    </select>
                                    <label htmlFor="floatingprioridade">Prioridade</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-dark" type="submit">Enviar</button>
                                <button className="btn btn-outline-default">Voltar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Forminputs
