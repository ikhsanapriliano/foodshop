import React, { useState } from "react";
import "./Menu.scss";
import { Card, Button, Modal, Alert } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const MenuItems = (props) => {
  const [getFood, setFood] = useState([]);
  const [getPrice, setPrice] = useState(0);
  const [getQuantity, setQuantity] = useState(0);
  const [getEnabled, setEnabled] = useState("banner-disabled");
  const addFood = (para) => {
    setFood([...getFood, para]);
    setPrice(getPrice + parseInt(para.price));
    setQuantity(getQuantity + 1);
  };
  const deleteFood = (id, price) => {
    alert("Peringatan!! Makanan yang sama akan ikut terhapus.");
    const newFood = getFood.filter((l) => l.id !== id);
    const trashFood = getFood.filter((j) => j.id == id);
    setFood(newFood);
    setQuantity(newFood.length);
    setPrice(getPrice - parseInt(price) * trashFood.length);
  };
  const [show, setShow] = useState(false);

  const PayNow = () => {
    setEnabled("banner-enabled");
  };
  const handleClose = () => {
    setShow(false);
    setEnabled("banner-disabled");
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <div className="items-container">
        {props.menus.map((item, index) => (
          <Card key={index} className="card-menu">
            <Card.Img variant="top" src={item.avatar} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <div className="tooling-container">
                <Button
                  onClick={() => {
                    addFood(item);
                  }}
                  variant="outline"
                  className="p-0 add-cart"
                >
                  <AddShoppingCartIcon />
                </Button>
                <Card.Text className="price">Rp. {item.price}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button className="eat-button" variant="outline" onClick={handleShow}>
        <div className="ball">{getQuantity}</div>
        <RestaurantMenuIcon />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pesanan Anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {getFood.map((food, i) => (
              <div key={i} className="food-container">
                <div className="kiri">{food.name}</div>
                <div className="kanan">Rp. {food.price}</div>
                <div
                  onClick={() => {
                    deleteFood(food.id, food.price);
                  }}
                >
                  <DeleteIcon className="dlt-button" />
                </div>
              </div>
            ))}
            <div>
              <div className="d-flex">
                <div className="kiri total">Total</div>
                <div className="kanan total">Rp. {getPrice}</div>
                <PointOfSaleIcon className="total" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button className="pay-button" onClick={PayNow}>
            Bayar Sekarang
          </Button>
        </Modal.Footer>
        <div className={getEnabled}>
          <Alert className="danger-alert" variant="danger">
            Anda harus <Alert.Link href="../login">Login</Alert.Link> untuk melanjutkan.
          </Alert>
        </div>
      </Modal>
    </div>
  );
};

export default MenuItems;
