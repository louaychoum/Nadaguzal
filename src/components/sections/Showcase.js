import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../assets/greyLens.jpg";
import img2 from "../../assets/setEyes.png";
import img3 from "../../assets/GoldenEye.png";
import img4 from "../../assets/brown.png";
import img5 from "../../assets/set.png";
import img6 from "../../assets/moon_gray_.jpg";
import ETH from "../../assets/nadaLogo.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 40s;

    @media (max-width: 30em) {
      animation-duration: 25s;
    }
  }
  & > *:last-child {
    animation-duration: 30s;
    @media (max-width: 30em) {
      animation-duration: 20s;
    }
  }
`;
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxs};
      text-wrap: wrap;
      line-height: 0rem;
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
    @media (max-width: 30em) {
      width: 0.8rem;
    }
  }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={500} height={400} src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Color Contact Lenses</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img width={200} height={200} src={ETH} alt="ETH" />
            {/* <h1>{Number(price).toFixed(1)}</h1> */}
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img2} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img3} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img2} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img3} number={852} price={1} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img4} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img5} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img4} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img5} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

export default Showcase;
