import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Dropdown, Card } from "react-bootstrap";
import { Consumer } from "./context";
// import Date from 'react-datepicker-dropdown'
// import Emp from 'react-employee-dropdown1'
export default function App() {
//   const [empl, setEmpl] = React.useState([])
//   const Employee = [
//     {
//       id: "1",
//       name: 'One',
//       img: 'https://img.icons8.com/officel/2x/person-male.png',
//       selected: false,
//       profile: "practitioner"
//     },
//     {
//       id: "2",
//       name: 'Two',
//       img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
//       selected: false,
//       profile: "assistant"
//     },
//     {
//       id: "3",
//       name: 'Three',
//       img: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png',
//       selected: false,
//       profile: "assistant"
//     },
//     {
//       id: "4",
//       name: 'Four',
//       img: 'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg',
//       selected: false,
//       profile: "practitioner"
//     },
//     {
//       id: "5",
//       name: 'Five',
//       img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&w=1000&q=80',
//       selected: false,
//       profile: "assistant"
//     },
//     {
//       id: "6",
//       name: 'six',
//       img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//       selected: false,
//       profile: "practitioner"
//     }
//   ]
  
  
  return (
    <Consumer>

      {(value) => {
        return (
          <Container style={value.style}>
            <Row>
              {/* <Emp /> */}
              {/* <Employes data={Employee} onChange={e => setEmpl(e)} /> */}
            </Row>
            <Row>
              <Col>
                <h1>them</h1>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle
                    variant={value.button.variant}
                    id="dropdown-basic">
                    select them
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => value.setColor("BW")}>
                      black and white{" "}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => value.setColor("RW")}>
                      red and white
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => value.setColor("RB")}>
                      red abd black
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => value.setColor("BG")}>
                      blue and green
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={value.card}>
                  <Card.Body>
                    <Card.Img variant="top" src={value.card.image} />
                    <Card.Title>Demo them</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant={value.button.variant}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col></Col>
            </Row>
          </Container>
        );
      }}
    </Consumer>
  );
}
