
import UploadVideo from '../components/UploadVideo';
import styled from 'styled-components';
import Videos from '../components/Videos';

const UploadPage = () => {
  return (  
    <>
    <Container>
      <UploadVideo />
      <Videos />
    </Container>
    </>
  );
}

export default UploadPage;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`