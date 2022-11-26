import React, { useEffect, useState } from "react";
import { Container, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.scss";
import Spinner from "react-bootstrap/Spinner";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [getDisabled, setDisabled] = useState("banner-enabled");
  const [getEnabled, setEnabled] = useState("banner-disabled");
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [getMenu, setMenu] = useState("foods");
  const navAction = (menu) => {
    setMenu(menu);
    setEnabled("banner-enabled");
    setDisabled("banner-disabled");
  };

  useEffect(() => {
    fetch("https://638156c3786e112fe1c6dfc8.mockapi.io/ik/" + getMenu)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });
  }, [getMenu]);

  const NavigationMenu = () => {
    return (
      <Nav className="types-container" variant="pills" defaultActiveKey="/menu">
        <Nav.Link
          onClick={() => {
            navAction("foods");
          }}
          as={Link}
          eventKey="/menu/makanan"
          to="/menu/makanan"
        >
          Makanan
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            navAction("drinks");
          }}
          as={Link}
          eventKey="/menu/minuman"
          to="/menu/minuman"
        >
          Minuman
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            navAction("others");
          }}
          as={Link}
          eventKey="/menu/cemilan"
          to="/menu/cemilan"
        >
          Cemilan
        </Nav.Link>
      </Nav>
    );
  };

  if (isLoading == true) {
    return (
      <div>
        <NavigationMenu />
        <div className="banner-enabled">
          <div className="banner-container">
            <div className="a">Tunggu Sebentar</div>
            <div>Sinyal internet anda lambat</div>
            <div className="d-flex p-2">
              <Spinner animation="border" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <NavigationMenu />
          <div className={getEnabled}>
            <MenuItems menus={items} />
          </div>
        </Container>
        <div className={getDisabled}>
          <div className="banner-container">
            <div className="a">Selamat Memesan</div>
            <div>
              Pilih kategori menu di atas <br />
              ....
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Menu;
