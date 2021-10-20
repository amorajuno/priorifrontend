import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const SingleView = (props) => {
    const _id = props.match.params.id;
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTarefaById();
    },[]);

    const getTarefaById = async () => {
        const response = await Api.fetchById(_id);
        const result = await response.json();
        setTarefa(result);
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        const response = await Api.fetchAndDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
    }


    return (
        <div className="container flex-grow-1">
            <div className="row">
                <div className="col">
                    <h1 className="text-center mt-4">{tarefa.titulo}</h1>
                    <h2 className="text-center">{tarefa.detalhes}</h2>
                    <h4 className="text-center">Situação:  {tarefa.status}</h4>
                    <h5 className="text-center">Prioridade: {tarefa.prioridade}</h5>
                    <div className="btn-group mt-3 w-100 d-flex align-items-center justify-content-center">
                        <Link to={`/${tarefa._id}/edit`} className="btn btn-outline-info mx-1">Editar</Link>
                        <button className="btn btn-outline-danger mx-1" onClick={onOpenModal}>Excluir</button>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Deseja realmente Excluir?</h2>
                <button className="btn btn-danger mx-2" onClick={onCloseModal}>Não</button>
                <button className="btn btn-success mx-2" onClick={handleDelete}>Sim</button>
            </Modal>
        </div>
    )
}

export default SingleView;