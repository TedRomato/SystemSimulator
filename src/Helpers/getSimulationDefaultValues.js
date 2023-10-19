/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BackButton from "../Components/BackButton";

const CSS = {
  header: css`
    padding: 21px;
    align-content: center;
    text-align: center;
  `,
};


const getSimulationDefaultContent = (props) => {
  return {
    topLeft: <BackButton callback={() => props.setCurrentView("menu")} />,
    topCenter: <h1 css={CSS.header}>{props.name}</h1>,
  };
};

export default getSimulationDefaultContent;
