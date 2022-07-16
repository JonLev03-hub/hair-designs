import styled from "styled-components";
export default function Media(props) {
  const Container = styled.div``;
  const Header = styled.h2``;
  const MediaList = styled.div`
    margin: 50px auto;
    width: fit-content;
  `;
  const Image = styled.img`
    width: 30px;
    height: 30px;
    padding: 20px;
  `;
  const MediaLink = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 20px;
    border-radius: 50%;
    transition: 0.4s;
    :hover {
      background-color: rgb(226, 226, 226);
      transform: scale(1.2);
    }
  `;
  return (
    <Container>
      <MediaList>
        <MediaLink
          href="https://www.facebook.com/west86thhair/"
          target="_blank"
          rel="noopener"
        >
          <Image src="./Images/facebook.png" alt="Facebook" />
        </MediaLink>
        <MediaLink
          href="https://www.instagram.com/west86thhair/"
          target="_blank"
          rel="noopener"
        >
          <Image src="./Images/instagram.png" alt="Instagram" />
        </MediaLink>
        <MediaLink
          href="https://www.pinterest.com/west86thhair/"
          target="_blank"
          rel="noopener"
        >
          <Image src="./Images/pinterest.png" alt="Pinterest" />
        </MediaLink>
      </MediaList>
    </Container>
  );
}
