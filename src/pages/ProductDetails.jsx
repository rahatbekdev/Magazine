import ProductList from "../components/UI/ProductsList";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import products from "../data/product";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cardActions } from "../redux/slices/cardSlice";
import { toast } from "react-toastify";

import { db } from "../fireBase.config";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {
  const [product, setProduct] = useState({productName:""});
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: products } = useGetData("products");
  // const product = products.find((item) => item.id === id);

  const docRef = doc(db, "products", id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product");
      }
    };
    getProduct();
  }, []);

  const {
    imgUrl,
    productName,
    price,
    // avgRating,
    // reviews,
    shortDesc,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((el) => el.category === category);

  const submitHandler = (event) => {
    event.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
  };

  const addToCard = () => {
    dispatch(
      cardActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added succesfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommoSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex gap-5 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-line"></i>
                    </span>
                    <span>
                      <i className="ri-star-line"></i>
                    </span>
                    <span>
                      <i className="ri-star-line"></i>
                    </span>
                    <span>
                      <i className="ri-star-line"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-line"></i>
                    </span>
                  </div>
                  <p>
                    {/* (<span>{avgRating}</span>ratings) */}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">$ {price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.06 }}
                  className="buy_button"
                  onClick={addToCard}
                >
                  Add to card
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews
                  {/* Reviews ({reviews.length}) */}
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content mt05">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    {/* <ul>
                      {reviews?.map((el, i) => (
                        <li key={i} className="mb-4">
                          <h6>Mr Flow</h6>
                          <span>{el.rating} (rating)</span>
                          <p>{el.text}</p>
                        </li>
                      ))}
                    </ul> */}
                    <div className="review_form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form_group d-flex align-items-center gap-5 rating_group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i className="ri-star-line"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i className="ri-star-line"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i className="ri-star-line"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i className="ri-star-line"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i className="ri-star-line"></i>
                          </motion.span>
                        </div>

                        <div className="form_group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy_button"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">You might also like</h2>
            </Col>

            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
