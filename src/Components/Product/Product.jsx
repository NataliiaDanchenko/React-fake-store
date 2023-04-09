import "./Product.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);

    let { productId } = useParams();
    console.log(productId)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    }, [])


    return (
        <div>
           <h2>{product.title}</h2>
            <img src={product.image} alt="img"/>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
        </div>
    )
}

export default Product;