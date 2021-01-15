import css from './top_panel.module.css';


function TopPanel(props){
    console.log(props.things)
    return (
        <div id={css.top_panel}>
            <img className={css.bomj} src="https://cs10.pikabu.ru/post_img/big/2019/06/05/7/1559733641199439890.jpg" alt=""/>
            <div id={css.stats}>
                <div className={css.stat}>
                    hp = {props.hp}
                </div>
                <div className={css.stat}>
                    satiety = {props.satiety}
                </div>
                <div className={css.stat}>
                    money = {props.money}
                </div>
                <p>Ваши вещи:</p>
                <div className={css.things}>
                    {props.things.map((thing)=><p>{thing}</p>)}
                </div>
                
            </div>
        </div>
    )
}

export default TopPanel;