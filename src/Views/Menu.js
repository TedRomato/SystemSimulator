import { Button } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CSS = {
  header: css`
    padding: 21px;
    align-content: center;
    text-align: center;
  `,
  mainContent: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  button: css`
    display: block;
    width: 50%;
    padding: 8px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  `,
};

function Menu(props) {
  const { children } = props;

  const header = (
    <div css={CSS.header}>
      <h1>Simulator</h1>
    </div>
  );

  const renderedElements = [];
  for (const sim of props.simulations) {
    renderedElements.push(
      <Button
        onClick={() => props.setCurrentView(sim.id)}
        variant="outline-primary"
        key={sim.id}
        css={CSS.button}
      >
        {sim.name}
      </Button>
    );
  }
  const main = <div css={CSS.mainContent}>{renderedElements}</div>;

  return children({
    topCenter: header,
    center: main,
  });
}

const menuObject = { component: Menu, id: "menu" };

export default menuObject;
