import React from "react";
import styled from "styled-components";

import board6 from "../assets/images/board6.png";

const Container = styled.div`
  position: absolute;
  bottom: 450px;
  left: 1130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Board6Container = styled.div`
  width: 340px;
  height: 340px;
  background-image: url(${board6});
  background-size: cover;
  z-index: 0;
`;

function Board6() {
  return (
    <Container>
      <Board6Container></Board6Container>
    </Container>
  );
}

export default Board6;
