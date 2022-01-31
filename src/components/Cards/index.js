import React, { Component } from "react";
import { connect } from "react-redux";
import { getcards } from "../../actions/cardsAction";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";

class cards extends Component {
  state = {
    cards: Array.from(this.props.getcards()),
    activeItemId: null,
    ids: [],
  };

  render() {
    const { cards } = this.props.cards;

    return (
      <>
        <Container>
          <Row>
            <Col className="page-header d-none d-md-block">
              <h1>protection</h1>
            </Col>
          </Row>
          {cards.map((card, index) => (
            <React.Fragment key={card.id}>
              <Row
                key={card.id}
                className={`card-wrapper ${
                  this.state.ids.includes(card.id) ? "active" : ""
                }`}
                onClick={() => {
                  this.setState((oldState) => ({
                    ids: oldState.ids.includes(card.id)
                      ? oldState.ids.filter((x) => x !== card.id)
                      : [...oldState.ids, card.id],
                  }));
                }}
              >
                <Col md={9} lg={9} xl={9}>
                  <Card>
                    <Card.Body>
                      <Row className="card-upper">
                        <Col
                          className="d-none d-md-block"
                          sm={12}
                          md={2}
                          lg="auto"
                          xl={1}
                        >
                          <div className="icon-chevron-right">
                            <Icon.ChevronRight />
                          </div>
                        </Col>
                        <Col sm={12} md="10" lg="auto" xl={11}>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>
                            {card.id} | {card.description}
                          </Card.Text>
                        </Col>
                      </Row>
                      <hr
                        style={{
                          border: "1px solid #E0E4E8",
                        }}
                      />
                      <Row className="card-lower">
                        <Col xs lg="auto">
                          <Moment format="DD-MMM-YYYY">
                            {card.payment_date}
                          </Moment>
                          <p>Payment date</p>
                        </Col>
                        <Col xs lg="auto" className="d-none d-md-block">
                          <Moment format="DD-MMM-YYYY">
                            {card.coverage_start_date}
                          </Moment>{" "}
                          to{" "}
                          <Moment format="DD-MMM-YYYY">
                            {card.coverage_end_date}
                          </Moment>
                          <p>Coverage dates</p>
                        </Col>
                        <Col md="auto" className="d-none d-md-block">
                          {card.premium_formatted}
                          <p>Price/Premium</p>
                        </Col>
                        {card.renewal ? (
                          <Col xs lg="auto" className="d-none d-md-block">
                            <Moment format="DD-MMM-YYYY">
                              {card.coverage_end_date}
                            </Moment>
                            <p>Renewal date</p>
                          </Col>
                        ) : null}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  md={3}
                  lg={3}
                  xl={3}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div className="card__image">
                    <a href={card.url}>
                      <picture>
                        <Image
                          className="test"
                          src={card.partner.logo}
                          alt={card.partner.name}
                          fluid="true"
                        />
                      </picture>
                    </a>
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ cards: state.cards });

export default connect(mapStateToProps, { getcards })(cards);
