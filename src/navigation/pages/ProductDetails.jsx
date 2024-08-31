import { getProductById } from "navigation/js/fakeAPI";
import { useParams } from "react-router-dom";

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae
            cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus
            reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Impedit suscipit quisquam incidunt
            commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
          </p>
        </div>
      </main>
    </>
  );
}
export default ProductDetails;
