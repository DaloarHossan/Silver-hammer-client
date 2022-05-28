import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, description, img, min_order, quantity, price } = product;
  const navigate = useNavigate();

  const buyNow = (id) => {
    navigate(`/checkout/${id}`);
  };

  const minDescription = description.slice(0, 82);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>
              Price:${price}/piece <br />
              Min. Order:{min_order}pieces <br />
              Quantity:{quantity}
            </p>
          </div>
          <div>
            <p>Description:{minDescription} </p>
          </div>
          <div className="card-actions">
            <button onClick={() => buyNow(_id)} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
