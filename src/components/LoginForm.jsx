import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = ({ onSubmit, formData, onChange}) => {
  const navigate = useNavigate()

  const handleClick = () => navigate('/signup')

  return ( 
      <Form onSubmit={onSubmit}>
        <Title>Login</Title>
        <Input placeholder="email or username" name="identifier" value={formData.identifier} onChange={onChange} />
        <Input placeholder="password" name="password" value={formData.password} onChange={onChange} />
        <Input type="submit" />
        <Signup>
          <button onClick={handleClick}>don't have an account? Signup</button>
        </Signup>
      </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: #00000018 0px 4px 12px;
  height: 520px;
  width: 520px;
`

const Input = styled.input`
  box-shadow: #00000018 0px 4px 12px;
  border: none;
  border-radius: 5px;
  padding: 1.5rem 2rem;
  margin: 1rem;
`

const Title = styled.h1`
  align-self: center;
`
const Signup = styled.p`
  align-self: center;
`