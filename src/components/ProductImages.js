import "./productImages.css";

const ProductImages = ({ data }) => {
  console.log(data);
  return (
    <div className="product-images">
      <img src={data.product_image.secure_url} alt="" />
    </div>
  );
};

export default ProductImages;
