
import Header from "../Header/Header";
import Product from "./Product/Product";
import style from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../features/shop/shopSlice";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Select from "../Select/Select";
import { setFilter } from "../../features/shop/shopSlice";



const Cards = () => {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState('');
    const dispatch = useDispatch();  // useDispatch - используется для вызова action
    let cards = useSelector(state => state.shop.cards); // useSelector - используется для извлечения данных из store

    useEffect(() => {
        setLoading(true);
        setTimeout(async () => { // setTimeout для того, чтобы увидеть компонент Loader при медленной загрузке данных
            dispatch(getCards());
            setLoading(false);
        }, 1000)

    }, []);

    const sortFilter = (sort) => {
        dispatch(setFilter(sort))
    };

    return (
        <div className={style.cards}>
            <Header />
            <div className="container">
                <Select
                    value={selected}
                    defaultValue='Sort'
                    onChange={() => sortFilter()}
                    options={
                        [
                            { value: 'price', name: 'By price' },
                        ]
                    }
                />

                <div className={style.products}>
                    {
                        loading ? <Loader />
                            : cards.map((pr, index) => <Product key={index} pr={pr} />)
                    }
                </div>
            </div>
        </div>
    )
}



export default Cards;