import React from 'react';
import Menu from '../Menu/Menu';
import {Props} from '../../types';

interface Types {
    menu: Props[];
    addChoose: (id: number) => void;
}
const AddItems: React.FC<Types> = (props) => {
  return (
    <div className="menuItems">
      {props.menu.map(item => (
         <Menu
            key={item.id}
            id={item.id}
            photo={item.photo}
            name={item.name}
            price={item.price}
            onCardClick={() => props.addChoose(item.id)}
         />
      ))}
    </div>
  )
};

export default AddItems;