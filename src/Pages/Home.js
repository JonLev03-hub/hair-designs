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
    min-height: ${(props) =>
      props.minheight ? props.minheight : "fit-content"};
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
    text-align: ${(props) => (props.align ? props.align : "center")};
  `;
  const H2 = styled.h2`
    font-weight: 300;
    letter-spacing: 0.023em;
    font-family: "Mulish", sans-serif;
    text-align: center;
    margin: 18px 0;
    text-align: ${(props) => (props.align ? props.align : "center")};
  `;
  const H3 = styled.h3`
    font-weight: 300;
    letter-spacing: 0.1em;
    font-family: "Mulish", sans-serif;
    margin: 18px 0;
    text-align: ${(props) => (props.align ? props.align : "center")};
    color: rgb(130, 108, 108);
  `;
  const Span = styled.span`
    font-size: 18px;
    line-height: 1.5;
    color: rgb(89, 89, 89); ;
  `;
  const P = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
  `;
  const TextContainer = styled.div`
    text-align: center;
    margin: auto auto;
  `;
  const InternalVerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6vh 4vw;
    width: 29.5vw;
  `;
  const Map = styled.div`
    width: 37.5vw;
    background-color: red;
    flex-shink: 0;
    flex-grow: 0;
  `;
  const A = styled.a`
    color: rgb(143, 110, 110);
    text-decoration: none;
  `;
  const Button = styled.button`
    padding: 8px 32px 8px 32px;
    flex-grow: 0;
    width: fit-content;
    font-size: 18px;
    min-height: 56px;
    background-color: rgb(226, 226, 226);
    color: rgb(27, 27, 27);
    box-shadow: none;
    border: none;
    font-weight: 700;
    letter-spacing: 0.214em;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px -10px;
    }
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
        <ContainerHorizontal minheight="650px">
          <InternalVerticalContainer>
            <H3 align="left">Contact Us</H3>
            <Span>
              We love our customers, so feel free to visit during normal
              business hours.
            </Span>
            <H2 align="left">West 86th Hair Designs</H2>
            <Span>
              1478 West 86th Street, Indianapolis, Indiana 46260, United States
            </Span>
            <Span>
              Call us at: <A href="tel:3178731295">(317) 872-1295</A> <br />
              Email:{" "}
              <A href="mailto: West86thhairdesign@sbcglobal.net">
                West86thhairdesign@sbcglobal.net
              </A>
            </Span>
            <H2 align="left">Hours</H2>
            <Button>Message Us!</Button>
          </InternalVerticalContainer>
          <Map />
        </ContainerHorizontal>
        <H3 align="left">SOCIAL</H3>
        <H3 align="left">PHOTO GALLERY</H3>
      </Main>
    </>
  );
}
