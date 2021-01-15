import { Component } from 'react';
import { Link } from 'react-router-dom'
import css from './poproshainichat.module.css'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


class Poproshainichat extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sec: 5,
            end: false
        }
        this.add_money = props.add_money
    }

    on_update(){
        if (this.state.sec > 0){
            this.timerID = setTimeout(
                ()=>this.tick(),
                1000
            )
        }
        else {
            if (! this.state.end){
                this.win()
                this.setState({end: true})
            }
        }
    }

    componentDidMount(){
        this.on_update()
    }

    componentDidUpdate(){
        this.on_update()
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({sec: this.state.sec - 1})
    }

    isEnd = ()=>{
        if (this.state.end) 
            {
            return <div>
                <p>Вы получили {this.zarabotok} грн!</p>
                <Link to='/zarabotki'><button class='norm_button'>Назад</button></Link>
                </div>
            }
    }

    win(){
        this.zarabotok = getRandomInt(5, 25)
        this.add_money(this.zarabotok)
    }

    render() {
        return (
            <div className={css.poproshainichat}>
                <h1>Попрошайничество</h1>
                <p>Бомж попрошайничает. Подождите немного...</p>
                <p>{this.state.sec}</p>
                {this.isEnd()}
            </div>
        )
    }
}


export default Poproshainichat;