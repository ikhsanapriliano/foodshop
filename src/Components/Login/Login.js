import { React, useState } from "react";
import { Container, Form, Button, Card, InputGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Menu/Menu.scss";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [getEnabled, setEnabled] = useState("banner-disabled");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setEnabled("banner-enabled");
      event.preventDefault();
    }

    setValidated(true);
  };

  return (
    <div className="bg-login">
      <Container className="d-flex justify-content-center">
        <Card className="login-box-container">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <InputGroup hasValidation>
                <Form.Control id="disabledTextInput" placeholder="Email atau Nomor Telepon" required />
                <Form.Control.Feedback type="invalid">Masukkan email atau nomor telepon.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" id="disabledTextInput" placeholder="Kata Sandi" required />
              <Form.Control.Feedback type="invalid">Masukkan kata sandi.</Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex flex-column">
              <Button type="submit">Masuk</Button>
              <Link className="text-center mt-3">Lupa Kata Sandi</Link>
            </div>
            <div className={getEnabled}>
              <Alert className="mt-2 p-2" variant="danger">
                Gagal untuk login.
              </Alert>
            </div>
          </Form>
          <div className="new-container">
            <Button
              onClick={() => {
                alert("Pendaftaran belum dibuka.");
              }}
            >
              Buat Akun Baru
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
