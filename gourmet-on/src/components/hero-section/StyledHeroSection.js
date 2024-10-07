import styled from "styled-components";

const Slider = styled.div`
  width: 1300px;
  max-width: 100vw;
  height: 700px;
  margin: auto;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

const List = styled.div`
  position: absolute;
  width: max-content;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  transition: 1s;
`;

const SlideImage = styled.img`
  width: 1300px;
  max-width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const Buttons = styled.div`
  position: absolute;
  top: 45%;
  left: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff5;
  color: #fff;
  border: none;
  font-family: monospace;
  font-weight: bold;
`;

const Dots = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Dot = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;

  &.active {
    width: 30px;
  }
`;

export { Slider, List, SlideImage, Buttons, Button, Dots, Dot };
