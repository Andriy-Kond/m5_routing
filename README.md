# useParams()

    <Route path="products/:productId" element={<ProductDetails />} />

### Отримання параметру

    function ProductDetails() {
      const { productId } = useParams();
      const { name } = getProductById(productId);

      return (
        <>
          <main>
            <p>
              It is details of product with <b> productID: {productId} </b> and
              <b> name: {name}</b>
            </p>
            <img src="https://via.placeholder.com/960x240" alt="" />
            <div>
              <h2>
                Product - {name} - {productId}
              </h2>
              <p>
                Lorem ipsum dolor,
              </p>
            </div>
          </main>
        </>
      );
    }

# useSearchParams()

### Читання і запис у адресний рядок:

    function Products() {
      const products = getProducts();
      const [searchParams, setSearchParams] = useSearchParams();
      const productName = searchParams.get("searchValue") ?? "";

      const visibleProducts = products.filter(product =>
        product.name.toLowerCase().includes(productName.toLowerCase()),
      );

      const updateFilterInput = searchValue => {
        const newParams = searchValue === "" ? {} : { searchValue };

        setSearchParams(newParams);
      };

      return (
        <>
          <p>The PRODUCTS page</p>
          <SearchBox value={productName} updateFilterInput={updateFilterInput} />
          <ProductsList products={visibleProducts} />
        </>
      );
    }

## Відстеження змін в адресному рядку за допомогою useSearchParams()

Якщо змінюється рядок запиту, хук useSearchParams повертає нове значення параметрів і оновлюється, тому можна зреагувати на це і запустити ефект.

    const SignUp = () => {
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

# useNavigate();

### Навігація за допомогою useNavigate()

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

### Навігація за допомогою компонента Navigate

    import { Navigate, useState } from "react-router-dom";

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
