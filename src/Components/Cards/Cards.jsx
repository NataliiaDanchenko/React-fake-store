
import style from "./Cards.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Cards = () => {
    let[products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
            })
    })

    const showHandler = (productId) => {
        navigate(`product/${productId}`)
    }

    return (
        <div className={style.cards}>
            <div className="container">
                <h2>Cards</h2>
                <div className={style.products}>
                    {
                        products.map((pr)=>{
                            return (
                                <div className={style.card}>
                                    <img src={pr.image} alt={`image_product${pr.id}`}/>
                                    <h2>{pr.title}</h2>
                                    <h3>{pr.price}$</h3>
                                    <button onClick={()=>{showHandler(pr.id)}}>Buy</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;