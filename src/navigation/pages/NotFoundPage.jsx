import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <p>
        This page not exist. Please return to our <Link to="/">home page</Link>
      </p>
    </>
  );
}
export default NotFoundPage;
