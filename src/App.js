/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useMemo } from "react";
import Menu from "./Views/Menu";
import Simulations from "./Views/Simulations/Simulations";

const Views = [Menu, ...Simulations];

function App() {
  const [currentView, setCurrentView] = useState("menu");

  /*
  Naming of the sections
  a | b | c
  ---------
  d | e | f
  */

  const viewDtoIn = useMemo(
    () => ({
      simulations: Simulations,
      setCurrentView,
    }),
    []
  );

  const CurrentViewComponent = useMemo(
    () => Views.find((view) => view.id === currentView)?.component,
    [currentView]
  );

  return (
    <Container
      fluid={true}
      className="d-flex flex-column"
      css={css`
        height: 100vh;
      `}
    >
      <CurrentViewComponent {...viewDtoIn}>
        {({ topLeft, topCenter, topRight, left, center, right }) => (
          <>
            <Row>
              <Col sm={3}>{topLeft ?? <></>}</Col>
              <Col sm={6}>{topCenter ?? <></>}</Col>
              <Col sm={3}>{topRight ?? <></>}</Col>
            </Row>

            <Row className="flex-grow-1">
              <Col sm={3}>{left ?? <></>}</Col>
              <Col sm={6}>{center ?? <></>}</Col>
              <Col sm={3}>{right ?? <></>}</Col>
            </Row>
          </>
        )}
      </CurrentViewComponent>
    </Container>
  );
}

export default App;
