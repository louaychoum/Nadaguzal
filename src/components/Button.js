import React from "react";
import styled from "styled-components";

const Btn = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #eeedde, #ffffff);
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

const Button = ({ text, link = "#", newTab = false }) => {
  return (
    <Btn
      href={link}
      aria-label={text}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {text}
    </Btn>
  );
};

export default Button;
