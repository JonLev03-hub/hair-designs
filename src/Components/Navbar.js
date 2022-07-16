import styled from "styled-components";
export default function Navbar(props) {
  const current = props.current;
  const Container = styled.div`
    min-height: 196px;
    padding: 32px;
  `;
  const Logo = styled.img`
    display: block;
    width: 80px;
    padding: 24px;
    height: 80px;
    margin: 0 auto;
  `;
  const TextContainer = styled.ul`
    margin: 12px auto;
    display: block;
    width: fit-content;
  `;
  const Text = styled.a`
    padding: 12px 0px;
    margin: 6px 18px;
    font-size: 16px;
    letter-spacing: 0.21em;
    cursor: pointer;
    :hover {
      color: rgb(130, 108, 108);
    }
    border-bottom: ${(props) =>
      props.value == current ? "1px solid rgb(130, 108, 108)" : "none"};
  `;
  return (
    <Container>
      <Logo src="../images/west-86th_Logo.webp" />
      <TextContainer>
        <Text value="home">HOME</Text>
        <Text value="services">SERVICES</Text>
        <Text value="book">BOOK APPOINTMENT</Text>
        <Text value="team">OUR TEAM</Text>
        <Text value="cancelation">CANCELLATION POLICY</Text>
      </TextContainer>
    </Container>
  );
}
