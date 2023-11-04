import React from 'react';
import Menu from '../Menu/Menu';
import {Props} from '../../types';

interface Types {
    menu: Props[];

}
const AddItems: React.FC<Types> = (props) => {
    return (
        <div className="menuItems">
            {props.menu.map(item => (
                <Menu
                    key={item.id}
                    photo={item.photo}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    )
};

export default AddItems;