import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupForm = ({ onSubmit, formData, onChange}) => {
  const navigate = useNavigate()

  const handleClick = () => navigate('/login')
  return ( 
      <Form onSubmit={onSubmit}>
        <Title>Signup</Title>
        <Input placeholder="email" name="email" value={formData.email} onChange={onChange} />
        <Input placeholder="username" name="username" value={formData.username} onChange={onChange} />
        <Input placeholder="password" name="password" value={formData.password} onChange={onChange} />
        <Input type="submit" />
        <Login>
          <button onClick={handleClick}>already have an account? login</button>
        </Login>
      </Form>
  );
}

export default SignupForm;

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

const Login = styled.p`
  align-self: center;
`