import { useState } from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return ( 
    <Container>
    <LoginForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`