import btnDelete from '../../assets/btnDelete.svg';
import React from 'react';
import {Props} from '../../types';
import './OrderDetails.css';

interface PROPS{
    items: { [id: number]: number };
    onDelete: (id: number) => void;
    menu: Props[];
    getTotalPrice: React.ReactNode;
}

const OrderDetails: React.FC<PROPS> = ({ items, onDelete, menu, getTotalPrice }) => {
  return (
    <div>
      <h3>Order Details:</h3>
        {Object.keys(items).length === 0 ? (
           <p>Order is empty! Please add some items!</p>
          ) : (
            Object.keys(items).map((id) => {
              const count = items[parseInt(id)];
              const selectedItem = menu.find((item) => item.id === parseInt(id));
              if (selectedItem) {
                return (
                   <div key={id} className="AddOrder">
                      <p className="addName">{selectedItem.name}</p>
                      <p>x{count}</p>
                      <p className="addPrice">{selectedItem.price} kgs</p>
                      <img
                        onClick={() => onDelete(parseInt(id))}
                        src={btnDelete}
                        alt="btnDelete"
                      />
                   </div>
                );
              }
                return null;
              })
          )}
          {Object.keys(items).length > 0 && (
            <h4>Total price: {getTotalPrice} kgs</h4>
        )}
    </div>
  );
};

export default OrderDetails;
