import React from "react";
import { AuthenticationLayout } from "../../layouts";
import { RegisterForm } from "../../components";

const registerPage = () => (
  <AuthenticationLayout>
    <h1>Register</h1>
    <RegisterForm />
  </AuthenticationLayout>
);

export default registerPage;
