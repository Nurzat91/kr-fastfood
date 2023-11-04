import './App.css'
import {useState} from 'react';
import {Props} from './types';
import Hamburger from './assets/hamburgers.jpg';
import ChickenBurger from './assets/ChickenBurger.jpg';
import PitaBurger from './assets/PitaBurger.png';
import Coffee from './assets/Coffee.png';
import Fresh from './assets/Fresh.png';
import Tea from './assets/Tea.png';
import AddItems from "./components/AddItems/AddItems";


function App() {
  const [menu, setmenu] = useState<Props[]>([
    {id: 1, name: 'Hamburger', price: 100, photo: Hamburger},
    {id: 2, name: 'Chicken burger', price: 120, photo: ChickenBurger},
    {id: 3, name: 'Pita Burger', price: 150, photo: PitaBurger},
    {id: 4, name: 'Coffee', price: 120, photo: Coffee},
    {id: 5, name: 'Fresh', price: 150, photo: Fresh},
    {id: 6, name: 'Tea', price: 50, photo: Tea},
  ]);



  return (
    <>
      <div className="OrderDetails">
        <h3>Order Details:</h3>
      </div>
      <div className="AddItems">
          <h3>Add items:</h3>
          <AddItems
              menu={menu}
          />
      </div>
    </>
  )
}

export default App
