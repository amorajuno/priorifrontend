import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';
import 'moment/locale/pt';

function Forminputs() {
    return (
        <div className="form-box-inputs">
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Título da tarefa"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Descrição
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroup" placeholder="Descrição" />
                        </InputGroup>
                    </Col>
                <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" >
                            Prazo
                        </Form.Label>
                        <Datetime locale="pt" input={false} />
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Urgente/Em atraso"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>

            </Form>

        </div>
    )
}

export default Forminputs
