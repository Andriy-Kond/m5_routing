import { Navigate, useState } from "react-router-dom";
import fakeAPI from "signup/js/fakeAPI";

export const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = async values => {
    const response = await fakeAPI.login(values);
    setIsLoginSuccess(response.success);
  };

  if (isLoginSuccess) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
