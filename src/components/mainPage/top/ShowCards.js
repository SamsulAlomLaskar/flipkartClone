import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, FloatingLabel, Form, NavLink, Row } from "react-bootstrap";
import "./ShowCards.css";

function ShowCards(props) {
  return (
    <div id="container">
      <Row className="mt-3 ">
        <Col md className="">
          <div id="card" className="">
            {" "}
            <Card 
              style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
            >
              <div  className="m-auto">
                {" "}
                <Card.Img
                  variant="top"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                  }}
                  src={props.imgsrc}
                />
              </div>
            </Card>
              <Card.Link href="#">{props.name}</Card.Link>
          </div>
          {/* <div className="fstM">
            <div className = "fst" >
            </div>
            <NavLink >Card Link</NavLink>
        </div> */}
        </Col>
      </Row>
    </div>
  );
}

export default ShowCards;
