import styled from "styled-components";
const VideosPage = () => {
  return ( 
    <Container>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
      <Card>video</Card>
    </Container>
  );
}

export default VideosPage;



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`

const Card = styled.div`
  height: 350px;
  width: 400px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin: 1rem;
  padding: 1rem;
`