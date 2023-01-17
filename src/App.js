import { useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Нямушка",
      description: "Сказочное заморское яство",
      composition: "с фуа-гра",
      additional: "10 порций мышь в подарок",
      size: "0,5",
      status: {
        disabled: 'Печалька, c фуа-гра закончился.',
        selected: 'Печень утки разварная с артишоками',
      },
      activeStatus: 'default'
    },
    {
      id: 2,
      name: "Нямушка",
      description: "Сказочное заморское яство",
      composition: "с рыбой",
      additional: "40 порций 2 мыши в подарок",
      size: "2",
      status: {
        disabled: 'Печалька, c рыбой закончился.',
        selected: 'Головы щучьи с чесноком да свежайшая сёмгушка',
      },
      activeStatus: 'selected'
    },
    {
      id: 3,
      name: "Нямушка",
      description: "Сказочное заморское яство",
      composition: "с курой",
      additional: "100 порций 5 мышей в подарок заказчик доволен",
      size: "5",
      status: {
        disabled: 'Печалька, c курой закончился.',
        selected: 'Филе из цыплят с трюфелями в бульоне.',
      },
      activeStatus: 'disabled'
    },
  ]);

  const changeStatus = (id) => {
    let cardIndex = items.findIndex(item => item.id === id);
    let updateItems = [...items];
    if(updateItems[cardIndex].activeStatus === 'disabled') {
      return;
    }

    let status = updateItems[cardIndex].activeStatus === 'default' ? 'selected' : 'default'
    updateItems[cardIndex] = {...updateItems[cardIndex], activeStatus: status}
    setItems([...updateItems])
  }

  return <div className="App">
    <h1 className="main-title">Ты сегодня покормил кота?</h1>
    <div className='cardItems'>
      {items.map((item) => <Card key={item.id} card={item} setItems={changeStatus} />)}
    </div>
  </div>;
}

export default App;
