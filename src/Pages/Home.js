import styled from "styled-components";
import Navbar from "../Components/Navbar";
export default function Home(props) {
  const Main = styled.main`
    width: 80vw;
    margin: 0 auto;
    height: 1000px;
  `;
  const ContainerHorizontal = styled.div`
    display: flex;
    height: ${(props) => (props.height ? props.height : "fit-content")};
    background-color: #f3f3f3;
    margin-bottom: 70px;
  `;
  const ContainerVertical = styled.div`
    height: ${(props) => (props.height ? props.height : "fit-content")};
    background-color: #f3f3f3;
    margin-bottom: 70px;
    padding: 4vh 4vw;
  `;
  const Image = styled.img``;
  const H1 = styled.h1`
    font-size: 48px;
    font-weight: normal;
    letter-spacing: 0.023em;
    font-family: "Mulish", sans-serif;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    letter-spacing: 0.023em;
    font-family: "Mulish", sans-serif;
    text-align: center;
    margin: 18px auto;
  `;
  const H3 = styled.h3`
    font-weight: 300;
    letter-spacing: 0.1em;
    font-family: "Mulish", sans-serif;
    margin: 18px auto;

    color: rgb(130, 108, 108);
  `;
  const Span = styled.span``;
  const P = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
  `;
  const TextContainer = styled.div`
    text-align: center;
    margin: auto auto;
  `;

  return (
    <>
      <Navbar current="home" />
      <Main>
        <ContainerHorizontal height="500px">
          <Image src="./Images/scissors.webp" />
          <TextContainer>
            <H3>WELCOME</H3>
            <H1>
              West 86th Hair <br />
              Designs
            </H1>
          </TextContainer>
        </ContainerHorizontal>
        <ContainerVertical>
          <H2>About Us</H2>
          <P>
            West 86th Hair Designs Inc. has been in business for over 25 years.
            Our mission is to provide superior services to every client while
            offering the best salon quality products. We value our clients for
            their support of our business and they will always have our honest
            commitment to excellence. At West 86th Hair Designs our highly
            educated team works together to create a fun, professional and
            comfortable experience. We hope to see you soon!
          </P>
        </ContainerVertical>
      </Main>
    </>
  );
}
