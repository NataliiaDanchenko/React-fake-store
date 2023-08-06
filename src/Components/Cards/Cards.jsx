

import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product/Product";
import style from "./Cards.module.css";
const Cards = () => {
    let[products, setProducts] = useState([{
        category: '',
        description: '',
        image: '',
        id: '',
        price: '',
        title: ''
    }]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
            })
    })
    return (
        <div className={style.cards}>
            <div className="container">
                <h2>Cards</h2>
                <div className={style.products}>
                    {
                        products.map((pr, index) => <Product key={index} pr={pr}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;