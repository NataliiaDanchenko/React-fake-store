import logo from "./../../assets/img/header-logo.svg";
import basket from "./../../assets/img/images1.png";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className="content">
                    <div><img src={logo} alt="logo"/></div>
                    <div className="header_nav">
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </div>
                    <div><img src={basket} alt="basket"/></div>
                </div>
            </div>
        </header>
    )
}

export default Header;