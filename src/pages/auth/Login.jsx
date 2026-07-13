import React from "react";
import LoginImg from "../../assets/Login.svg";
import LoginForm from "../../components/Login/LoginForm";
function Login() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-white px-6 py-10">
        <LoginForm />
      </div>
      <div className="hidden lg:flex items-center justify-center bg-[#f3f2ff]">
        <div className="text-center">
          <img src={LoginImg} alt="img" />
          <h2 className="mt-10 text-3xl font-bold text-gray-900">
            Start Your Journey
          </h2>
          <p className="mt-3 text-gray-500">
            Join thousands of creators sharing their stories on Blogify
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
