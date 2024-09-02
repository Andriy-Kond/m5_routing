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

Метод get() завжди поверне рядок незалежно від значення параметра, яке вказано у рядку запиту. Наприклад, для такого рядка запиту ?name=hoodie&maxPrice=500&inStock=true ми отримаємо такі значення параметрів.

    const [searchParams] = useSearchParams();

    const name = searchParams.get("name");
    console.log(name, typeof name); // "hoodie", string

    const maxPrice = searchParams.get("maxPrice");
    console.log(maxPrice, typeof maxPrice); // "500", string

    const inStock = searchParams.get("inStock");
    console.log(inStock, typeof inStock); // "true", string

Якщо параметри це числа чи були, для отримання значення правильного типу потрібно виконати приведення типів. Це можна зробити вбудованими класами Number(value) та Boolean(value).

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

## Параметри як об'єкт

Якщо рядок запиту містить кілька параметрів, постійно використовувати метод get() може бути незручно. Ось простий спосіб перетворити екземпляр класу URLSearchParams у звичайний об'єкт із властивостями.

    const [searchParams] = useSearchParams();
    const params = useMemo(
      () => Object.fromEntries([...searchParams]),
      [searchParams],
    );
    const { name, maxPrice, inStock } = params;

Object.entries - метод, який перетворює об'єкт на масив пар ключ-значення.
Object.fromEntries - метод, який перетворює масив пар ключ-значення у об'єкт.

#### Мемоізація

Мемоізуємо операцію перетворення об'єкта параметрів, щоб отримувати посилання на новий об'єкт лише якщо зміняться параметри рядка запиту, а не при кожному рендері компоненту.

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

# useLocation()

location: https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500#agreement

    {
      "pathname": "/products",
      "search": "?name=hoodie&color=orange&maxPrice=500",
      "hash": "#agreement",
      "state": null,
      "key": "random-browser-generated-id"
    }

    const App = () => {
      const location = useLocation();

      useEffect(() => {
        Analytics.send(location);
      }, [location]);

      return <div>...</div>;
    };

state - довільне значення, яке містить додаткову інформацію, пов'язану з розташуванням, але не відображається в URL-адресі. Задається розробником. Використовується для передачі між маршрутами.

Властивість state об'єкта розташування дозволяє передавати довільні дані при навігації від одного маршруту до іншого. Для цього використовуємо пропс state компонента Link і передамо об'єкт із властивістю from - звідки прийшов юзер. Значення пропсу state не має зумовленої структури та може бути довільним, на розсуд розробника.

    const Products = () => {
      return (
        <Link to="/products/h-1" state={{ from: "/dashboard?name=hoodie" }}>
          Navigate to product h-1
        </Link>
      );
    };

    const ProductDetails = () => {
      const location = useLocation();
      console.log(location.state); // { from: "/dashboard?name=hoodie" }

      return <Link to={location.state.from}>Back to products</Link>;
    };

Можна передавати весь об'єкт location

    const Products = () => {
      const location = useLocation();

      return (
        <Link to="/product/h-1" state={{ from: location }}>
          Navigate to product h-1
        </Link>
      );
    };

    const ProductDetails = () => {
      const location = useLocation();
      console.log(location.state);

      const backLinkHref = location.state?.from ?? "/products";

      // /products -> products/h-1
      // { from: { pathname: "/products", search: "" } }

      // /products?name=hoodie -> products/h-1
      // { from: { pathname: "/products", search: "?name=hoodie" } }

      return <Link to={backLinkHref}>Back to products</Link>;
    };
