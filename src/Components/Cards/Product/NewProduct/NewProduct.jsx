import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const NewProduct = () => {
    const [fetch, setFetch] = useState([{
        id: '',
        image: '',
        title: '',
        description: ''
    }])

const params = useParams()
console.log(params)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                console.log(response.data)
                setFetch(response.data);
            })
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу товара ID = {params.id}</h1>
            <div>{fetch.id}</div>
            <div><img src={fetch.image}/></div>
            <div><h3>{fetch.title}</h3></div>
            <div>{fetch.description}</div>
        </div>
    );
};

export default NewProduct;