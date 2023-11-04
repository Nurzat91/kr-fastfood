import React from 'react';
import './Menu.css';

interface Props{
    key: number;
    photo: string;
    name: string;
    price: number;
}
const Menu: React.FC<Props>  = ({key, photo, name, price}) =>{
    return(
        <div key={key} className="card">
            <img src={photo} alt='HamburgerImage' className="imgFood"/>
            <div className="cardBody">
                <p>{name}</p>
                <p>Price: {price} KGS</p>
            </div>
        </div>
    )
};
export default Menu;