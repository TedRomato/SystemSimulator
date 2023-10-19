/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "react-bootstrap";

function BackButton(props) {
  return (
    <Button
      variant="outline-secondary"
      onClick={() => props.callback()}
      css={css`
        margin: 30px;
      `}
    >
      Back To Menu
    </Button>
  );
}

export default BackButton;
