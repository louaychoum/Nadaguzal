import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHERE CAN I VIEW MY LENSES?"
          >
            Once purchased, simply log in to your account on our website to view
            and manage your orders.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT MAKES YOUR LENSES DIFFERENT?"
          >
            Our lenses are made from premium materials to ensure comfort and
            safety. We offer a wide variety of colors and patterns to suit every
            style and occasion.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="HOW LONG DO YOUR LENSES LAST?"
          >
            Depending on the type, our lenses can last anywhere from 1 day to
            several months with proper care. Always follow the usage guidelines
            provided.
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="HOW CAN I TAKE CARE OF MY LENSES?"
          >
            Clean and store your lenses according to the instructions provided.
            Use the recommended cleaning solutions and avoid wearing them beyond
            their intended duration.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT IF I HAVE AN ALLERGIC REACTION?"
          >
            If you experience any discomfort or allergic reaction, remove the
            lenses immediately and consult an eye care professional.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="CAN I RETURN OR EXCHANGE MY LENSES?"
          >
            Due to hygiene reasons, we generally do not accept returns or
            exchanges. However, if there’s an issue with your order, please
            contact our customer service for assistance.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
