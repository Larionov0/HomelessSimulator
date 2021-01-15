import { Component } from 'react';
import { Link } from 'react-router-dom'
import css from './gruzchik.module.css'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

function remove_by_num(arr, value) { return arr.filter(function(ele){ return ele.num !== value; });}


function Box(props){
    let params = {
        'width': '50px',
        'height': '50px',
        'left': props.left,
        'top': props.top
    }
    return (
        <div className={css.box} style={params} onClick={props.minus_gruz}>
            <img src="https://pngicon.ru/file/uploads/derevjannyj-jashhik.png" alt="" style={{width: params.width, height:params.height}}/>
        </div>
    )
}


class Gruzchik extends Component {
    constructor (props) {
        super(props)
        this.state = {
            boxes: this.gen_random_boxes(),
            end: false
        }
        this.add_money = props.add_money
        this.needed_things = ['тапки']
        this.things = props.things
        this.message = ''
        console.log('constructor')
    }

    on_update(){}

    componentDidMount(){}

    componentDidUpdate(){
        console.log(this.state.boxes)
    }

    check_things(things) {
        return this.needed_things.every((thing)=>things.includes(thing))
    }

    isEnd = ()=>{
        if (this.state.end) 
            {
            return this.render_end()
            }
    }

    render_end() {
        return <div>
            <p>{this.message}</p>
            <p>Вы получили {this.zarabotok} грн!</p>
            <Link to='/zarabotki'><button class='norm_button'>Назад</button></Link>
            </div>
    }

    win(){
        this.zarabotok = 40
        this.add_money(this.zarabotok)
        this.setState({end: true})
    }

    gen_random_boxes(n=5) {
        let boxes = [];
        for (let i=0; i < n; i++){
            boxes.push(
                {
                    num: i,
                    left: getRandomInt(0, 1800),
                    top: getRandomInt(0, 500)
                }
            )
        }
        return boxes
    }

    minus_gruz = (i)=>{
        let boxes = this.state.boxes.slice()
        boxes = remove_by_num(boxes, i)
        this.setState({boxes: boxes})
        if (boxes.length === 0){
            this.win()
        }
    }

    render_boxes(){
        return this.state.boxes.map((box)=><Box left={box.left} top={box.top} minus_gruz={()=>this.minus_gruz(box.num)}/>)
    }

    render() {
        if (this.check_things(this.things)){
            return (
                <div className={css.poproshainichat}>
                    <h1>Грузим</h1>
                    <div id={css.board}>
                        {this.render_boxes()}
                    </div>
                    {this.isEnd()}
                </div>
            )
        }
        else {
            this.message = 'У вас не хватает вещей'
            this.zarabotok = 0
            return this.render_end();
        }
    }
}


export default Gruzchik;