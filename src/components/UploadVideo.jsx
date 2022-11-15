import styled from "styled-components"

const UploadVideo = () => {
  return ( 
    <Container>
      <Video src="#">
        <p>thumbnail</p>
      </Video>
      <Form>
        <Span>
          <Input placeholder="title" />
          <Input placeholder="thumbnail" />
          <Input type="file" />
        </Span>
        <Span>
          <Description placeholder="description" />
          <Input type="submit" />
        </Span>
      </Form>
    </Container>
  );
}
export default UploadVideo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Video = styled.video`
  display: flex;
  height: 525px;
  width: 1000px;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: #00000017 0px 4px 12px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  box-shadow: #00000018 0px 4px 12px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  height: 30px;
  margin: 1rem;
`
const Description = styled.input`
  box-shadow: #00000018 0px 4px 12px;
  border: none;
  border-radius: 5px;
  height: 250px;
  width: 550px;
`

