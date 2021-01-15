import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPanel from './Components/MainPanel/MainPanel';
import TopPanel from './Components/TopPanel/TopPanel';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      things: [],
      store: [
        {'id': 1, 'name': 'тапки', 'description': 'Чтоб пятки не натерло', 'price': 40},
        {'id': 2, 'name': 'телефон', 'description': 'Для звонков', 'price': 200},
        {'id': 3, 'name': 'спорт костюм', 'description': 'Чтоб прикрывало', 'price': 300},
        {'id': 4, 'name': 'смартфон', 'description': 'Чтоб быть солидным', 'price': 1000}
      ],
      money: 10,
      satiety: 8,
      hp: 10
    }
  }

  buy = (item) => {
    this.state.money -= item.price
    this.state.things.push(item.name)
    this.setState(this.state)
  }

  try_to_buy = (item)=>{
    if (this.state.money >= item.price){
      if (this.state.things.includes(item.name))
        alert('У вас уже есть этот предмет!')
      else
        this.buy(item)
    } else {
      alert('У вас нехватает денег на сию закупку!')
    }
  }

  add_money = (value)=>{
    this.setState({money: this.state.money + value})
  }
  
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <TopPanel money={this.state.money} things={this.state.things} satiety={this.state.satiety} hp={this.state.hp}/>
          <MainPanel things={this.state.things} store={this.state.store} try_to_buy={this.try_to_buy} add_money={this.add_money}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;