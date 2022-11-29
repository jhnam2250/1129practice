import React from "react";
import styled from "styled-components";

import Squirrel3 from "../assets/images/squirrel3.gif";

const Container = styled.div`
  position: absolute;
  bottom: 250px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Squirrel3Container = styled.div`
  width: 420px;
  height: 420px;
  background-image: url(${Squirrel3});
  background-size: cover;
  z-index: 0;
`;

function SQuirrel3() {
  return (
    <Container>
      <Squirrel3Container></Squirrel3Container>
    </Container>
  );
}

export default SQuirrel3;
