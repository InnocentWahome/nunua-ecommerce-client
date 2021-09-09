import React from "react";
import { AuthenticationLayout } from "../../layouts";
import { LoginForm } from "../../components";

const loginPage = () => (
  <AuthenticationLayout>
      <h1>Login</h1>
    <LoginForm />
  </AuthenticationLayout>
);

export default loginPage;
