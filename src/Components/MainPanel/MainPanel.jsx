import { Link, Route, Switch } from 'react-router-dom'
import MainMenu from './MainMenu/MainMenu'
import css from './main_panel.module.css'
import Store from './Store/Store'
import Zarabotki from './Zarabotki/Zarabotki'


function MainPanel(props){
    return (
        <div id={css.main_panel}>
            <Switch>
                <Route path='/store'><Store store={props.store}  try_to_buy={props.try_to_buy}/></Route>
                <Route path='/zarabotki'><Zarabotki add_money={props.add_money} things={props.things}/></Route>
                <Route path='/'><MainMenu/></Route>
            </Switch>
        </div>
    )
}


export default MainPanel;