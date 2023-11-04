import './App.css'
import {useState} from 'react';
import {Props} from './types';

function App() {
  const [menu, setmenu] = useState<Props[]>([
    {id: 1, name: 'Hamburger', price: 100},
    {id: 2, name: 'Chicken burger', price: 120},
    {id: 1, name: 'Pita Burger', price: 150},
    {id: 1, name: 'Coffee', price: 120},
    {id: 1, name: 'Fresh', price: 150},
    {id: 1, name: 'Tea', price: 50},
  ]);

  return (
    <>
      <div>Order Details:

      </div>
      <div>Add items:
          {menu.map(item =>(
              <div key={item.id} className="card">
                <img/>
                <div>
                    <p>{item.name}</p>
                    <p>Price: {item.price} KGS</p>
                </div>
              </div>
          ))}
      </div>
    </>
  )
}

export default App
