import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../assets/images/backgroundimage.png";
import PetDog from "./PetDog";
import Board6 from "./Board6";
import JinCat from "./Jincat";
import Squirrel3 from "./Squirrel3";
import Twitterbird from "./Twitterbird";
import Gallery from "./Carousel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineAni = keyframes`
0% {   
  border-radius: 50% 50% 48% 52% / 50% 50% 50% 50%;
}
50% {
  border-radius: 18% 82% 15% 85% / 84% 22% 78% 16% ;
}
100%{
    border-radius: 83% 17% 82% 18% / 20% 79% 21% 80% ;
}
`;

const BackContainer = styled.div`
  width: 1900px;
  height: 1000px;
  position: relative;
  background-image: url(${Background});
  background-size: cover;
  background-color: teal;
  animation: ${OutlineAni} 2s, linear infinite;
  z-index: 10;
`;

function BackgroundPic() {
  return (
    <Container>
      <BackContainer>
        <PetDog></PetDog>
        <Board6></Board6>
        <JinCat></JinCat>
        <Squirrel3></Squirrel3>
        <Twitterbird></Twitterbird>
        <Gallery></Gallery>
      </BackContainer>
      ;
    </Container>
  );
}

export default BackgroundPic;
