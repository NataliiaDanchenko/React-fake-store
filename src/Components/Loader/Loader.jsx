
import style from './Loader.module.css';


const Loader = () => {
    return (
        <div className={style.loader}>
            <div className={style.is_loading}></div>
        </div>
    );
};

export default Loader;