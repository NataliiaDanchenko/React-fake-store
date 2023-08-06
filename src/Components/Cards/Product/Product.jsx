import React from "react"
import {useNavigate} from "react-router-dom";
import style from "./Product.module.css";



const Product = (props) => {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate(`/product/${props.pr.id}`)
        console.log(navigate)
    }
    return (
                    <div className={style.product}>
                        <div className={style.product_card}>
                            <h2>{props.pr.id}</h2>
                            <img src={props.pr.image} alt="img"/>
                            <h3>{props.pr.price}</h3>
                            <h3>{props.pr.category}</h3>
                            <p>{props.pr.description}</p>
                            <button onClick={handlerClick}>Buy</button>
                        </div>

                    </div>

    )


}

export default Product;