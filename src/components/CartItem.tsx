
import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

interface CartItemProps {
  item: CartItemData;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onShowDetail: (item: CartItemData) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove, onShowDetail }: CartItemProps) => {
  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleShowDetail = () => {
    onShowDetail(item);
  };

  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex-shrink-0 cursor-pointer" onClick={handleShowDetail}>
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <div className="flex-grow cursor-pointer" onClick={handleShowDetail}>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-gray-500 mb-2">{item.description}</p>
        )}
        <p className="text-xl font-bold text-blue-600">
          {item.price.toLocaleString('vi-VN')}đ
        </p>
      </div>

      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDecrement}
          disabled={item.quantity <= 1}
          className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="text-lg font-semibold min-w-[2rem] text-center">
          {item.quantity}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleIncrement}
          className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-gray-900 mb-2">
          {(item.price * item.quantity).toLocaleString('vi-VN')}đ
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
