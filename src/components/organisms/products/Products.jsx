import { fetchProducts } from "../../../services/Api";
import { useState, useEffect } from "react";
import Button from "../../atoms/button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const productsItems = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res);
        console.log(res);
      } catch (err) {
        console.error("Error fetching products:", err.message);
      } finally {
        setLoading(false);
      }
    };
    productsItems();
  }, []);

  return (
    <section>
      <div className="container mt-4">
        {loading ? (
          <div
            style={{ height: "90vh" }}
            className=" d-flex justify-content-center align-items-center"
          >
            <h1 className="display-2 text-center">Loading products...</h1>
          </div>
        ) : (
          <div className="row g-4">
            {products.map((productsItems, index) => (
              <div key={index} className="col-lg-3">
                <div className="text-center border py-3">
                  <img
                    src={productsItems.image}
                    className="img-fluid"
                    style={{ height: "200px", width: "200px" }}
                    alt={productsItems.title}
                  />
                  <div className="title">
                    <p className="mt-2">{productsItems.title}</p>
                    <div className="prices d-flex justify-content-around">
                      <span>Rs: {Math.ceil(productsItems.price)}</span>
                      <span>Rating {productsItems.rating.rate}</span>
                    </div>
                  </div>
                  <div className="btn mt-2">
                    <Button
                      label="Add to cart"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: productsItems.id,
                            image: productsItems.image,
                            price: productsItems.price,
                            rating: productsItems.rating.rate,
                            title: productsItems.title,
                            qty: 1,
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
