import React from 'react';
import './Menu.css';

interface Props{
    id: number;
    photo: string;
    name: string;
    price: number;
    onCardClick: React.MouseEventHandler;
}
const Menu: React.FC<Props>  = ({id, photo, name, price, onCardClick}) =>{
  return(
    <div key={id} onClick={onCardClick} className="card">
       <img src={photo} alt='HamburgerImage' className="imgFood"/>
       <div className="cardBody">
         <p>{name}</p>
         <p>Price: {price} KGS</p>
       </div>
    </div>
  )
};
export default Menu;