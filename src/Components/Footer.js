import styled from "styled-components";
export default function Footer(props) {
  const Footer = styled.footer`
    margin: 6vh auto;
    width: 80%;
    font-size: 16px;
    color: rgb(89, 89, 89);

    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      text-align: center;
    }
  `;
  const Span = styled.span`
    padding: 10px;
  `;
  return (
    <Footer>
      <Span>
        Copyright © 2020 West 86th Hair Designs - All Rights Reserved.
      </Span>
      <Span>Powered by Abstract Student Designing</Span>
    </Footer>
  );
}
