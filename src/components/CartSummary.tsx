
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CreditCard, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  itemCount: number;
}

const CartSummary = ({ subtotal, shipping, tax, total, itemCount }: CartSummaryProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
      <div className="flex items-center space-x-2 mb-6">
        <ShoppingBag className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Tổng đơn hàng</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Tạm tính ({itemCount} sản phẩm)</span>
          <span>{subtotal.toLocaleString('vi-VN')}đ</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Phí vận chuyển</span>
          <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString('vi-VN')}đ`}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Thuế VAT</span>
          <span>{tax.toLocaleString('vi-VN')}đ</span>
        </div>

        <Separator />

        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Tổng cộng</span>
          <span className="text-blue-600">{total.toLocaleString('vi-VN')}đ</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button 
          onClick={handleCheckout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Thanh toán ngay
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleContinueShopping}
          className="w-full py-3 text-lg font-semibold"
        >
          Tiếp tục mua sắm
        </Button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Miễn phí vận chuyển cho đơn hàng trên 500.000đ</p>
      </div>
    </div>
  );
};

export default CartSummary;
