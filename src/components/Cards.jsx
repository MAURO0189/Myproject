import React from "react";
import "../assets/style/cards.css";
import { Row, Col, Card } from "react-bootstrap";

function Cards() {
  return (
    <div className="cards-container">
      <Row className="row-cols-1 row-cols-md-2 g-4">
        <Col>
          <Card className="card">
            <Card.Img variant="top" src="/img/Vdr1.jpg" alt="img1" />
            <Card.Body>
              <Card.Text>
                Vdr is an app for querying vehicle and individual data in RUNT,
                which is a governmental information center.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img variant="top" src="/img/Score.png" alt="img2" />
            <Card.Body>
              <Card.Text>
                Score is a program used to calculate a person's risk before
                selling them an insurance policy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-md-2 g-4">
        <Col>
          <Card className="card">
            <Card.Img variant="top" src="/img/login.png" alt="img3" />
            <Card.Body>
              <Card.Text>
                Login for access authorization, with its own authentication
                system on the backend using NestJS and frontend in ReactJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img variant="top" src="/img/Register.png" alt="img4" />
            <Card.Body>
              <Card.Text>
                Register to register, update, and delete users, with backend in
                NestJS and frontend in ReactJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="centered-row">
        <Col className="col">
          <Card className="card">
            <Card.Img variant="top" src="/img/propuesta.png" alt="img5" />
            <Card.Body>
              <Card.Text>
                Proposal for development in a work environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
