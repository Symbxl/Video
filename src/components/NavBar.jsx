import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return ( 
    <Ul>
      <Link to="/" className="Link"><h1>Home</h1></Link>
      <Span>
      <Li>
      <Link to="upload" className="Link">upload video</Link>
      </Li>
      <Li>
        <Link to="videos" className="Link">all videos</Link>
      </Li>
      <Li>
      <Link to="login" className="Link">logout</Link>
      </Li>
      </Span>
    </Ul>
  );
}

export default NavBar;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
const Span = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`
const Li = styled.li`
  margin: 0.5rem;
  box-shadow: #00000018 0px 4px 12px;
  border-radius: 20px;
  padding: 1rem;
`

