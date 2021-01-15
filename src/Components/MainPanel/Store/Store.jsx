import { Link } from 'react-router-dom'
import css from './store.module.css'
import StoreItem from './StoreItem/StoreItem'


function Store(props){
    let store_items = props.store.map((item)=>{
        return <StoreItem item={item}  try_to_buy={props.try_to_buy}/>
    })

    return (
        <div id={css.store}>
            <h2>Store</h2>
            {store_items}
            <Link to='/'><button>Назад</button></Link>
        </div>
    )
}


export default Store;