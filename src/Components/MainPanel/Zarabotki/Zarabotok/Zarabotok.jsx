import { Link } from 'react-router-dom'
import css from './zarabotok.module.css'


function Zarabotok({name, description, price, link='pop'}){

    return (
        <div className={css.zarabotok}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price} грн</p>
            <Link to={`zarabotki/${link}`}><button className='norm_button'>Отряжаемся</button></Link>
        </div>
    )
}


export default Zarabotok;