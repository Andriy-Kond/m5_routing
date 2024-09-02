import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

// ^ Відстеження змін
// Якщо змінюється рядок запиту, хук useSearchParams повертає нове значення параметрів і оновлюється, тому можна зреагувати на це і запустити ефект.
export const SignUp = () => {
  const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username") ?? "";

  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача
    if (username === "") return;

    async function fetchUser() {
      const user = await fakeAPI.getUser(username);

      setUser(user);
    }

    fetchUser();
  }, [username]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.username.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />}
    </>
  );
};
