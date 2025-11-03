import "./product.css";
import "./zeptoProductPage.css"

function Product(props) {
  return (
    <div className="Product">
      <img
        src={props.image}
        alt={props.name || "Product Image"}
        className="ProductImage"
      />
    </div>
  );
}

export default Product;
