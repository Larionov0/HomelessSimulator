import { Link, Route, Switch } from 'react-router-dom'
import Gruzchik from './Gruzchik/Gruzchik'
import Poproshainichat from './Poproshainichat/Poposhainichat'
import css from './zarabotki.module.css'
import Zarabotok from './Zarabotok/Zarabotok'


function Zarabotki(props){

    return (
        <div>
            <Switch>
                <Route path='/zarabotki/pop'>
                    <Poproshainichat add_money={props.add_money}/>
                </Route>
                <Route path='/zarabotki/gruz'>
                    <Gruzchik add_money={props.add_money} things={props.things}/>
                </Route>
                <Route path='/zarabotki'>
                    <div id={css.zarabotki}>
                        <Zarabotok name="попрошайничать" description="Вы попрошайничаете" price="5 - 25" link='pop'/>
                        <Zarabotok name="работать гружчиком" description="Вы таскаете всякое (нужны тапки)" price="40" link='gruz'/>
                        <Zarabotok name="работать менеджером" description="Вы обзваниваете всяких (нужны телефон и спорт костюм)" price="200"/>
                        <Link to='/'><button>Назад</button></Link>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}


export default Zarabotki;