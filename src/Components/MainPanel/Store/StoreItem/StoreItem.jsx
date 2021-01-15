import css from './store_item.module.css'


export default function StoreItem ({item, try_to_buy}) {
    let on_buy_click = () => {
        try_to_buy(item);
    }

    return (
        <div className={css.store_item}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button className='norm_button' onClick={on_buy_click}>Купить ({item.price} грн)</button>
        </div>
    )
}