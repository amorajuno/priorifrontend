import React from 'react';
import Api from '../../api/api'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import moment from 'moment';
import './lista.css';
import { Link } from 'react-router-dom'

const Lista = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {

    const response = await Api.fetchAll();
    const data = await response.json();
    setTarefas(data)

  }

  const transformDate = (prazo) => {
    return moment(prazo).utc().format('DD/MM/YYYY');
    

  }

  const calculaPrazo = (prazo) => {
    const dataPrazo = moment(prazo).utc()
    let prazoDias = dataPrazo.diff(moment().utc(), 'days')
    return prazoDias
  }


  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mx-2 mb-5 justify-content-center">

      {
        tarefas.map((tarefa, index) => (
        <Link to={`/${tarefa._id}`} key={index} className="card-link">
          <Card data={tarefa} className="text-center vh-80">
            <Card.Header className="text-truncate">{tarefa.titulo}</Card.Header>
            <Card.Header style={tarefa.prioridade === "alta" ? { color: "red" } : { color: "green" }}>Prioridade: {tarefa.prioridade}</Card.Header>
            <Card.Body>
              <Card.Title> Terminar até: {transformDate(tarefa.prazo)}</Card.Title>
              <Card.Text className="text-truncate">
                {tarefa.detalhes}
              </Card.Text>
              <Card.Text>Situação: {tarefa.status}</Card.Text>
              {/* <Button variant="dark" href={`/edit/${tarefa._id}`}>Editar</Button> */}
              
              
            </Card.Body>
            <Card.Footer className="text-prazo" style={{ color: calculaPrazo(tarefa.prazo) > 6 ? "blue" : "red" }}>Prazo termina em {calculaPrazo(tarefa.prazo)} dias </Card.Footer>
          </Card>
          </Link>
        ))
      }
    </div>
  )
}

export default Lista;