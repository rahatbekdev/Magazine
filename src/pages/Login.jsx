import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setLoading(false);
      toast.success("Succesfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Login</h3>
              {loading ? (
                <Col lg="12" className="text-center">
                  <h5 className="fw-bold">Loading....</h5>
                </Col>
              ) : (
                <Form className="auth_form" onSubmit={signin}>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Enter Your email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form_group">
                    <input
                      // type="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Your password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="password_toggle fs-5"
                      onClick={togglePassword}
                    >
                      {showPassword ? "🙈" : "👁️"} {/* Иконка переключателя */}
                    </span>
                  </FormGroup>

                  <button type="submit" className="buy_button auth_btn">
                    Login
                  </button>
                  <p>
                    Dont have an account?
                    <Link to="/sign-up">Create an account</Link>
                  </p>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
