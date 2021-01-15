import { Link } from 'react-router-dom'
import css from './main_menu.module.css'


function MainMenu(props){
    return (
        <div id={css.main_menu}>
            <h2>Main menu</h2>
            <div id={css.options}>
                <div>
                    <Link to='store'><button onClick=''>Магазин</button></Link>
                    <Link to='zarabotki'><button onClick=''>Заработки</button></Link>
                </div>
                <div>
                    <Link to='inventory'><button onClick=''>Инвентарь</button></Link>
                </div>
            </div>
        </div>
    )
}


export default MainMenu;