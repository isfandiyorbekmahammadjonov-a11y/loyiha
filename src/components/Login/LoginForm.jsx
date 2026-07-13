import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-toastify";
import LoginFormStyle from "./LoginFormStyle";
function LoginForm() {
  let navigate = useNavigate();
  let emailRef = useRef();
  let passwordRef = useRef();
  async function loginPost() {
    try {
      const response = await fetch(`${apiUrl}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      localStorage.setItem("access", data.data.access);
      localStorage.setItem("refresh", data.data.refresh);
      navigate("/adminLayout");
    } catch (error) {
      toast.error("Login xato!");
    }
  }
  return (
    <LoginFormStyle
      emailRef={emailRef}
      passwordRef={passwordRef}
      loginPost={loginPost}
    />
  );
}

export default LoginForm;
