import { useState } from "react";
import SignupForm from "../components/Signup";
import styled from "styled-components";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
    <SignupForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </Container>
  );
}

export default SignupPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`