import {useState} from 'react';
import {Props} from '../../types';
import Hamburger from '../../assets/hamburgers.jpg';
import ChickenBurger from '../../assets/ChickenBurger.jpg';
import PitaBurger from '../../assets/PitaBurger.png';
import Coffee from '../../assets/Coffee.png';
import Fresh from '../../assets/Fresh.png';
import Tea from '../../assets/Tea.png';
import AddItems from "../../components/AddItems/AddItems";
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import './App.css'

function App() {
  const [menu] = useState<Props[]>([
    {id: 1, name: 'Hamburger', price: 100, photo: Hamburger},
    {id: 2, name: 'Chicken burger', price: 120, photo: ChickenBurger},
    {id: 3, name: 'Pita Burger', price: 150, photo: PitaBurger},
    {id: 4, name: 'Coffee', price: 120, photo: Coffee},
    {id: 5, name: 'Fresh', price: 150, photo: Fresh},
    {id: 6, name: 'Tea', price: 50, photo: Tea},
  ]);
    const [items, setitems] = useState<{ [id: number]: number }>({});
    const addChoose = (id: number) => {
      setitems(prevSelectedItems => {
        const updatedSelectedItems = { ...prevSelectedItems };

         if (updatedSelectedItems[id]) {
            updatedSelectedItems[id]++;
         } else {
            updatedSelectedItems[id] = 1;
         }
         return updatedSelectedItems;
      });
    };

    const onDelete = (id: number) => {
      setitems((prevSelectedItems) => {
        const updatedSelectedItems = { ...prevSelectedItems };
        delete updatedSelectedItems[id];
        return updatedSelectedItems;
      });
    };

    const getTotalPrice = () => {
      let totalPrice = 0;
      for (const id in items) {
        const selectedItem = menu.find((item) => item.id === parseInt(id));
        if (selectedItem) {
          totalPrice += selectedItem.price * items[id];
        }
      }
      return totalPrice;
    };

  return (
    <>
      <div className="OrderDetails">
        <OrderDetails
          items={items}
          onDelete={onDelete}
          menu={menu}
          getTotalPrice={getTotalPrice()}
        />
      </div>
      <div className="AddItems">
        <h3>Add items:</h3>
        <AddItems
          menu={menu}
          addChoose={addChoose}
        />
      </div>
    </>
  )
}
export default App
