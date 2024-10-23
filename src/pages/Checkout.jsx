import "../styles/checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalGty = useSelector((state) => state.card.totalQuantity);
  const totalAmound = useSelector((state) => state.card.totalAmound);

  return (
    <Helmet title="Checkout">
      <CommoSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter Your Email" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="number" placeholder="Phone Number" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout_card">
                <h6>
                  Total Qty: <span>{totalGty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>$ {totalAmound}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Goast: <span>$ {totalAmound}</span>
                </h4>
                <button className="buy_btn auth_button w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
