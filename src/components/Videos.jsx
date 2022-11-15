import styled from "styled-components";

const Videos = () => {
  return ( 
    <Container>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <p>view more videos</p>
    </Container>
  );
}

export default Videos;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10rem;
  }
`

const Card = styled.div`
  height: 150px;
  width: 200px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin: 1rem;
  padding: 1rem;
  @media (max-width: 1300px) {
    height: 325px;
    width: 375px;
  }
`