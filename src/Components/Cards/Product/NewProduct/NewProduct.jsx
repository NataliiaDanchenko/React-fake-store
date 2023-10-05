import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import style from './NewProduct.module.css';
import Header from '../../../Header/Header';
import Loader from '../../../Loader/Loader';


const NewProduct = () => {
    const [fetch, setFetch] = useState([{
        id: '',
        image: '',
        title: '',
        description: ''
    }]);

    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {  // setTimeout для того, чтобы увидеть компонент Loader при медленной загрузке данных
            axios.get(`https://fakestoreapi.com/products/${params.id}`)
                .then(response => {
                    console.log(response.data);
                    setFetch(response.data);
                    setLoading(false);
                }, 2000);
        });

    }, []);

    return (
        <div className={style.each_product}>
            <Header />
            <div>
                {
                    loading ? <Loader />
                        : <div className={style.new_product}>
                            <div><img src={fetch.image} /></div>
                            <div>
                                <div><h3>{fetch.title}</h3></div>
                                <div className={style.description}>{fetch.description}</div>
                                <p className={style.price}>{`${fetch.price} $`}</p>
                                <button>Add to basket</button>
                            </div>
                        </div>
                }
            </div>
        </div>

    );
};



export default NewProduct;