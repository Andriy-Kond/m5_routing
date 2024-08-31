import { useNavigate } from "react-router-dom";
import fakeAPI from "signup/js/fakeAPI";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const response = await fakeAPI.login(values);

    if (response.success) {
      navigate("/profile", { replace: true });
      // Якщо вказати значення true, то новий лист підмінить собою найвищий. Це використовується досить рідко, наприклад при логіні, щоб користувач не зміг повернутися кнопкою «назад» на сторінку логіна після входу, адже він уже в системі і робити йому там нічого.
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      {/* <LoginForm onSubmit={handleSubmit} /> */}
    </div>
  );
};
