import React from 'react';
import Api from '../../api/api'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

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
    // const dateUTC = Date.UTC(deadline.getUTCFullYear(), deadline.getUTCMonth(), deadline.getUTCDate(),
    // deadline.getUTCHours());
    // console.log(dateUTC)
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const newDate = new Date(dateUTC).toLocaleDateString('pt-br', options );

  }

  const calculaPrazo = (prazo) => {
    const dataPrazo = moment(prazo).utc()
    let prazoDias = dataPrazo.diff(moment().utc(), 'days')
    return prazoDias
  }


  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">

      {
        tarefas.map((tarefa, index) => (
          <Card data={tarefa} key={index} className="text-center">
            <Card.Header>{tarefa.titulo}</Card.Header>
            <Card.Body>
              <Card.Title> Terminar até: {transformDate(tarefa.prazo)}</Card.Title>
              <Card.Text>
                {tarefa.detalhes}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Prazo termina em {calculaPrazo(tarefa.prazo)} dias </Card.Footer>
          </Card>
        ))
      }
    </div>
  )
}

export default Lista;