import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Product.module.css";




const Product = (props) => {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate(`/product/${props.pr.id}`)
    };

    return (
        <div className={style.product}>
            <div className={style.product_card}>
                <div className={style.product_img}><img src={props.pr.image} alt="img" /></div>
                <h3>{`${props.pr.price} $`}</h3>
                <h3>{props.pr.category}</h3>
                <p className={style.product_description}>{props.pr.description}</p>
                <button onClick={handlerClick}>Buy</button>
            </div>
        </div>
    )
}



export default Product;