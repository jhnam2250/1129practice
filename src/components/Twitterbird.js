import React from "react";
import styled from "styled-components";

import Twitterbird from "../assets/images/twitterbird.png";

const Container = styled.div`
  position: absolute;
  bottom: 770px;
  left: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TwitterbirdContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${Twitterbird});
  background-size: cover;
  cursor: pointer;
  &:hover {
    width: 160px;
    height: 160px;
    top: 50px;
  }
`;

function TwitterBird() {
  return (
    <Container>
      <TwitterbirdContainer></TwitterbirdContainer>
    </Container>
  );
}

export default TwitterBird;
