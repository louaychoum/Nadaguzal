import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

import img1 from "../assets/threeModels.png";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Section = styled.section`
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};

  background: linear-gradient(
    270deg,
    rgba(${(props) => props.theme.textRgba}, 0.9),
    rgba(${(props) => props.theme.textRgba}, 0.6)
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 25rem;
    flex-direction: column;
    background-image: url(${img1});
    background-size: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(226, 229, 231, 0.6) 0%,
    rgba(210, 212, 214, 0.6) 100%
  );
  height: 100%;
  z-index: 5; // Position overlay above the image but below the text
  display: none;

  @media (max-width: 48em) {
    display: block;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  img {
    height: 100%;
  }

  @media (max-width: 48em) {
    img {
      height: auto;
    }
    display: none;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-wrap: wrap;

  text-shadow: 1px 1px 2px ${(props) => props.theme.text};

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;

    width: 100%;
  }
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const JoiNow = styled.a`
  display: inline-block;
  background: linear-gradient(
    135deg,
    #EEEDDE,
    #FFFFFF
  ); 
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  z-index: 999;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1rem 2.5rem; // Increased padding for a more prominent button
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 600; // Bold text for better readability
  font-family: "Poppins", sans-serif;
  text-transform: uppercase; // For a modern look

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Subtle shadow for depth

  &:hover {
    transform: translateY(-5px) scale(1.05); // Slight lift and scale
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); // Enhanced shadow on hover
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid rgba(255, 255, 255, 0.6); // Light border for contrast
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
    z-index: -1; // Place behind the button text
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.5rem; // Adjust padding for border effect
  }

  &:focus {
    outline: 3px solid #f06595; // Focus outline for accessibility
    outline-offset: 2px;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Overlay />
      <Title>
        Unveil Your Unique Style
        <br /> with Our Exquisite
        <br />
        Colored Contact Lenses
      </Title>
      <BtnContainer>
        <JoiNow
          href="https://wa.me/+971529180299"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch
        </JoiNow>
      </BtnContainer>
      <ImgContainer>
        <img width={500} height={400} src={img1} alt="models" />
      </ImgContainer>
    </Section>
  );
};

export default Banner;
