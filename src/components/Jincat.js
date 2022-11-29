import React from "react";
import styled from "styled-components";

import Jincat from "../assets/images/jincat.png";

const Container = styled.div`
  position: absolute;
  bottom: 470px;
  left: 1205px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const JincatContainer = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${Jincat});
  background-size: cover;
  z-index: 0;
`;

function JinCat() {
  return (
    <Container>
      <JincatContainer></JincatContainer>
    </Container>
  );
}

export default JinCat;
