import styled from "styled-components";
const Video = () => {
  return ( 
    <Container>
      <Card>video</Card>
      <h1>Title</h1>
      <h2>description</h2>
    </Container>
  );
}

export default Video;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`

const Card = styled.div`
  height: 70vh;
  width: 80%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 1rem;
`